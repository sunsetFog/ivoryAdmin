export default {
    name: '@reduxjs/toolkit',
    menuType: 'type5',
    superior: '/home',
    content: () => import(/* webpackChunkName: "reduxToolkit" */ './index'),
};
