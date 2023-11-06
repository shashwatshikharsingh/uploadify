
"use client";
import svgLogo from '../assets/cloud.svg';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useState } from 'react';
import { useUser , UserButton } from "@clerk/nextjs";

import { auth, clerkClient } from '@clerk/nextjs';


function Nav() {  

  const { isLoaded, isSignedIn } = useUser();



  
  const router = useRouter();


  return (
    <div key="1" className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <Link
        className="flex items-center text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
        href="#"
      >
        <Image
          alt="Logo"
          className="mr-2 aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
          height="40"
          src={svgLogo}
          width="40"
        />
        Uploadify
      </Link>
      <div className="flex items-center space-x-4">
        <Link className="text-gray-600 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400" href="#">
          Home
        </Link>
        <Link className="text-gray-600 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400" href="#">
          Account
        </Link>


{isSignedIn ? (
  <>
  <Button asChild className="rounded-full" variant="outline">
    <Link href="/dashboard">Dashboard</Link>
  </Button>
    <UserButton className="rounded-full text-white bg-[#E95793] hover:bg-white hover:text-[#E95793] selection:bg-white" signInUrl='/register' afterSignOutUrl="/register" />
</>
      ) : (
        <>
        <Button asChild className="rounded-full" variant="outline">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild className="rounded-full text-white bg-[#E95793] hover:bg-white hover:text-[#E95793] selection:bg-white">
          <Link href="/register">Register</Link>
        </Button>
      </>
            )}
        
      

              </div>
    </div>
  )
}

export default Nav;
