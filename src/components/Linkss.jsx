import React from 'react';
import { NavLink } from 'react-router-dom';


const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/images', text: '🖼️ Images' },
    { url: '/videos', text: '📹 Videos' },
]

export const Linkss = () => {
    return (
        <div>
            <div className='flex sm:justify-around justify-between items-center mt-4'>
                {links.map(({ url, text }, ind) => (
                    <NavLink to={url} key={ind} className="m-2 text-blue-700 border-b-2 dark:text-blur-300 border-blue-700 pb-2">
                        {text}
                    </NavLink>
                ))}
            </div>

        </div>
    )
}
