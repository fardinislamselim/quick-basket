"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h2 className="text-2xl font-bold underline text-Text">
        Welcome to Next.js!
      </h2>
    </div>
  );
}
