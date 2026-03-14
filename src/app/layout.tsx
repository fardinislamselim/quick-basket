import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/Provider";

export const metadata: Metadata = {
  title: "FreshCart – Full Stack Grocery Delivery Web Application",
  description:
    "FreshCart is a full-stack grocery delivery web application built with modern web technologies. The platform allows users to easily browse grocery products, add items to their cart, and place orders online for home delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
