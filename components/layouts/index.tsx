import { ReactNode } from "react";
// components
import DefaultLayout from "./default";
import MainFooter from "./mainFooter";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: "default" | "dashboard" | "logoOnly" | "home" | "board" | "admin";
};

export default function Layout({ variant = "default", children }: Props) {
  if (variant === "default") {
    return (
      <>
        <DefaultLayout>{children}</DefaultLayout>
      </>
    );
  }
  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
      <MainFooter />
    </>
  );
}
