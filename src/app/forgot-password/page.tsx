import type { Metadata } from "next";
import ForgotClient from "./forgot-client";

export const metadata: Metadata = { title: "Reset Password" };

export default function ForgotPasswordPage() {
  return <ForgotClient />;
}
