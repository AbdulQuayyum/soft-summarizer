import React, { useState, useEffect } from "react";

import { Copy, LinkIcon, Loader, Tick } from "../Assets/Index";
import { useLazyGetSummaryQuery } from "../Services/Api";

const Demo = () => {
    const [article, setArticle] = useState({ url: "", summary: "", });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState("");

    // RTK lazy query
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    // Load data from localStorage on mount
    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem("articles")
        );

        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);

    const HandleSubmit = async (e) => {
        e.preventDefault();

        const existingArticle = allArticles.find(
            (item) => item.url === article.url
        );

        if (existingArticle) return setArticle(existingArticle);

        const { data } = await getSummary({ ArticleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];

            // update state and local storage
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
    }

    // copy the url and toggle the icon for user feedback
    const HandleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(false), 3000);
    };

    const HandleKeyDown = (e) => {
        if (e.keyCode === 13) {
            HandleSubmit(e);
        }
    };

    return (
        <section className='mt-16 w-full max-w-xl'>
            {/* Search */}
            <div className='flex flex-col w-full gap-2'>
                <form
                    className='relative flex justify-center items-center'
                    onSubmit={HandleSubmit}>
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
                {/* Browse History */}
                <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
                    {allArticles.reverse().map((item, index) => (
                        <div
                            key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            className='link-card'
                        >
                            <div className='copy-btn' onClick={() => HandleCopy(item.url)}>
                                <img
                                    src={copied === item.url ? Tick : Copy}
                                    alt={copied === item.url ? "tick-icon" : "copy-icon"}
                                    className='w-[40%] h-[40%] object-contain'
                                />
                            </div>
                            <p className='flex-1 font-nunito text-gray-400 font-medium text-sm truncate'>
                                {item.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Display Result */}
            <div className='my-10 max-w-full flex justify-center items-center'>
                {isFetching ? (
                    <img src={Loader} alt='loader' className='w-20 h-20 object-contain' />
                ) : error ? (
                    <p className='font-inter font-bold text-black dark:text-white text-center'>
                        Well, that wasn't supposed to happen...
                        <br />
                        <span className='font-nunito font-normal text-gray-700'>
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-nunito font-bold text-gray-600 dark:text-gray-300 text-xl'>
                                Article <span className='blue-gradient'>Summary</span>
                            </h2>
                            <div className='summary-box'>
                                <p className='font-inter font-medium text-sm text-gray-700 dark:text-gray-100'>
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Demo