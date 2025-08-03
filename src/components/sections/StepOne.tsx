"use client";
import CalendarIcon from "@/components/icons/calender-svgrepo-com";
import EyeOffIcon from "@/components/icons/eye-slash";
import EyeIcon from "@/components/icons/eye-svgrepo-com";
import UserIcon from "@/components/icons/frame";
import LockIcon from "@/components/icons/lock";
import MailIcon from "@/components/icons/sms";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import RoleSelector from "./RoleSelector";

interface Props {
  onSwitchRole: (role: "student" | "mentor") => void;
}

export default function StepOneForm({ onSwitchRole }: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const fieldClass =
    "w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      <RoleSelector
        value={watch("role")}
        onChange={(role) => onSwitchRole(role)}
      />

      {/* First & Last Name */}
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">First Name</label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              {...register("firstName")}
              placeholder="First Name"
              className={fieldClass}
            />
          </div>
          {errors.firstName && (
            <p className="text-sm text-red-500">
              {errors.firstName.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">Last Name</label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              {...register("lastName")}
              placeholder="Last Name"
              className={fieldClass}
            />
          </div>
          {errors.lastName && (
            <p className="text-sm text-red-500">
              {errors.lastName.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <label className="mb-2 block font-medium">Email</label>
      <div className="relative mb-4">
        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message as string}</p>
      )}

      {/* Password */}
      <label className="mb-2 block font-medium">Password</label>
      <div className="relative mb-4">
        <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
          className={`${fieldClass} pr-10`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2">
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>
      {errors.password && (
        <p className="text-sm text-red-500">
          {errors.password.message as string}
        </p>
      )}

      {/* Confirm Password */}
      <label className="mb-2 block font-medium">Confirm Password</label>
      <div className="relative mb-4">
        <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type={showConfirm ? "text" : "password"}
          {...register("confirmPassword")}
          placeholder="Confirm Password"
          className={`${fieldClass} pr-10`}
        />
        <button
          type="button"
          onClick={() => setShowConfirm((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2">
          {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>
      {errors.confirmPassword && (
        <p className="text-sm text-red-500">
          {errors.confirmPassword.message as string}
        </p>
      )}

      {/* Date of Birth */}
      <label className="mb-2 block font-medium">Date of Birth</label>
      <div className="mb-6 grid grid-cols-3 gap-4">
        {(["dd", "mm", "yyyy"] as const).map((field) => (
          <div key={field} className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              {...register(`dob.${field}`)}
              placeholder={field.toUpperCase()}
              className={fieldClass}
            />
          </div>
        ))}
      </div>
      {errors.dob && (
        <p className="text-sm text-red-500">All DOB fields are required</p>
      )}
    </>
  );
}
