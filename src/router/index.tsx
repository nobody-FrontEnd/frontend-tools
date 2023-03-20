import React, { LazyExoticComponent } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { IconHome, IconMosaic } from '@arco-design/web-react/icon';
const LazyImportComponent = (props: { lazyChildren: LazyExoticComponent<() => JSX.Element> }) => {
    return (
        <React.Suspense>
            <props.lazyChildren />
        </React.Suspense>
    );
};

const Main = React.lazy(() => import('../views/Main'));
const Home = React.lazy(() => import('../views/Home'));
const toolList = React.lazy(() => import('../views/toolList/index'));
const routers: {
    path: string;
    element: React.LazyExoticComponent<() => JSX.Element>;
    name: string;
    icon: () => JSX.Element;
}[] = [
    {
        path: '/',
        element: Home,
        name: '首页',
        icon: () => {
            return (
                <>
                    <IconHome />
                </>
            );
        },
    },
    {
        path: '/json',
        element: toolList,
        name: 'json',
        icon: () => {
            return (
                <>
                    <IconMosaic />
                </>
            );
        },
    },
    {
        path: '/dataTime',
        element: toolList,
        name: '日期/时间',
        icon: () => {
            return (
                <>
                    <IconMosaic />
                </>
            );
        },
    },
];

const router: any = createBrowserRouter([
    {
        path: '',
        element: <LazyImportComponent lazyChildren={Main} />,
        // children: [
        //     {
        //         path: '/',
        //         element: <LazyImportComponent lazyChildren={Home} />,
        //     },
        // ],
        children: routers.map((item: any) => {
            return {
                path: item.path,
                element: <LazyImportComponent lazyChildren={item.element} />,
            };
        }),
    },
]);

export default router;

export { routers };
