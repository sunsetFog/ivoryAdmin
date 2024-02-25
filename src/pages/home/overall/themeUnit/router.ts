export default {
    name: '切换皮肤',
    menuType: 'type6',
    superior: '/home',
    content: () => import(/* webpackChunkName: "themeUnit" */ './index'),
};
