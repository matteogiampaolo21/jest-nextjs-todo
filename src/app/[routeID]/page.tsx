import React from 'react'
import CustomTodo from '@/components/CustomTodo'
import { useParams } from 'next/navigation'

const page = ({params}: {params:{routeID:string}}) => {
  return (
    <>
        <CustomTodo routeID={params.routeID} />
    </>
  )
}

export default page