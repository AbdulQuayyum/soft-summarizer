import React from 'react'

import { Toggler } from "../Theme/Index"
import { Logo } from "../Assets/Index"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <>
                <img src={Logo} alt='Logo' className='w-14 h-auto object-contain' />
            </>
            <div className=' flex gap-4'>
                <Toggler />
                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/AbdulQuayyum/soft-summarizer.git", "_blank")
                    }
                    className='black-btn'
                >
                    Source Code
                </button>
            </div>
        </nav>
    )
}

export default Navbar 