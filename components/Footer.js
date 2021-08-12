function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 md:px-72 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p className='cursor-pointer'>How Air works</p>
                <p className='cursor-pointer'>Newsroom</p>
                <p className='cursor-pointer'>Investors</p>
                <p className='cursor-pointer'>Air Plus</p>
                <p className='cursor-pointer'>Air Luxe</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p className='cursor-pointer'>Mission</p>
                <p className='cursor-pointer'>Values</p>
                <p className='cursor-pointer'>Awards</p>
                <p className='cursor-pointer'>Memberships</p>
                <p className='cursor-pointer'>Reviews</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p className='cursor-pointer'>Email</p>
                <p className='cursor-pointer'>Latest Articles</p>
                <p className='cursor-pointer'>Upcoming Events</p>
                <p className='cursor-pointer'>Form</p>
                <p className='cursor-pointer'>Become A Host</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p className='cursor-pointer'>Contact</p>
                <p className='cursor-pointer'>Directions</p>
                <p className='cursor-pointer'>Social</p>
                <p className='cursor-pointer'>Sign Up</p>
                <p className='cursor-pointer'>Press</p>
            </div>

        </div>
    )
}

export default Footer
