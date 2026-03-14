import Credentials from "@auth/core/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import connectDB from "./lib/db";
import User from "./models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, request) {
        try {
          await connectDB();
          const email = credentials.email;
          const password = credentials.password as string;
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("No user found with the email");
          }
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          throw new Error("Authorization failed", { cause: error });
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    // Required for Credentials provider to work.
    strategy: "jwt",
    // maxAge is in seconds (10 days)
    maxAge: 10 * 24 * 60 * 60,
  },
  secret: process.env.BETTER_AUTH_SECRET,
});
