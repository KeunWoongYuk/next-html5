import { useState, ReactNode } from "react";
import MainFooter from "../mainFooter";

type Props = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      {children}
      <MainFooter />
    </>
  );
}
