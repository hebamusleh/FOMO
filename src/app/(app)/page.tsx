"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to FOMO</h1>
      <p className="text-gray-600">Please choose an option to continue</p>
      <div className="flex space-x-4">
        <Button className=" bg-blue-600" variant="outline" size="lg" asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Button size="lg" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </main>
  );
}
