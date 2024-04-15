'use client'
import React, { useEffect, useState } from 'react'



const DummyData = () => {
    
    const [users,setUsers] = useState<{id:number,firstName:string,lastName:string}[]>([])
    
    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json();
        // console.log(res,data)
        setUsers([data])
    }

    useEffect(() => {
        fetchData();
        
    },[])

    return (
        <ul>
            {users.map((user:{id:number,firstName:string,lastName:string}) => {
                return(
                    <li className='bg-neutral-100 rounded shadow mb-5 p-5' key={user.id}>
                        <h3> {user.firstName} {user.lastName} </h3>
                    </li>
                )
            })}
        </ul>
    )
}

export default DummyData