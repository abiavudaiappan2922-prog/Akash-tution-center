"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (
        email === "admin@gmail.com" &&
        password === "admin123"
      ) {
        Cookies.set("admin", "true", {
          expires: 1,
          path: "/",
        });

        router.push("/admin");
      } else {
        setError("Invalid Email or Password");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#061321] via-[#0B1F33] to-[#132F4C] relative overflow-hidden">

      {/* Background Blur */}

      <div className="absolute w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="bg-white/10 backdrop-blur-xl border border-yellow-500/20 rounded-[35px] shadow-2xl p-10 w-[420px]"
      >

        <motion.div
          initial={{ scale: .5 }}
          animate={{ scale: 1 }}
          transition={{ delay: .3 }}
          className="text-center"
        >

          <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center mx-auto text-5xl shadow-xl">
            🔐
          </div>

          <h1 className="text-4xl font-extrabold text-yellow-400 mt-6">
            Admin Login
          </h1>

          <p className="text-gray-300 mt-3">
            AKASH TUITION CENTRE
          </p>

        </motion.div>

        <div className="mt-10 space-y-6">

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 outline-none focus:border-yellow-400"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#081827] border border-yellow-500/20 rounded-2xl p-4 text-white placeholder-gray-400 outline-none focus:border-yellow-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-4 text-gray-300"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500/20 border border-red-500 rounded-xl p-3 text-red-300 text-center"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 25px rgba(255,215,0,.5)",
            }}
            whileTap={{ scale: .95 }}
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#081827] font-bold text-xl"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>

        </div>

      </motion.div>

    </main>
  );
}