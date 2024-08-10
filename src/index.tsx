import React from 'react';
import ReactDOM from 'react-dom/client';
/*
BrowserRouter 的 URL 示例: https://example.com/about
HashRouter 的 URL 示例: https://example.com/#/about
BrowserRouter需要服务器配置处理路由请求，即是SEO优化，搜索引擎能够更好地抓取页面内容，而HashRouter不需要
*/
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { StoresProvider, stores } from '@/store/mobx';
import AppRouter from '@/AppRouter';
// toolkitStore的使用
import { Provider, connect } from 'react-redux'; // 用Provider, 才能用connect
import toolkitStore from '@/store/reduxToolkit';

import Channel from '@/@energy/ivoryDesign/@http/rxjsAjax/channel/channel';

// 加载全局样式
import '@root/global.css';
import '@root/global.less';
import '@root/global.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLDivElement);
// root.unmount();手动卸载组件
root.render(
    <BrowserRouter basename='/'>
        {/* <StoresProvider value={stores}>
            <Channel>
                <AppRouter />
            </Channel>
        </StoresProvider> */}
        <Provider store={toolkitStore}>
            <AppRouter />
        </Provider>
    </BrowserRouter>,

    // <HashRouter>
    //     <StoresProvider value={stores}>
    //         <AppRouter />
    //     </StoresProvider>
    // </HashRouter>
);
