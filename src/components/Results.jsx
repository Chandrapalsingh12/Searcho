import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';

import { useResultContext } from '../contexts/ResultContexs';

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();
    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/videos') {
                getResults(`/search/q=${searchTerm} videos`);
            } else {

                getResults(`${location.pathname}/q=${searchTerm}&num=100`)
            }
        }

    }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56 fonts'>
                    {results?.map(({ link, title }, ind) => (
                        <div key={ind} className='md:w-2/5 w-full'>
                            <a href={link} >
                                <p className='text-sm'>
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>

                        </div>

                    ))}

                </div>
            )
        case '/news':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
                    {results?.map(({ links, source, title }, id) => (
                        <div key={id} className='md:w-2/5 w-full'>
                            <a href={links?.[0].href} className='hover:underline'>
                                <p className='text-lg dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>
                            <div className='flex gap-4'>
                                <a href={source?.href} >
                                    {source?.href}
                                </a>
                            </div>

                        </div>

                    ))}

                </div>
            )
        case '/images':
            return (
                <div className='flex justify-center flex-wrap items-center fonts'>
                    {results?.map(({ image, link: { href, title } }, ind) => (
                        <a className='sm:p-3 p-5' href={href} key={ind} >
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className='w-36 break-words text-sm mt-2'>
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )
        case '/videos':
            return (
                <div className='flex flex-wrap'>
                    {results.map((video, ind) => (
                        <div key={ind} className='p-2'>
                            {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />}
                        </div>
                    ))}
                </div>
            )

        default:
            return 'ERROR';
    }


}
