import React from 'react'

const Card = ({children}:{children:React.ReactNode}) => {
  return (
    <article className='bg-neutral-200 rounded shadow p-5 mt-5'>{children}</article>
  )
}

export default Card