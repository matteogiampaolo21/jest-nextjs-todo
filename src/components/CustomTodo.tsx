'use client'
import React, { useState, FC, useEffect } from 'react'
import { Reorder } from 'framer-motion'

export const capStr = (str:string) => {
    if (str[0].match(/[a-z]/i)) {            
        return str.charAt(0).toUpperCase() + str.slice(1);
    }else{
        return str;
    }
}


const CustomTodo:FC<{routeID:string}> = ({ routeID }) => {

    
    const [item,setItem] = useState("");
    const [items,setItems] = useState<{text:string,date:string,id:number}[]>([]);



    useEffect(()=> {
        const savedItems = JSON.parse(localStorage.getItem(routeID) || "[]");
        setItems(savedItems);
        localStorage.setItem(routeID, JSON.stringify(savedItems));
    },[])



    // let value
    // value = localStorage.getItem("favoriteNumber") || "";

    // localStorage.setItem("favoriteNumber", "hello world!")



    const addItem = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const currentDate = new Date();
        const itemObj = {text:item,date:`${currentDate.getDate()} / ${currentDate.getMonth()} / ${currentDate.getFullYear()} `,id:currentDate.getTime()}

        const savedItems:{text:string,date:string}[] = JSON.parse(localStorage.getItem(routeID) || "[]");
        savedItems.push(itemObj);
        localStorage.setItem(routeID, JSON.stringify(savedItems))


        setItems([...items,itemObj]);
        setItem("");
    }

    const removeItem = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, itemId:number) => {
        e.preventDefault();
        const newArray = items.filter(item => item.id !== itemId);

        localStorage.setItem(routeID, JSON.stringify(newArray))
        setItems(newArray);

    }

    const handleListChange = () => {
        const changedItems = JSON.stringify(items);
        localStorage.setItem(routeID,changedItems);
    }


    return (
        <main>
            <header className='text-center my-5 w-500 mx-auto bg-neutral-100 rounded px-3 py-2 shadow'>
                <h1 className='break-words text-2xl'> {capStr(routeID)} Todo List </h1>
                <p className='text-lg'>Add items to your list!</p>
                <form className="grid grid-cols-6 mt-3 gap-5">
                    <button className="bg-blue-500 hover:bg-blue-700 duration-200 text-center text-white px-2 py-1 rounded"> Clear </button>
                    <input onChange={e => setItem(e.target.value)} value={item} className="col-span-4 bg-neutral-200 rounded px-3 py-1" type="text" placeholder="Add item to list!" />
                    <button onClick={e => addItem(e)} className="bg-blue-500 hover:bg-blue-700 duration-200 text-center text-white px-2 py-1 rounded">Add</button>
                </form>
            </header>

            <main className='text-center my-5 w-500 mx-auto bg-neutral-100 rounded px-3 py-2 shadow'>
                <p className=''>Current items in list : {items.length} </p>

                <Reorder.Group values={items} onReorder={setItems}>
                    {items.map((listItem,index) => (
                        <Reorder.Item value={listItem} onMouseUp={handleListChange}  key={listItem.id}>
                            <article className='bg-white px-2 py-1 grid gap-2 grid-cols-4 items-center rounded shadow my-5 text-left'>
                                <div className='col-span-3'>
                                    <h3 className='text-lg'>{listItem.text}</h3>
                                    <p className='text-sm'> {listItem.date} | {index} </p>
                                </div>
                                <button onClick={e => removeItem(e,listItem.id)} className='bg-neutral-100 h-10 shadow rounded duration-200 hover:bg-neutral-300'>Remove</button>
                            </article>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </main>
        </main>
    )
}

export default CustomTodo