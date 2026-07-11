"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    if (
      email === "admin@gmail.com"
      &&
      password === "admin123"
    ) {

      Cookies.set("admin", "true");

      router.push("/admin");

    } else {

      alert("Invalid email or password");

    }

  }

  return (

    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Admin Login
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-4 rounded-xl"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700"
          >
            Login
          </button>

        </div>

      </div>

    </main>

  );

}