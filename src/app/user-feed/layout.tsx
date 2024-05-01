export default function UserFeedLayout({children,users}:{children:React.ReactNode,users:React.ReactNode}){
    return(
        <div className="mx-auto w-500 my-10">
            <h1 className="font-bold text-2xl mb-5">User feed Layout | Top</h1>
            {children}
            {users}
            <h1 className="font-bold text-2xl mt-5">User feed Layout | Bottom</h1>
        </div>
    )
}