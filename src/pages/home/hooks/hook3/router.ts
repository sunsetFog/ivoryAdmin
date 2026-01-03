export default {
    name: '自定义hook函数',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "hook3" */ './index'),
};
