import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'

function Navbar() {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>


      {/* left */}
      <Link href="/" className='flex items-center '>
        <Image src="/logo.png" className='w-12 h-12 md:h-9 ' width={36} height={36} alt="AZC Logo" />
        <p className=' hidden md:block text-md font-medium tracking-wider'>AZC</p>
      </Link>
      {/* right */}
      <div className='flex items-center gap-6'>
        <SearchBar />
        <Link href="/">
          <Home className='w-4 h-4 text-gray-600' />
        </Link>
        <Bell className='w-4 h-4 text-gray-600' />
        <ShoppingCart className='w-4 h-4 text-gray-600' />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  )
}

export default Navbar