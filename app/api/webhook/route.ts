import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: NextRequest) => {
  const rawBody = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const customerId = session?.metadata?.customerId;
  const courseId = session?.metadata?.courseId;

  if (event.type === "checkout.session.completed") {
    if (!customerId || !courseId) {
      return new NextResponse("Missing metadata", { status: 400 });
    }

    await db.purchase.create({
      data: {
        customerId,
        courseId,
      },
    });
  } else {
    return new NextResponse(`Unhandled event type: ${event.type}`, {
      status: 400,
    });
  }

  return new NextResponse("Success", { status: 200 });
};
