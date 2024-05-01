import React from 'react'

const page = ({params}: {params:{nestID:string}}) => {
  return (
    <div>This is nests {params.nestID}</div>
  )
}

export default page