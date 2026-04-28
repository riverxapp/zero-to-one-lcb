import { api } from "../lib/api";

export async function submitProjectIntake(intake: {
  projectName: string;
  description: string;
  contactName: string;
  contactEmail: string;
}) {
  // This would be replaced with a real API endpoint in production
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return {
    success: true,
    message: "Your project intake form has been received. We'll reach out soon!",
    submitted: intake,
  };
}