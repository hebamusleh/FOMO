// app/page.jsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="-mt-16 bg-blue-50">
        <div className="m-auto flex max-w-[1536px] flex-col items-center gap-8 rounded-b-xl p-8 pt-16 md:flex-row">
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold">
              Welcome, Rawand Abu Shammala!
              <br />
              Your Tech Journey Starts Here
            </h1>
            <p className="mb-6 text-gray-700">
              FOMO techno is a guidance platform designed to help arab students
              explore software engineering...
            </p>
            <Button className="bg-blue-600 text-white" size="lg">
              Start Exploring
            </Button>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/images/hero.png"
              alt="Hero"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
