import React from 'react'

import { Navbar } from "./Index"

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <Navbar />
            <h1 className='head-text'>
                Summarize with <br className='max-md:hidden' />
                <span className='gray-gradient '>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify your reading with Soft-Summarizer, an open-source summarizer
                that transforms lengthy articles into clear and concise summaries.
                <br />
                All we need is a link of the original.
            </h2>
        </header>
    )
}

export default Hero