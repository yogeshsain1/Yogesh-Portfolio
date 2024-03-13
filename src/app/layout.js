
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vedas's Portfolio",
  description: "Personal Portfolio made by @Vedas_Dixit",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  </>
  );
}
