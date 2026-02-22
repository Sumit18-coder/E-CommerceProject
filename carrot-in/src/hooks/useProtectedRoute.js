"use client"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function useProtectedRoute() {
    const {token} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!token) router.push("/login")
    },[token])
}