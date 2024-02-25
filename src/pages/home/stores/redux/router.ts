export default {
    name: 'redux',
    menuType: 'type5',
    superior: '/home',
    content: () => import(/* webpackChunkName: "exRedux" */ './index'),
};
