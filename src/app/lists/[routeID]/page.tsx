import React from 'react'
import CustomTodo from '@/components/CustomTodo'

type Props = {
  params: {
    routeID: string;
  }
}
export async function generateMetadata({ params }: Props) {
  // read route params
  const route = params.routeID
 
  // fetch data
 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: route,
  }
}

const page = ({params}: Props) => {

  return (
    <>
        <CustomTodo routeID={params.routeID} />
    </>
  )
}

export default page