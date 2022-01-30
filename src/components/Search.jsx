import React, { useEffect, useState } from 'react';
import { Linkss } from './Linkss';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../contexts/ResultContexs';

import { GrFormClose } from 'react-icons/gr'
import { BsSearch } from 'react-icons/bs'

export const Search = () => {
    const [text, setText] = useState('');
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text);

    const [name, setName] = useState('');
    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue)

    }, [debouncedValue])

    const submitValue = () => {
        setText(name);
    }
    const onkeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log("enterrf");

            setText(name);


        }
    }


    return (
        <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-2'>
            <input
                value={name}
                type="text"
                className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
                placeholder='Search Searcho or type a URL'
                onChange={(e) => setName(e.target.value)}
                onKeyPress={onkeyPress}
            />
            {name && (
                <button type='button' className='absolute top-3.5 right-4 text-2xl text-gray-500' onClick={() => setName('')}>
                    <GrFormClose />
                </button>

            )}
            {name && (
                <button onClick={submitValue} className='absolute top-3.5 text-xl text-black dark:text-white' ><BsSearch /></button>
            )}


            <Linkss />
        </div>
    )
}
