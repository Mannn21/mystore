import React from 'react'

function Header() {
  return (
    <div className='fixed w-screen bg-slate-100 flex z-50 p-5 px-16'>
        {/* Desktop & Tablet */}
        <div className='hidden md:flex w-full h-full'>
            
        </div>


        {/* Mobile */}
        <div className='flex md:hidden w-full h-full'>

        </div>
    </div>
  )
}

export default Header