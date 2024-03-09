export default {
    name: 'hook2',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "hook2" */ './index'),
};
