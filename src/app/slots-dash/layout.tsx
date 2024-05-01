'use client'

import { useEffect, useState } from "react"

const Layout = ({
    children,
    admin,
    user
}:{
    children:React.ReactNode
    admin:React.ReactNode
    user:React.ReactNode
}) => {

    const [userAuth,setAuth] = useState<string>("None");


    useEffect(() => {
        const getAuth: Promise<string> = new Promise((resolve, reject) => {
            const randomInt = Math.floor(Math.random() * 2);
            setTimeout(() => {
                if ( randomInt === 0){
                    resolve('Admin');
                }else{
                    resolve("User");
                }
            }, 300);
        });

        getAuth.then((result) => {
            setAuth(result)
        })
    },[])

    

    return(
        <div className="w-500 mx-auto my-10 bg-white shadow rounded p-5">
            <h1 className="border-b mb-5 font-bold border-neutral-400 ">This is top of Layout</h1>
            {children}
            {userAuth === "Admin" ? admin : user }
           
            <h1 className="border-t mt-5 font-bold border-neutral-400">This is bottom of Layout</h1>
        </div>
    )

}

export default Layout;