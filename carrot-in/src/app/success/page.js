import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center border border-green-100">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="bg-green-100 p-5 rounded-full">
            <CheckCircle className="text-green-600 w-14 h-14" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mt-6 text-green-700">
          Order Placed Successfully!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 text-lg">
          Thank you for shopping with <span className="font-semibold text-orange-500">Carrot-in</span>.
          Your order has been confirmed.
        </p>

        <p className="mt-2 text-gray-500 text-sm">
          You’ll receive an email confirmation shortly.
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition duration-300 shadow-md hover:shadow-lg"
          >
            Continue Shopping
          </Link>

          <Link
            href="/orders"
            className="px-6 py-3 rounded-xl border border-green-600 text-green-600 hover:bg-green-50 font-medium transition duration-300"
          >
            View Orders
          </Link>

        </div>
      </div>
    </div>
  )
}
