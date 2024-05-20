import React from 'react'

export function Aside ({ children, action }) {
  return (
    <aside className={`hidden sm:block fixed bottom-0 ${action ? 'right-4' : 'left-4'} `}>
      <ul className='flex flex-col items-center gap-3'>
        {children}
        <li className='w-[2px] backdrop-blur-0 h-[150px] bg-primary' />
      </ul>
    </aside>
  )
}
