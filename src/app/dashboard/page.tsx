
export default function errorTestPage() {

    let x = Math.floor((Math.random() * 10) + 1);

    if( x > 2) {
        console.log(x)
        throw new Error("Number was not greater than 5")
    }

    



    return (
        <div className='my-10'>
            <article className='mx-auto w-500'>
                <h1 className='text-4xl'>Error Testing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum pariatur cum sit aperiam? Qui nemo dicta tempora voluptate. Quibusdam, fuga.</p>
            </article>
        </div>
    )
}
