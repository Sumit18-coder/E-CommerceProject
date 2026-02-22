"use client"
import { useState } from "react"
import axios from "@/services/api"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function SignupPage() {
    const router = useRouter()
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/auth/signup", {
                name: form.name.trim(),
                phone: form.phone.trim(),
                email: form.email.trim(),
                password: form.password.trim(),
            })

            router.push(`/signup/verify?phone=${form.phone}`)
        } catch (err) {
            console.error("SIGNUP ERROR:", err);
            console.error("RESPONSE:", err.response);
            console.error("DATA:", err.response?.data);
            alert(err.response?.data?.message || err.message || "Signup failed");
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSignup} className="w-96 p-6 shadow rounded">
                <h1 className="text-2xl font-bold mb-4">Signup</h1>
                <input
                    className="w-full border p-2 mb-3"
                    placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    className="w-full border p-2 mb-3"
                    placeholder="Phone number"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                    className="w-full border p-2 mb-3"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    className="w-full border p-2 mb-4"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button className="w-full bg-orange-500 text-white py-2 rounded">
                    Create Account
                </button>
            </form>
        </div>
    )
}