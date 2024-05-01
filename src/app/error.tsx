'use client'

import { useRouter } from "next/navigation"

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

    const router = useRouter();
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => router.refresh()}>Try again</button>
        </div>
    )
}