import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Results } from './Results';


export const Routese = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route exact path="/" element={<Navigate to="/search" />} />
                {["/search", "/images", "/news", "/videos"].map((path, index) =>
                    <Route path={path} element={<Results />} key={index} />
                )}


            </Routes>

        </div>
    )
}
