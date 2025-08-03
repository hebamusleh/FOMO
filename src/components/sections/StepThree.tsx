"use client";
import CheckIcon from "@/components/icons/check";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

interface Props {
  loading: boolean;
}

export default function StepThreeForm({ loading }: Props) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const trackValue = watch("tracks");
  const skillValue = watch("skills");
  const termsAccepted = watch("termsAccepted");

  const fieldClass =
    "w-full pl-3 pr-3 py-3 h-12 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500";
  const dropdownClasses =
    "bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10 mt-1 max-h-60 overflow-auto";

  const trackOptions = [
    "UX/UI Design",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Digital Marketing",
  ];
  const skillOptions = ["Java", "C++", "Python", "Figma", "React", "Node.js"];

  return (
    <div className="space-y-6">
      {/* Tracks */}
      <div>
        <label className="mb-2 block font-medium">
          Tracks you are expert in
        </label>
        <Select
          value={trackValue}
          onValueChange={(val) =>
            setValue("tracks", val, { shouldValidate: true })
          }
          disabled={loading}>
          <SelectTrigger className={fieldClass}>
            <SelectValue placeholder="Select a track..." />
          </SelectTrigger>
          <SelectContent className={dropdownClasses}>
            {trackOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.tracks && (
          <p className="text-sm text-red-500">
            {errors.tracks.message as string}
          </p>
        )}
      </div>

      {/* Skills */}
      <div>
        <label className="mb-2 block font-medium">Skills</label>
        <Select
          value={skillValue}
          onValueChange={(val) =>
            setValue("skills", val, { shouldValidate: true })
          }
          disabled={loading}>
          <SelectTrigger className={fieldClass}>
            <SelectValue placeholder="Select your skill..." />
          </SelectTrigger>
          <SelectContent className={dropdownClasses}>
            {skillOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.skills && (
          <p className="text-sm text-red-500">
            {errors.skills.message as string}
          </p>
        )}
      </div>

      {/* Welcome statement */}
      <div>
        <label className="mb-2 block font-medium">Welcome statement</label>
        <Input
          {...register("welcome")}
          placeholder="A welcome sentence for students"
          disabled={loading}
          className={fieldClass}
        />
        {errors.welcome && (
          <p className="text-sm text-red-500">
            {errors.welcome.message as string}
          </p>
        )}
      </div>

      {/* Years of experience */}
      <div>
        <label className="mb-2 block font-medium">Years of experience</label>
        <Input
          {...register("experience")}
          type="number"
          placeholder="00"
          disabled={loading}
          className={fieldClass}
        />
        {errors.experience && (
          <p className="text-sm text-red-500">
            {errors.experience.message as string}
          </p>
        )}
      </div>

      {/* LinkedIn */}
      <div>
        <label className="mb-2 block font-medium">LinkedIn Profile</label>
        <Input
          {...register("linkedin")}
          type="url"
          placeholder="https://linkedin.com/in/username"
          disabled={loading}
          className={fieldClass}
        />
        {errors.linkedin && (
          <p className="text-sm text-red-500">
            {errors.linkedin.message as string}
          </p>
        )}
      </div>

      {/* Terms */}
      <div className="flex items-start space-x-3">
        <div
          onClick={() =>
            !loading &&
            setValue("termsAccepted", !termsAccepted, { shouldValidate: true })
          }
          className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-gray-300 ${
            termsAccepted ? "border-none bg-blue-600" : ""
          }`}>
          {termsAccepted && (
            <CheckIcon className="h-5 w-5 text-white" fill="currentColor" />
          )}
        </div>
        <label htmlFor="terms" className="text-sm">
          By Clicking “Sign In”, I Agree To{" "}
          <Link href="/terms" className="text-blue-500 underline">
            Terms Of Condition
          </Link>
          {" & "}
          <Link href="/privacy" className="text-blue-500 underline">
            Privacy Policy
          </Link>
        </label>
      </div>
      {errors.termsAccepted && (
        <p className="text-sm text-red-500">
          {errors.termsAccepted.message as string}
        </p>
      )}
    </div>
  );
}
