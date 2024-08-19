import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
      
      <h1 className='text-2xl text-white font-bold'>
        <i class="text-[#4ff7a3] ri-tv-fill mr-2"></i>
        <span className='text-2xl'>CINEMA.</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h2 className='text-white font-semibold text-xl mt-10'>New Feeds</h2>
        <Link className='hover:bg-[#4ff7a3] hover:text-white duration-300 rounded-lg p-5'>
            <i class="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link className='hover:bg-[#4ff7a3] hover:text-white duration-300 rounded-lg p-5'>
            <i class="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className='hover:bg-[#4ff7a3] hover:text-white duration-300 rounded-lg p-5'>
            <i class="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link className='hover:bg-[#4ff7a3] hover:text-white duration-300 rounded-lg p-5'>
          <i class="mr-2 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link className='hover:bg-[#4ff7a3] hover:text-white duration-300 rounded-lg p-5'>
          <i class="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className='border-none h-[1px] bg-zinc-400' />
      <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h2 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h2>
        <Link className='hover:bg-[#4ff7a3] hover:text-white duration-300 rounded-lg p-5'>
            <i class="mr-2 ri-file-info-fill"></i>About
        </Link>
        <Link className='hover:bg-[#4ff7a3] hover:text-white duration-300 rounded-lg p-5'>
            <i class="mr-2 ri-phone-fill"></i>Contact
        </Link>
      </nav>
    </div>
  )
}

export default Sidenav