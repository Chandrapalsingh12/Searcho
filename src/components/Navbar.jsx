import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from './Search';
import icons from '../Images/Searcho.png'

import { HiOutlineLightBulb } from 'react-icons/hi'
import { SiDarkreader } from 'react-icons/si'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-green-700 border-gray-200'>
            <div className="flex justify-between items-center space-x-5 w-screen">
                <NavLink to="/">

                    <img src={icons} alt='Icon' className='icons' />

                </NavLink>
                <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg' >
                    {darkTheme ? <HiOutlineLightBulb /> : <SiDarkreader />}
                </button>

            </div>
            <Search />

        </div>
    )
}
