import * as React from 'react';
import { configure } from 'mobx';
import About from './modules/about';

configure({ enforceActions: 'always' }); // 任何状态都能只能通过actions来修改，在实际开发中也包括新建状态。

export const stores = { About };

/*
创建上下文，用于传孙子数据的
 提供数据（Provider）
 消费数据（Consumer）
*/
const storesContext = React.createContext(stores);
const { Provider, Consumer } = storesContext;
export const MobxProvider = Provider;
export const MobxConsumer = Consumer;

/*
const { About } = useStores();
*/
export const useStores = () => React.useContext(storesContext);


