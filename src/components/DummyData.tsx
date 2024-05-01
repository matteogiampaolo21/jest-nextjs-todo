'use client'
import React, { useEffect, useState } from 'react'



const DummyData = () => {
    
    const [users,setUsers] = useState([]);
    const [isError,setError] = useState(false)
    
    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json();
        // console.log(res,data)
        console.log(res.ok,data);
        if(!res.ok){setError(true)}
        setUsers(data.users)
    }

    useEffect(() => {
        fetchData();
        
    },[])

    return (
        <ul>
            {isError ?
            <>
                <h1>ERROR!!</h1>
            </>
            :
            <>
                {users.map((user:{id:number,firstName:string,lastName:string}) => {
                    return(
                        <li className='bg-neutral-100 rounded shadow mb-5 p-5' key={user.id}>
                            <h3> {user.firstName} {user.lastName} </h3>
                        </li>
                    )
                })}
            
            </>
            }
        </ul>
    )
}

export default DummyData