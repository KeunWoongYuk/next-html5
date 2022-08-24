import NextLink from "next/link";
import Script from "next/script";

export default function MainFooter() {
  return (
    <>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
      {/* Bootstrap core JavaScript */}
      <Script
        src="/assets/vendor/jquery/jquery.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      {/* Core plugin JavaScript */}
      <Script
        src="/assets/vendor/jquery-easing/jquery.easing.min.js"
        strategy="beforeInteractive"
      ></Script>

      {/* Custom scripts for all pages */}
      <Script
        src="/assets/js/sb-admin-2.min.js"
        strategy="beforeInteractive"
      ></Script>
    </>
  );
}
