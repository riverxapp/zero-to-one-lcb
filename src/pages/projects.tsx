import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

type IntakeFormInputs = {
  projectName: string;
  description: string;
  contactName: string;
  contactEmail: string;
};

export function ProjectsIntake() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<IntakeFormInputs>({ mode: "onTouched" });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: IntakeFormInputs) => {
    setSubmitError(null);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError("Submission failed. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4f1] py-12 px-3">
      <Card className="w-full max-w-lg border-[#f1ddc9] bg-white p-4 sm:p-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-[#26170e] font-extrabold">
            Start Your Project
          </CardTitle>
          <p className="text-center text-[#795548] mt-2">
            Tell us about your idea and how we can get in touch. We'll review your info and reach out promptly.
          </p>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-2xl text-[#2e7d32] font-bold mb-2">Thank you!</div>
              <p className="text-[#6f5b4a] mb-4">We’ve received your project details. Our team will contact you soon to set up a call.</p>
              <Button onClick={() => setSubmitted(false)} className="mt-2">
                Start Another Project
              </Button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label htmlFor="projectName" className="block text-[#26170e] font-medium mb-1">
                  Project Name<span className="text-[#d94828]">*</span>
                </label>
                <input
                  id="projectName"
                  type="text"
                  autoComplete="off"
                  className={`block w-full rounded border border-[#eac39a] px-3 py-2 text-[#26170e] bg-[#fffefb] focus:outline-[#ff6b4a] ${
                    errors.projectName ? "border-[#d94828]" : ""
                  }`}
                  {...register("projectName", {
                    required: "Project Name is required",
                    maxLength: { value: 80, message: "Max 80 characters" },
                  })}
                />
                {errors.projectName && (
                  <p className="text-[#d94828] text-xs mt-1">{errors.projectName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-[#26170e] font-medium mb-1">
                  Project Description<span className="text-[#d94828]">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className={`block w-full rounded border border-[#eac39a] px-3 py-2 text-[#26170e] bg-[#fffefb] focus:outline-[#ff6b4a] ${
                    errors.description ? "border-[#d94828]" : ""
                  }`}
                  {...register("description", {
                    required: "Project Description is required",
                    minLength: { value: 10, message: "Tell us a bit more (min 10 characters)" },
                  })}
                />
                {errors.description && (
                  <p className="text-[#d94828] text-xs mt-1">{errors.description.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contactName" className="block text-[#26170e] font-medium mb-1">
                  Your Name<span className="text-[#d94828]">*</span>
                </label>
                <input
                  id="contactName"
                  type="text"
                  autoComplete="name"
                  className={`block w-full rounded border border-[#eac39a] px-3 py-2 text-[#26170e] bg-[#fffefb] focus:outline-[#ff6b4a] ${
                    errors.contactName ? "border-[#d94828]" : ""
                  }`}
                  {...register("contactName", {
                    required: "Your Name is required",
                    maxLength: { value: 60, message: "Max 60 characters" },
                  })}
                />
                {errors.contactName && (
                  <p className="text-[#d94828] text-xs mt-1">{errors.contactName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-[#26170e] font-medium mb-1">
                  Email<span className="text-[#d94828]">*</span>
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  autoComplete="email"
                  className={`block w-full rounded border border-[#eac39a] px-3 py-2 text-[#26170e] bg-[#fffefb] focus:outline-[#ff6b4a] ${
                    errors.contactEmail ? "border-[#d94828]" : ""
                  }`}
                  {...register("contactEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.contactEmail && (
                  <p className="text-[#d94828] text-xs mt-1">{errors.contactEmail.message}</p>
                )}
              </div>

              {submitError && <p className="text-[#d94828] text-center mt-2">{submitError}</p>}

              <Button type="submit" className="w-full bg-[#ff6b4a] text-white hover:bg-[#d94828]" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

export default ProjectsIntake;