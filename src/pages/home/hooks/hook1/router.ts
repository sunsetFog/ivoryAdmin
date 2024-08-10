export default {
    name: '使用function',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "dragonBoat" */ './index'),
};
