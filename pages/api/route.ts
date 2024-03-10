import type { NextApiRequest, NextApiResponse } from "next";
import { NEThandler } from ".netlify/functions/triggerEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const netlifyResponse = await NEThandler(req.body);

    const responseData = JSON.parse(netlifyResponse.body);

    if (netlifyResponse.statusCode === 200) {
      return res
        .status(200)
        .json({ message: "Email sent successfully", data: responseData });
    } else {
      return res
        .status(netlifyResponse.statusCode)
        .json({ message: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error in /api/route:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.toString() });
  }
}
