export default {
    name: '好看的渐变',
    menuType: 'type3',
    superior: '/home',
    content: () => import(/* webpackChunkName: "niceGradient" */ './index'),
};
