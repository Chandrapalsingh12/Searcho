import React from 'react';

const date = new Date().getFullYear()

export const Footer = () => {
    return (
        <div className='text-center p-10 mt-0 border-t dark:border-gray-700 border-gray-200'>
            <h1> {date} Copyright &copy; Searcho ,Inc.  </h1>
            <h2>Product of <a href="https://instagram.com/thechandrapalsinghrajput" target="_blank">Lucifer</a></h2>
        </div>
    )
}
