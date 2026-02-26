import { Logger, NotificationTypes } from '@medusajs/framework/types'
import { AbstractNotificationProviderService, MedusaError } from '@medusajs/framework/utils'
import { Resend, CreateEmailOptions } from 'resend'
import { render } from '@react-email/render'
import { generateEmailTemplate } from '../templates'

type InjectedDependencies = {
  logger: Logger
}

interface ResendServiceConfig {
  apiKey: string
  from: string
}

export interface ResendNotificationServiceOptions {
  api_key: string
  from: string
}

type NotificationEmailOptions = Omit<
  CreateEmailOptions,
  'to' | 'from' | 'react' | 'html' | 'attachments'
>

export class ResendNotificationService extends AbstractNotificationProviderService {
  static identifier = "RESEND_NOTIFICATION_SERVICE"
  protected config_: ResendServiceConfig
  protected logger_: Logger
  protected resend: Resend

  constructor({ logger }: InjectedDependencies, options: ResendNotificationServiceOptions) {
    super()
    this.config_ = {
      apiKey: options.api_key,
      from: options.from
    }
    this.logger_ = logger
    this.resend = new Resend(this.config_.apiKey)
  }

  async send(
    notification: NotificationTypes.ProviderSendNotificationDTO
  ): Promise<NotificationTypes.ProviderSendNotificationResultsDTO> {
    if (!notification) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, `No notification information provided`)
    }
    if (notification.channel === 'sms') {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, `SMS notification not supported`)
    }

    // Step 1: Generate the React element from template
    this.logger_.info(`[resend] Generating template "${notification.template}" for ${notification.to}`)
    let emailElement: React.ReactElement

    try {
      emailElement = generateEmailTemplate(notification.template, notification.data) as React.ReactElement
    } catch (error: any) {
      this.logger_.error(`[resend] Template generation failed: ${error.message}`)
      if (error instanceof MedusaError) throw error
      throw new MedusaError(
        MedusaError.Types.UNEXPECTED_STATE,
        `Failed to generate email template "${notification.template}": ${error.message}`
      )
    }

    // Step 2: Render React element to HTML string explicitly
    let html: string
    try {
      html = await render(emailElement)
      this.logger_.info(`[resend] Template rendered to HTML (${html.length} chars)`)
    } catch (error: any) {
      this.logger_.error(`[resend] HTML rendering failed: ${error.message}`)
      throw new MedusaError(
        MedusaError.Types.UNEXPECTED_STATE,
        `Failed to render email template "${notification.template}" to HTML: ${error.message}`
      )
    }

    const emailOptions = notification.data?.emailOptions as NotificationEmailOptions | undefined

    // Step 3: Send via Resend API using html (not react prop)
    const message: CreateEmailOptions = {
      to: notification.to,
      from: notification.from?.trim() ?? this.config_.from,
      html,
      subject: emailOptions?.subject ?? 'You have a new notification',
      headers: emailOptions?.headers,
      replyTo: emailOptions?.replyTo,
      cc: emailOptions?.cc,
      bcc: emailOptions?.bcc,
      tags: emailOptions?.tags,
      text: emailOptions?.text,
      attachments: Array.isArray(notification.attachments)
        ? notification.attachments.map((attachment) => ({
            content: attachment.content,
            filename: attachment.filename,
            content_type: attachment.content_type,
            disposition: attachment.disposition ?? 'attachment',
            id: attachment.id ?? undefined
          }))
        : undefined,
      scheduledAt: emailOptions?.scheduledAt
    }

    try {
      const { data, error } = await this.resend.emails.send(message)
      if (error) {
        this.logger_.error(`[resend] Resend API error: ${JSON.stringify(error)}`)
        throw new MedusaError(
          MedusaError.Types.UNEXPECTED_STATE,
          `Resend API rejected email to ${notification.to}: ${error.message}`
        )
      }
      this.logger_.info(`[resend] Email sent to ${notification.to} (id: ${data?.id})`)
      return {}
    } catch (error: any) {
      if (error instanceof MedusaError) throw error
      this.logger_.error(`[resend] Send failed: ${error.message}`)
      throw new MedusaError(
        MedusaError.Types.UNEXPECTED_STATE,
        `Failed to send "${notification.template}" email to ${notification.to}: ${error.message}`
      )
    }
  }
}
