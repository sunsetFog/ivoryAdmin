export default {
    name: '方法',
    menuType: 'type7',
    superior: '/home',
    content: () => import(/* webpackChunkName: "Func" */ './index'),
};
