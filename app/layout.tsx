import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "V/Studio — Web, Brand & Design",
  description:
    "Independent creative studio for web development, branding, logo design, and graphic design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
