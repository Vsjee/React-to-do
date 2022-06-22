import React from 'react'

export const Head = ({ taskItems }) => {
  return (
    <header className='bg-secondary p-1 d-flex justify-content-center'>
      <h3 className='mx-3'>Active Tasks</h3>
      <span className='h3 text-info'>
        [ {taskItems.filter((t) => !t.done).length} ]
      </span>
    </header>
  )
}
