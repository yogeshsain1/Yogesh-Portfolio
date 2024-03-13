import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vedas's Portfolio",
  description: "Personal Portfolio made by @Vedas_Dixit",
  icon: "ps.ico"
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/ps.ico" />
        
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}