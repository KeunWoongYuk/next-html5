import { ReactElement } from "react";
import Layout from "../../components/layouts";
import IndexPage from "../../components/dashboard/indexPage";

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="default">{page}</Layout>;
};

export default function index() {
  return <IndexPage />;
}
