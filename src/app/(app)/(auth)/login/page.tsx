import Logo from "@/components/icons/logosignin";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden flex-1 items-center justify-center bg-blue-50 p-10 xl:flex">
        <Image
          src="/assets/images/Login-1.svg"
          alt="login"
          width={450}
          height={450}
        />
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-4 flex items-center justify-center space-x-2 text-blue-500">
            <Logo className="w-22 h-22" />
            <span className="text-xl font-bold">FOMO</span>
          </div>

          <h1 className="mb-2 text-center text-2xl font-semibold">Log In</h1>
          <p className="mb-8 text-center text-sm text-gray-600">
            Log in to explore expert insights, career guidance, and tech
            resources tailored for aspiring professionals.
          </p>
          <LoginForm />
          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
