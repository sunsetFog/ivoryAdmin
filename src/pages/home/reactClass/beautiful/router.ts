export default {
    name: '高阶组件',
    menuType: 'type1',
    superior: '/home',
    content: () => import(/* webpackChunkName: "beautiful" */ './index'),
};
