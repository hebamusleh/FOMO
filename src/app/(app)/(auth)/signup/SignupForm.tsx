"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import CalendarIcon from "@/components/icons/calender-svgrepo-com";
import EyeIcon from "@/components/icons/eye-slash";
import EyeOffIcon from "@/components/icons/eye-svgrepo-com";
import UserIcon from "@/components/icons/frame";
import LockIcon from "@/components/icons/lock";
import MailIcon from "@/components/icons/sms";
import Link from "next/link";

const stepOneSchema = yup.object({
  role: yup
    .mixed<"student" | "mentor">()
    .oneOf(["student", "mentor"])
    .required(),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  dob: yup.object({
    dd: yup.string().required("Day is required"),
    mm: yup.string().required("Month is required"),
    yyyy: yup.string().required("Year is required"),
  }),
});

const stepTwoSchema = yup.object({
  pronoun: yup.string().required("Select a pronoun"),
  major: yup.string().required("Select a major"),
  photo: yup.mixed<File>().nullable(),
  goals: yup.string().required("Enter your goals"),
  bio: yup.string().required("Enter your bio"),
  linkedin: yup.string().url("Must be a valid URL").nullable(),
});

type StepOneData = yup.InferType<typeof stepOneSchema>;
type StepTwoData = yup.InferType<typeof stepTwoSchema>;
type FormData = StepOneData & StepTwoData;

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);

  const methods = useForm<FormData>({
    resolver: yupResolver(step === 1 ? stepOneSchema : (stepTwoSchema as any)),
    defaultValues: {
      role: "student",
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
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue("photo", file);
  };

  const onNext = async (data: FormData) => {
    const isStepOneValid = await stepOneSchema.isValid(data, {
      abortEarly: false,
    });
    if (!isStepOneValid) {
      toast.error("Please fill all required fields before continuing");
      return;
    }
    setStep(2);
  };

  const onSubmit = async (data: FormData) => {
    console.log("Submitted Data:", data);
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "dob") {
          const dob = data.dob;
          formData.append("dob", `${dob.yyyy}-${dob.mm}-${dob.dd}`);
        } else if (key === "photo" && value instanceof File) {
          formData.append("photo", value);
        } else if (value) {
          formData.append(key, value as string);
        }
      });

      await axios.post("/api/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Signed up successfully");
      router.replace("/home");
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
        <div className="flex w-full items-center justify-center bg-blue-50 p-6 md:w-1/2 md:p-12">
          <img
            src={
              step === 1
                ? "/assets/images/Sign-up-1.svg"
                : "/assets/images/Sign-up-2.svg"
            }
            alt="Signup Illustration"
            className="h-auto max-w-full"
          />
        </div>

        <div className="flex w-full items-start justify-center p-6 md:w-1/2 md:p-12">
          <form
            onSubmit={
              step === 1 ? handleSubmit(onNext) : handleSubmit(onSubmit)
            }
            className="w-full max-w-lg space-y-6">
            <h1 className="text-center text-3xl font-bold">Sign Up</h1>
            <p className="text-center text-gray-600">
              {step === 1
                ? "Join us today and unlock access to exclusive features. Sign up in just a few steps and start your journey with us!"
                : "Join us today for exclusive features—sign up in seconds!"}
            </p>

            {step === 1 && (
              <>
                <label className="block font-medium">I Went To</label>
                <div className="flex space-x-4">
                  {(["student", "mentor"] as const).map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() =>
                        setValue("role", role, {
                          shouldDirty: true,
                          shouldTouch: true,
                          shouldValidate: true,
                        })
                      }
                      className={`flex-1 rounded-lg border py-3 text-center font-medium transition-shadow ${
                        methods.watch("role") === role
                          ? "border-none bg-white shadow"
                          : "border-none bg-gray-100"
                      }`}>
                      {role === "student" ? "Student" : "Mentor"}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      placeholder="First Name"
                      {...register("firstName")}
                      className="w-full rounded-lg bg-gray-100 py-3 pl-10 pr-3 focus:ring-2"
                    />
                  </div>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    <input
                      placeholder="Last Name"
                      {...register("lastName")}
                      className="w-full rounded-lg bg-gray-100 py-3 pl-10 pr-3 focus:ring-2"
                    />
                  </div>
                </div>
                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName?.message}
                  </p>
                )}
                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName?.message}
                  </p>
                )}

                {/* email */}
                <label className="block font-medium">Email</label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className="w-full rounded-lg bg-gray-100 py-3 pl-10 pr-3 focus:ring-2"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}

                <label className="block font-medium">Password</label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                    className="w-full rounded-lg bg-gray-100 py-3 pl-10 pr-3 focus:ring-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform">
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}

                {/* confirm password */}
                <label className="block font-medium">Confirm Password</label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                    className="w-full rounded-lg bg-gray-100 py-3 pl-10 pr-3 focus:ring-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform">
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}

                {/* DOB */}
                <label className="block font-medium">Date Of Birth</label>
                <div className="grid grid-cols-3 gap-4">
                  {(["dd", "mm", "yyyy"] as const).map((field) => (
                    <div key={field} className="relative">
                      <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                      <input
                        placeholder={field.toUpperCase()}
                        {...register(`dob.${field}`)}
                        className="w-full rounded-lg bg-gray-100 py-3 pl-10 pr-3 focus:ring-2"
                      />
                    </div>
                  ))}
                </div>
                {errors.dob && (
                  <p className="text-sm text-red-500">
                    {errors.dob.dd?.message ||
                      errors.dob.mm?.message ||
                      errors.dob.yyyy?.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700">
                  Next
                </button>
              </>
            )}

            {/* ✅ STEP TWO */}
            {step === 2 && (
              <>
                <label className="block font-medium">Pronoun</label>
                <select
                  {...register("pronoun")}
                  className="w-full rounded-lg bg-gray-100 p-3">
                  <option value="">Select pronoun…</option>
                  <option value="he">he</option>
                  <option value="she">she</option>
                  <option value="they">they</option>
                </select>
                {errors.pronoun && (
                  <p className="text-sm text-red-500">
                    {errors.pronoun.message}
                  </p>
                )}

                <label className="block font-medium">Major</label>
                <select
                  {...register("major")}
                  className="w-full rounded-lg bg-gray-100 p-3">
                  <option value="">Select major…</option>
                  <option value="software engineering">
                    software engineering
                  </option>
                  <option value="uxui design">uxui design</option>
                  <option value="computer science">computer science</option>
                </select>
                {errors.major && (
                  <p className="text-sm text-red-500">{errors.major.message}</p>
                )}

                <label className="block font-medium">
                  Add Your Profile Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  className="w-full rounded-lg bg-gray-100 p-3"
                />

                <label className="block font-medium">Goals</label>
                <input
                  placeholder="Goals"
                  {...register("goals")}
                  className="w-full rounded-lg bg-gray-100 p-3"
                />
                {errors.goals && (
                  <p className="text-sm text-red-500">{errors.goals.message}</p>
                )}

                <label className="block font-medium">Bio</label>
                <textarea
                  rows={3}
                  placeholder="Bio"
                  {...register("bio")}
                  className="w-full rounded-lg bg-gray-100 p-3"
                />
                {errors.bio && (
                  <p className="text-sm text-red-500">{errors.bio.message}</p>
                )}

                <label className="block font-medium">LinkedIn Profile</label>
                <input
                  placeholder="LinkedIn URL"
                  {...register("linkedin")}
                  className="w-full rounded-lg bg-gray-100 p-3"
                />

                <div className="text-sm text-gray-500">
                  By clicking “Sign Up”, I agree to Terms of{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 hover:underline">
                    Service & Privacy Policy.
                  </Link>
                  .
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700">
                  {loading ? "Signing…" : "Sign Up"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </FormProvider>
  );
}
