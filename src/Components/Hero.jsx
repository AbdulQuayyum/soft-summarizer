import React from 'react'

import { Logo } from "../Assets/Index"

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={Logo} alt='Logo' className='w-14 h-auto object-contain' />

                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/AbdulQuayyum/soft-summarizer.git", "_blank")
                    }
                    className='black-btn'
                >
                    Source Code
                </button>
            </nav>

            <h1 className='head-text'>
                Summarize with <br className='max-md:hidden' />
                <span className='gray-gradient '>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify your reading with Soft-Summarizer, an open-source summarizer
                that transforms lengthy articles into clear and concise summaries.
            </h2>
        </header>
    )
}

export default Hero