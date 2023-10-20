import Image from 'next/image'
import Link from 'next/link'

import svgLogo from '../assets/cloud.svg'

export default function Home() {
  return (
    <div>
      <div className='w-full h-20 sticky top-0 bg-[#98E4FF]'>
        <div className='container mx-auto px-4 h-full'>

        <div className='flex justify-between items-center h-full'>
          <div className='flex items-center justify-start h-full'>
          <Image src={svgLogo} width={100} height={100} />
          <h1 className='text-2xl text-[#E95793] text-center font-bold py-2 px-4'>Uploadify</h1>
          </div>
              <ul className='hidden md:flex gap-x-6 text-[#E95793] text-center font-semibold'>
                <li>
                 
                  <Link href="/login">
                    <p className='text-xl py-2 px-4 border-[3px] border-[#E95793] rounded-full'>Login</p>
                  </Link>
          
                </li>
                <li>
              
                  <Link href="/register">
                    <p className='text-xl py-2 px-4 border-[3px] border-[#E95793] rounded-full'>Register</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

      </div>

      
    </div>
  )
}
