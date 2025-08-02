"use client";

"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const LayoutClient = ({ children }: Props) => {
  const path = usePathname();
  const hideOn = [
    "/",
    "/login",
    "/signup",
    "/signup/student",
    "/signup/mentor",
  ];
  const isHidden = hideOn.includes(path);

  return (
    <>
      {!isHidden && <Header />}
      {children}
      {!isHidden && <Footer />}
    </>
  );
};

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutClient>{children}</LayoutClient>;
}
