import { type jsonDataType, pageData } from '../config/index';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

export default function toolList() {
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();
    const json = pageData[pathname] || [];

    return (
        <>
            <div className='flex flex-wrap'>
                {json.map((item: jsonDataType) => {
                    return (
                        <div
                            key={item.path}
                            className='transition-all w-40 h-8 flex items-center justify-center bg-gray-200 rounded cursor-pointer text-center mr-4 mb-4 hover:bg-gray-300'
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
