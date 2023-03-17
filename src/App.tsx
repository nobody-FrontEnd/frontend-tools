import React from 'react';
import '@arco-design/web-react/dist/css/arco.css';
import './App.css';

import { setupAxios } from './utils/axios';

import { RouterProvider } from 'react-router-dom';

import route from './router';

setupAxios();

function App() {
    return (
        <>
            <RouterProvider router={route} />
        </>
    );
}

export default App;
