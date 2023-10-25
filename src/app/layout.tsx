import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>

      <body>{children}</body>
    </html>
  );
}
