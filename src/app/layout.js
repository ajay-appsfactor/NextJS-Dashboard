import "./globals.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <main>
            {children}
            {/* <ToastContainer /> */}
          </main>
        </div>
      </body>
    </html>
  );
}
