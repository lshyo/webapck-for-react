const routers =[
    {
        path: '/',
        name: '首页',
        level: 1,
        component: () => import('./Home'),
        exact: true
    },
]
export default routers
