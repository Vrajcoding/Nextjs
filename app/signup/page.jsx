"use client"

import { useState } from "react"

export default function SignupPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });


    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(form)
        });

        const data = await res.json();
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 border p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-black text-white p-2 w-full rounded">
          Signup
        </button>
      </form>
    </div>
    );
}