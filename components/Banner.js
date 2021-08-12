import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image 
                src='https://images.unsplash.com/photo-1619317190381-643a6b28d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80'
                layout='fill'
                objectFit='cover'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-gray-50 text-sm sm:text-lg'>Traveling? Find an Airbnb</p>

                <button className='text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Book Here</button>
            </div>
        </div>
    )
}

export default Banner
