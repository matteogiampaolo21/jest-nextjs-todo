'use client'
import Link from 'next/link'
import React, { useState } from 'react'


const FindTodo = () => {

    const [route,setRoute] = useState<string>("")


    return (
        <form className="grid grid-cols-4 mt-3 gap-5">
            <input onChange={e => setRoute(e.target.value)} value={route} className="col-span-3 bg-neutral-200 rounded px-3 py-1" type="text" placeholder="Search for a list!" />
            <Link href={`/${route}`} className="bg-blue-500 text-center text-white px-2 py-1 rounded">Find List</Link>
        </form>
    )
}

export default FindTodo