import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from 'next/image';


import svgLogo from '../../../assets/cloud.svg';

import Link from "next/link";

export default function Component() {
  return (
    <section key="1" className="w-full h-full flex flex-col items-center justify-center bg-white text-[#E95793]">
      <header className="w-full flex items-center justify-between p-4">
        <Image
          alt="Logo"
          className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
          height="60"
          src={svgLogo}
          width="60"
        />
        <Button asChild className="bg-[#E95793] text-white rounded-full hover:bg-white hover:text-[#E95793] transition-colors">
          <Link href="/register">Sign Up</Link>
        </Button>
      </header>
      <div className="w-full max-w-2xl px-4 py-8 mx-auto rounded-lg bg-[#E95793] text-white flex items-center">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form className="space-y-4 mt-4">
            <div className="space-y-1">
              <Label htmlFor="email">Email or Username</Label>
              <Input className="text-[#E95793]" placeholder="hello@uploadify.com" id="email" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input className="text-[#E95793]" id="password" required type="password" />
            </div>
            <Button
              className="w-full bg-white text-[#E95793] hover:bg-[#E95793] hover:text-white transition-colors"
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link className="underline text-white" href="#">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="w-px h-full bg-white mx-8" />
        <div className="w-1/2 flex flex-col items-center justify-center space-y-4">
          <Button className="bg-[#4285F4] text-white hover:bg-[#E95793] hover:text-white transition-colors">
            <svg
              className=" h-6 w-6 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="21.17" x2="12" y1="8" y2="8" />
              <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
              <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
            </svg>
            Login with Google
          </Button>
          <Button className="bg-black text-white hover:bg-[#E95793] hover:text-white transition-colors">
            <svg
              className=" h-6 w-6 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
            Login with Apple
          </Button>
          <Button className="bg-[#3B5998] text-white hover:bg-[#E95793] hover:text-white transition-colors">
            <svg
              className=" h-6 w-6 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Login with Facebook
          </Button>
        </div>
      </div>
    </section>
  )
}

