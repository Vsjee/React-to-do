import React from 'react'
import { ThemeSwitch } from './themeSwitch'

export const Head = ({ taskItems }) => {
  return (
    <header className='bg-dark p-1'>
      < nav className='d-flex justify-content-center' >
        <h3 className='mx-2'>Active Tasks</h3>
        <span className='h3 text-info'>
          [{taskItems.filter((t) => !t.done).length}]
        </span>
        <ThemeSwitch />
      </nav >
    </header >
  )
}
