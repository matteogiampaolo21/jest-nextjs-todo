import Card from "@/components/Card";
import Link from "next/link";

const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json();
    
    return (data.users)
}


const page = async () => {
    const usersArray:[] = await fetchData();
    return (
        <div>
            <ul>
                {usersArray.map((user:{id:number,firstName:string,lastName:string}) => {
                    return(
                        <Card key={user.id}>
                            <li className="hover:pl-5 hover:text-blue-500 duration-200 cursor-pointer">
                                <Link href={`/user-feed/${user.id}`}>
                                    <h1>{user.firstName} {user.lastName}</h1>
                                </Link>
                            </li>
                        </Card>
                    )
                })}
            </ul>
        </div>
    )
}

export default page