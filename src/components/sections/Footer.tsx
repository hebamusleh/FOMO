import {
  Call,
  Facebook,
  Instagram,
  Linkedin,
  Sms2,
  Twitter,
} from "@/components/icons";
import Logo from "@/components/icons/logo2";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 bg-blue-600 text-white">
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-1 gap-y-16 px-8 py-12 lg:grid-cols-2">
        <div className="flex max-w-xs flex-col space-y-6 px-4">
          <Link href="/" className="flex items-center space-x-2 text-3xl">
            <Logo className="h-10 w-10 text-white" />
            <span>FOMO</span>
          </Link>
          <p className="leading-snug">
            FOMO Techno helps students explore tech fields and start their
            careers with the right guidance and resources.
          </p>
          <div className="flex items-center space-x-4">
            <Call className="h-5 w-5" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center space-x-4">
            <Sms2 className="h-5 w-5" />
            <span>fomo@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-24">
          {/* First list */}
          <div className="flex flex-col space-y-3 lg:mt-6">
            {["Home", "About Us", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="hover:underline">
                {item}
              </Link>
            ))}
          </div>

          {/* Second list */}
          <div className="flex flex-col space-y-3 lg:mt-6">
            {["Terms & Conditions", "Privacy Policy", "Feedback"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item
                    .toLowerCase()
                    .replace(/&|\s+/g, (match) =>
                      match === "&" ? "and" : "-",
                    )}`}
                  className="hover:underline">
                  {item}
                </Link>
              ),
            )}
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center space-x-4 sm:justify-start lg:justify-end">
            <Facebook className="h-6 w-6 text-white hover:text-gray-200" />
            <Instagram className="h-6 w-6 text-white hover:text-gray-200" />
            <Twitter className="h-6 w-6 text-white hover:text-gray-200" />
            <Linkedin className="h-6 w-6 text-white hover:text-gray-200" />
          </div>
        </div>
      </div>

      <div className="py-4 text-center text-sm">
        © {new Date().getFullYear()} FOMO Tech. All rights reserved.
      </div>
    </footer>
  );
}
