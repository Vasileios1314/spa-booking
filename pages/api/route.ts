import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;
    const netlifyFunctionURL = `${process.env.NEXT_PUBLIC_NETLIFY_FUNCTIONS_BASE_URL}/triggerEmail`;

    const response = await fetch(netlifyFunctionURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      body: JSON.stringify({
        from: process.env.NEXT_PUBLIC_EMAIL_FROM,
        to: process.env.NEXT_PUBLIC_EMAIL_TO,
        subject: "New Ticket!!",
        parameters: { name, email, message },
      }),
    });

    return res.status(200).json({
      message: `Success ${(process.env.NEXT_PUBLIC_URL, process.env.URL)}`,
      data: { name, email, message },
    });
  } catch (error) {
    console.error("Error in /api/route:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
}
