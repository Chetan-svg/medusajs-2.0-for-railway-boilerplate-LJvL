import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const key_id = process.env.RAZORPAY_ID;
  const key_secret = process.env.RAZORPAY_SECRET;
  const razorpay_account = process.env.RAZORPAY_ACCOUNT;

  // Check if env vars are set
  const envCheck = {
    RAZORPAY_ID: key_id ? `Set (${key_id.substring(0, 10)}...)` : "NOT SET",
    RAZORPAY_SECRET: key_secret ? `Set (${key_secret.substring(0, 5)}...)` : "NOT SET",
    RAZORPAY_ACCOUNT: razorpay_account ? `Set (${razorpay_account})` : "NOT SET",
  };

  if (!key_id || !key_secret) {
    return res.json({
      success: false,
      error: "Missing required environment variables",
      envCheck,
    });
  }

  try {
    // Dynamic import to use the razorpay package from the plugin's dependencies
    const Razorpay = (await import("razorpay")).default;

    const razorpay = new Razorpay({
      key_id,
      key_secret,
      headers: razorpay_account ? {
        "X-Razorpay-Account": razorpay_account,
      } : undefined,
    });

    // Try to create a test order
    const order = await razorpay.orders.create({
      amount: 100, // 1 INR in paise
      currency: "INR",
      receipt: `test_${Date.now()}`,
    });

    return res.json({
      success: true,
      message: "Razorpay connection successful!",
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        status: order.status,
      },
      envCheck,
    });
  } catch (error: any) {
    return res.json({
      success: false,
      error: "Razorpay API Error",
      errorDetails: {
        message: error.message,
        statusCode: error.statusCode,
        error: error.error,
        description: error.error?.description,
        fullError: JSON.stringify(error, null, 2),
      },
      envCheck,
    });
  }
};
