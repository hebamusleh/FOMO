import QueryProvider from "@/components/common/QueryProvider";
import LayoutWrapper from "@/components/sections/LayoutWrapper";
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
      <body className="antialiased">
        <QueryProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
