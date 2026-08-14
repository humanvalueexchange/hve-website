import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human Value Exchange",
  description: "The official Human Value Exchange website."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
