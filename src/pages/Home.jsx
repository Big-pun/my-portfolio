import React from 'react'
import Intro from '../components/Home/Intro'

function Home() {
    return (
        <div>
            <div className='container mx-auto grid grid-cols-12'>
                <div className='col-span-6 col-start-3'>
                    <Intro />
                </div>
            </div>
        </div>
    )
}

export default Home