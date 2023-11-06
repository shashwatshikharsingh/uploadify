import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import srcLogo from '../../../assets/cloud.svg';

import { SignUp } from "@clerk/nextjs";
 


export default function Component() {
  return (
    <div key="1" className="min-h-screen bg-white text-[#E95793]">
      <header className="w-full flex items-center justify-between p-4">
        <Link href="/">
            <Image
                alt="Logo"
                className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                height="60"
                src={srcLogo}
                width="60"
            />
        </Link>
        <Button asChild className="bg-[#E95793] text-white rounded-full hover:bg-white hover:text-[#E95793] transition-colors">
          <Link href="/login">Login</Link>
        </Button>
      </header>

      <div className="w-full h-full bg-[#E95793] dark:bg-gray-900 flex items-center justify-center py-16">
      <div className="grid grid-cols-2 gap-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-2xl divide-x divide-gray-200 dark:divide-gray-700">
        <div className="space-y-4 text-[#E95793] dark:text-gray-100 px-6">
          <h1 className="text-3xl font-bold">Why use Uploadify?</h1>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-2xl font-bold dark:text-gray-400">
            <li>Instant file uploads</li>
            <li>Easy to use interface</li>
            <li>Secure and reliable</li>
            <li>Fast processing</li>
            <li>Excellent customer support</li>
          </ul>
        </div>
        <div className="px-6 py-4 space-y-4">
          <h2 className="text-2xl font-semibold text-[#E95793] dark:text-gray-100">Get started now</h2>
          <p className="text-gray-600 dark:text-gray-400">Join the thousands of businesses using Uploadify today.</p>
          <SignUp />

        </div>
      </div>
    </div>
    </div>
  )
}


