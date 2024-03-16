export default {
    name: '移动tab',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "tabBox" */ './index'),
};
