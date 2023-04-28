import React from 'react'
import { Demo, Hero } from "../Components/Index"

const MainLayout = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </main>
    )
}

export default MainLayout