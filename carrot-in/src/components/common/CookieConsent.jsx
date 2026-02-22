"use client"
import { useEffect, useState } from "react"

const CookieConsent = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("CookieConsent")
        if(!consent){
            setVisible(true)
        }
    },[])

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent","accept")
        setVisible(false)
    }
    if(!visible) return null

    return(
        <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-wd bg-white shadow-lg rounded-xl p-4 z-50">
          <p className="text-sm text-gray-700">
            We use cookies to improve your experience, personalize content, and analyze traffic.
          </p>
          <div className="flex justify-end gap-3 mt-3">
            <button
  onClick={acceptCookies}
  className="
    cursor-pointer
    transition-all duration-200 ease-out
    bg-orange-500 text-white px-4 py-2 rounded-lg
    hover:bg-orange-600
    hover:shadow-[0_4px_12px_rgba(249,115,22,0.45)]
    active:scale-95
    active:shadow-none
    transition-all duration-200
  "
>
  Accept
</button>

          </div>
        </div>
    )
}

export default CookieConsent