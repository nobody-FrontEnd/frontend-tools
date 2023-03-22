import React, { LazyExoticComponent } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FNIcon from '../components/Icon/FNIcon';

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

const routers: customRouter[] = [
    {
        path: '/',
        element: Home,
        name: '首页',
        icon: () => {
            return (
                <>
                    <FNIcon name='material-symbols:home-outline-rounded' />
                </>
            );
        },
    },
    {
        path: '/json',
        element: toolList,
        name: 'JSON',
        icon: () => {
            return (
                <>
                    <FNIcon name='lucide:file-json' />
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
                    <FNIcon name='material-symbols:date-range-outline' />
                </>
            );
        },
    },
    {
        path: '/text',
        element: toolList,
        name: '文本',
        icon: () => {
            return (
                <>
                    <FNIcon name='material-symbols:format-color-text' />
                </>
            );
        },
    },
    {
        path: '/image',
        element: toolList,
        name: '图片',
        icon: () => {
            return (
                <>
                    <FNIcon name='material-symbols:broken-image-outline-sharp' />
                </>
            );
        },
    },
    {
        path: '/color',
        element: toolList,
        name: '颜色',
        icon: () => {
            return (
                <>
                    <FNIcon name='ic:outline-color-lens' />
                </>
            );
        },
    },
    {
        path: '/code',
        element: toolList,
        name: '编码',
        icon: () => {
            return (
                <>
                    <FNIcon name='material-symbols:deployed-code-outline' />
                </>
            );
        },
    },
    {
        path: '/extension',
        element: toolList,
        name: '加解密',
        icon: () => {
            return (
                <>
                    <FNIcon name='mdi:encryption-reset' />
                </>
            );
        },
    },
    {
        path: '/network',
        element: toolList,
        name: '网络',
        icon: () => {
            return (
                <>
                    <FNIcon name='material-symbols:network-manage' />
                </>
            );
        },
    },
    {
        path: '/programming',
        element: toolList,
        name: '编程',
        icon: () => {
            return (
                <>
                    <FNIcon name='material-symbols:code-blocks-outline-rounded' />
                </>
            );
        },
    },
    {
        path: '/html',
        element: toolList,
        name: '网页',
        icon: () => {
            return (
                <>
                    <FNIcon name='ph:file-html-light' />
                </>
            );
        },
    },
];

const router: any = createBrowserRouter([
    {
        path: '',
        element: <LazyImportComponent lazyChildren={Main} />,
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
