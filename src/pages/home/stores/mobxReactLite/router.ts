export default {
    name: 'mobx-react-lite',
    menuType: 'type5',
    superior: '/home',
    content: () => import(/* webpackChunkName: "exMobx" */ './index'),
};
