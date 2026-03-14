import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreshCart – Full Stack Grocery Delivery Web Application",
  description:
    "FreshCart is a full-stack grocery delivery web application built with modern web technologies. The platform allows users to easily browse grocery products, add items to their cart, and place orders online for home delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
