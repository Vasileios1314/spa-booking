import { Resend } from "resend";
// import index from "@/emails/index";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function POST(request, response) {
  // const { name, email, message } = await request.body;
  // try {
  //   const data = await resend.emails.send({
  //     from: process.env.NEXT_PUBLIC_EMAIL_FROM, //create a domain email
  //     // from: "onboarding@resend.dev", //dev perpose
  //     to: process.env.NEXT_PUBLIC_EMAIL_TO,
  //     subject: "New Ticket!!",
  //     react: index({ name, email, message }),
  //   });
  //   response.status(200).json({ success: true, data });
  // } catch (error) {
  //   // console.error("Error sending email:", error);
  //   response.status(500).json({ success: false, error: error.message });
  // }
}
