import type { Metadata } from "next";
import "../../axios.config";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOMO App",
  description: "Fear of Missing Out - Stay Connected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
