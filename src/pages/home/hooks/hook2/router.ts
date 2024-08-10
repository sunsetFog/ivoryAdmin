export default {
    name: '使用React.FC',
    menuType: 'type2',
    superior: '/home',
    content: () => import(/* webpackChunkName: "hook2" */ './index'),
};
