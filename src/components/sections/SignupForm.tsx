"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { SignUpAPI } from "@/services/auth.api";
import { uploadMedia } from "@/services/storage.api";
import { signupSchema } from "@/validation";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import StepOneForm from "./StepOne";
import StepThreeForm from "./StepThree";
import StepTwoForm from "./StepTwo";

interface Props {
  initialRole: "student" | "mentor";
  onSwitchRole: (role: "student" | "mentor") => void;
}

export default function SignupForm({ initialRole, onSwitchRole }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ✅ Hook form setup
  const methods = useForm({
    resolver: yupResolver(signupSchema, {
      abortEarly: false,
      stripUnknown: true,
    }),
    defaultValues: {
      role: initialRole,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: { dd: "", mm: "", yyyy: "" },
      pronoun: "",
      major: "",
      photo: null,
      goals: "",
      bio: "",
      linkedin: "",
      tracks: "",
      skills: "",
      welcome: "",
      experience: "",
      termsAccepted: false,
    },
    mode: "onBlur",
  });

  const { handleSubmit, trigger, getValues } = methods;

  // ✅ validate step-by-step
  const handleNext = async () => {
    let fields: string[] = [];

    if (step === 1) {
      fields = [
        "role",
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword",
        "dob.dd",
        "dob.mm",
        "dob.yyyy",
      ];
    } else if (step === 2) {
      fields = ["pronoun", "major", "goals", "bio", "linkedin"];
    }

    const valid = await trigger(fields as any);
    if (valid) setStep((step + 1) as 1 | 2 | 3);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data);

    try {
      let avatarId: string | null = null;

      if (data.photo instanceof File) {
        const formData = new FormData();
        formData.append("file", data.photo);
        formData.append("alt", `${data.firstName} ${data.lastName}`);

        const uploadRes = await uploadMedia(formData);
        avatarId = uploadRes?.doc?.id;
      }
      const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        dateOfBirth: `${data.dob.yyyy}-${data.dob.mm}-${data.dob.dd}`,
        pronoun: data.pronoun,
        major: data.major,
        avatar: avatarId,
        goals: data.goals,
        bio: data.bio,
        linkedin: data.linkedin,
        track: data.track,
        skills: data.skills,
        message: data.message,
        yearOfExperience: data.yearOfExperience,
      };

      console.log("body : ", body);

      const result = await SignUpAPI({
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        dateOfBirth: `${data.dob.yyyy}-${data.dob.mm}-${data.dob.dd}`,
        pronoun: data.pronoun,
        major: data.major,
        avatar: avatarId,
        goals: data.goals,
        bio: data.bio,
        linkedin: data.linkedin,
        track: data.track,
        skills: data.skills,
        message: data.message,
        yearOfExperience: data.yearOfExperience,
      });

      if (result.success) {
        toast.success("Signed up successfully");
        router.replace("/home");
      } else {
        toast.error(result.message || "Signup failed");
        console.log(result.message);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message?: string }>;
        toast.error(axiosError.response?.data?.message || "Signup failed");
      } else {
        toast.error("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Left illustration */}
        <div className="flex w-full items-center justify-center bg-blue-50 p-6 md:w-1/2 md:p-12">
          <Image
            src={
              step === 1
                ? "/assets/images/Sign-up-1.svg"
                : "/assets/images/Sign-up-2.svg"
            }
            alt="Signup Illustration"
            width={500}
            height={500}
            className="h-auto max-w-full"
          />
        </div>

        {/* Right form */}
        <div className="flex w-full items-center justify-center p-6 md:w-1/2 md:p-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg space-y-6">
            {step === 1 && (
              <>
                <h1 className="text-center text-3xl font-bold">Sign Up</h1>
                <StepOneForm onSwitchRole={onSwitchRole} />
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full rounded-lg bg-blue-600 py-3 text-white">
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="text-center text-3xl font-bold">More Details</h1>
                <StepTwoForm />
                <button
                  type={getValues("role") === "mentor" ? "button" : "submit"}
                  onClick={async () => {
                    const currentRole = getValues("role");

                    // Only validate fields specific to Step 2
                    const fieldsToValidate = [
                      "pronoun",
                      "major",
                      "goals",
                      "bio",
                      "linkedin",
                    ];

                    const validStep2 = await trigger(fieldsToValidate as any);

                    if (!validStep2) {
                      return;
                    }

                    if (currentRole === "mentor") {
                      setStep(3);
                    } else {
                      onSubmit(getValues());
                    }
                  }}
                  className="w-full rounded-lg bg-blue-600 py-3 text-white">
                  {getValues("role") === "mentor" ? "Next" : "Submit"}
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="text-center text-3xl font-bold">
                  Almost There!
                </h1>
                <StepThreeForm loading={loading} />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-600 py-3 text-white">
                  {loading ? "Submitting…" : "Submit"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </FormProvider>
  );
}
