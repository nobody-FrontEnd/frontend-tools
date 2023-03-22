type customRouter = {
    path: string;
    element: React.LazyExoticComponent<() => JSX.Element>;
    name: string;
    icon: () => JSX.Element;
};
