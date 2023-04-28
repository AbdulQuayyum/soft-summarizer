import React, { useState, useEffect } from "react";

import { Copy, LinkIcon, Loader, Tick } from "../Assets/Index";

const Demo = () => {
    const [article, setArticle] = useState({ url: "", summary: "", });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const HandleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };

    return (
        <section className='mt-16 w-full max-w-xl'>
            {/* Search */}
            <div className='flex flex-col w-full gap-2'>
                <form
                    className='relative flex justify-center items-center'
                    onSubmit={handleSubmit}>

                    <img src={LinkIcon}
                        alt='link-icon'
                        className='absolute left-0 my-2 ml-3 w-5'
                    />

                    <input
                        type='url'
                        placeholder='Paste the article link'
                        value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        onKeyDown={HandleKeyDown}
                        required
                        className='url-input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
                    />
                    <button
                        type='submit'
                        className='submit-btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                        <p>↵</p>
                    </button>

                </form>
            </div>
        </section>
    )
}

export default Demo