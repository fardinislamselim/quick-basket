import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { motion } from "motion/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = isValidEmail(email) && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      await signIn("credentials", {
        email,
        password,
      });
      console.log("Login attempt:", { email, password });
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex flex-col justify-center gap-6 p-10 rounded-3xl bg-white/10 backdrop-blur-xl shadow-lg"
        >
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1726869818459-061e0986c1a1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fresh groceries in a basket"
            className="w-full h-64 object-cover rounded-2xl shadow-md"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-extrabold text-Primary">
              Welcome Back to <span className="text-Accent">Quick Basket</span>
            </h2>
            <p className="text-Text/70 leading-relaxed">
              Sign in to continue ordering fresh groceries and daily essentials.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md mx-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-8"
        >
          {/* <Link
            href="/register"
            className="absolute top-6 left-6 flex items-center gap-2 text-Primary hover:text-Primary/80 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-[18px]">Back</span>
          </Link> */}

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extrabold text-Primary"
          >
            Sign In
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-Text/70 mt-2"
          >
            Access your account to start shopping.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            <div className="space-y-2">
              <label className="text-Text/70 font-medium">Email Address</label>
              <div className="flex items-center gap-2 bg-white/20 border border-white/20 rounded-xl px-3 py-2">
                <Mail className="w-5 h-5 text-Primary/80" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  disabled={isLoading}
                  className="w-full bg-transparent outline-none text-Text placeholder:text-Text/50 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-Text/70 font-medium">Password</label>
              <div className="flex items-center gap-2 bg-white/20 border border-white/20 rounded-xl px-3 py-2">
                <Lock className="w-5 h-5 text-Primary/80" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className="w-full bg-transparent outline-none text-Text placeholder:text-Text/50 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="text-Primary/80 hover:text-Primary transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                !isFormValid || isLoading
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-Primary text-white hover:bg-Primary/90"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="flex items-center gap-3 text-Text/60">
              <span className="h-px flex-1 bg-white/20" />
              <span className="text-sm">Or continue with</span>
              <span className="h-px flex-1 bg-white/20" />
            </div>

            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className="w-full flex items-center justify-center gap-2 border border-white/20 py-3 rounded-xl text-Text hover:bg-white/10 transition"
            >
              <FaGoogle className="w-5 h-5" />
              Sign in with Google
            </motion.button>

            <p className="text-center text-Text/70 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-Primary font-semibold cursor-pointer"
              >
                Sign up here
              </Link>
            </p>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginForm;
