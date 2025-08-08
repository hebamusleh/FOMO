"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

import CheckIcon from "@/components/icons/check";
import EyeIcon from "@/components/icons/eye-slash";
import EyeOffIcon from "@/components/icons/eye-svgrepo-com";
import LockIcon from "@/components/icons/lock";
import EmailIcon from "@/components/icons/sms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    remember: yup.boolean(),
  });
  type LoginFormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const rememberValue = useWatch({ control, name: "remember" });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/users/login', {
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;

      // Store JWT token
      if (data.remember) {
        document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 30}`; // 30 days
      } else {
        sessionStorage.setItem('token', token);
      }

      // Fetch user data
      await setUser();

      toast.success('Logged in successfully');
      router.push('/home');
    } catch (error) {
      toast.error('Login failed: Invalid credentials');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="relative">
        <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className={`w-full rounded-lg bg-gray-100 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 ${
            errors.email ? "!border-red-500" : "focus:ring-blue-500"
          }`}
        />
      </div>
      {errors.email && (
        <p className="text-sm font-semibold text-red-500">
          {errors.email.message}
        </p>
      )}

      <div className="relative">
        <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
          className={`w-full rounded-lg bg-gray-100 py-3 pl-10 pr-10 focus:outline-none focus:ring-2 ${
            errors.password ? "!border-red-500" : "focus:ring-blue-500"
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform">
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {errors.password && (
        <p className="text-sm font-semibold text-red-500">
          {errors.password.message}
        </p>
      )}

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center space-x-2">
          <input
            type="checkbox"
            {...register("remember")}
            className="sr-only"
          />
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border ${
              rememberValue ? "" : "border-gray-300"
            }`}>
            {rememberValue && <CheckIcon className="h-4 w-4 text-white" />}
          </div>
          <span className="text-gray-700">Remember me?</span>
        </label>

        <Link href="/forgot" className="text-sm text-blue-600 hover:underline">
          Forgot?
        </Link>
      </div>

      {/* submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50">
        {loading ? "Loading…" : "Login"}
      </button>
    </form>
  );
}
