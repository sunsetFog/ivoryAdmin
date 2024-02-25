export default {
    name: '自定义axios',
    menuType: 'type6',
    superior: '/home',
    content: () => import(/* webpackChunkName: "exAxios" */ './index'),
};
