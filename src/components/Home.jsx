import React from 'react'
import Sidenav from './templates/Sidenav'

function Home() {
  document.title='MoviesApp | Homepage'
  return (
    <>
      <Sidenav/>
      <div className='w-[80%] h-full'></div>
    </>
    
  )
}

export default Home