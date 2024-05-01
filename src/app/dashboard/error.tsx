'use client'

import { useEffect } from 'react'



export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error);
    },[error]);

    return(
        <div className='w-500 mx-auto'>
            <h1 className='text-5xl font-bold'>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try refreshing!</button>
        </div>
    )
}