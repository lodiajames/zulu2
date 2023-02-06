import React from 'react'
import NavbarItem from './NavbarItem'

export default function Banner() {
  return (
    <div className='flex justify-center space-x-2 bg-[#99261F] lg:text-xl p-4'>
          <NavbarItem title="Trending" params="fetchTrending"/>
          <NavbarItem title="Top Rated" params="fetchTopRated"/>
    </div>
  )
}
