import * as React from 'react';
import { configure } from 'mobx';
import About from './modules/about';

configure({ enforceActions: 'always' }); // 任何状态都能只能通过actions来修改，在实际开发中也包括新建状态。

export const stores = { About };

/*
用于创建一个 Context 对象。Context 提供了一种通过组件树传递数据的方法，而不需要逐层传递 props。它非常适合用来共享全局数据，例如当前的主题、用户信息或语言设置
*/
export const storesContext = React.createContext(stores);
/*
自定义 Hook

引用数据
const { About } = useStores();
*/
export const useStores = () => React.useContext(storesContext);
/*
createContext().Provider
用于提供数据给整个组件树

createContext().Consumer
用于获取 Provider 提供的数据
*/
export const StoresProvider = storesContext.Provider;
