import React from 'react'

type Props = {
  params: {
    id: string;
  }
}
export async function generateMetadata({ params }: Props) {
  const route = params.id
 
  return {
    title: route,
  }
}

const page = ({params}:Props) => {
    console.log(params.id)
    return (
        <div>
            {params.id}
        </div>
  )
}

export default page