import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      router.push("/dashboard");
    }
  }, []);

  return <></>;
};

export default Index;
