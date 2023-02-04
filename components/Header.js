import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
export default function Header() {
  return (
    <div className='flex justify-between mx-2  max-w-6xl sm:max-auto items-center py-6'>
            <div className='flex'>
              <MenuItem  title="HOME" address="/" Icon={AiFillHome}/>
              <MenuItem  title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>


            <div className='flex items-center space-x-5'>
               <DarkModeSwitch/>
                <Link href="/">
                    <h2 className='2xl text-white'><span className='font-extrabold bg-red-600 py-1 px-2 rounded-lg mr-1 text-yellow-200'>ZULU</span><span className='text-xl  hidden sm:inline text-green-700'> два</span></h2>
                </Link>
            </div>
    </div>
  )
}
