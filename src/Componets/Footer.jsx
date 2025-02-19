import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-[50px] grid md:grid-cols-3 grid-template-columns-(repeat-3, 1fr)'>
        <div className=" bg-amber-50 h-full "></div>
        <div className="bg-amber-300 h-full "></div>
        <div className="bg-amber-950 h-full "></div>
    </div>
  )
}
