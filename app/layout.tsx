import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carolinas Mastermind, Wilmington, NC | Hosted by Barry Coppedge",
  description: "Connecting developers and investors for unparalleled growth | Hosted by Barry",
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
