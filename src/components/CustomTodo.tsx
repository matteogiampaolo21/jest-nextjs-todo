'use client'
import React, { useState, FC } from 'react'
import { useParams } from 'next/navigation'

export const capStr = (str:string) => {
    if (str[0].match(/[a-z]/i)) {            
        return str.charAt(0).toUpperCase() + str.slice(1);
    }else{
        return str;
    }
}


const CustomTodo:FC<{routeID:string}> = ({ routeID }) => {

    
    const [item,setItem] = useState("");
    const [items,setItems] = useState<string[]>([]);

    const addItem = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setItems([...items,item]);
        setItem("");
    }


    return (
        <main>
            <header className='text-center my-5 w-500 mx-auto bg-white rounded px-3 py-2 shadow'>
                <h1 className='break-words text-2xl'> {capStr(routeID)} Todo List </h1>
                <p className='text-lg'>Add items to your list!</p>
                <form className="grid grid-cols-4 mt-3 gap-5">
                    <input onChange={e => setItem(e.target.value)} value={item} className="col-span-3 bg-neutral-200 rounded px-3 py-1" type="text" placeholder="Add item to list!" />
                    <button onClick={e => addItem(e)} className="bg-blue-500 text-center text-white px-2 py-1 rounded">Add</button>
                </form>
            </header>

            <main className='text-center my-5 w-500 mx-auto bg-white rounded px-3 py-2 shadow'>
                <p>Current items in list : {items.length} </p>

            </main>
        </main>
    )
}

export default CustomTodo