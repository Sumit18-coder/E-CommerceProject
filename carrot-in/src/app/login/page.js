"use client"
import { useState } from 'react'
import { useAuth } from "@/context/AuthContext"
import axios from "@/services/api"
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const { login } = useAuth();
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("/auth/login", {
                phone,
                password,
            });

            // FIXED: pass single object
            login({
                token: res.data.token,
                user: res.data.user,
            });

            router.push("/"); // redirect after login
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form
                onSubmit={handleLogin}
                className='w-96 p-6 rounded shadow-md'
            >
                <h1 className='text-2xl font-bold mb-4'>Login</h1>
                <input
                    className='w-full border p-2 mb-3'
                    placeholder='Phone number'
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input type="password"
                    className='w-full border p-2 mb-4'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    disabled={loading}
                    className='w-full bg-orange-500 text-white py-2 rounded'
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}
