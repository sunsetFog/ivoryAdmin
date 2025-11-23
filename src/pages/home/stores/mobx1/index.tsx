import React, { useState, useEffect, useRef, useContext } from 'react';

import About from '@/store/mobx/modules/about';
import LineTextLine from '@/components/lineTextLine/index';
// mobx-react-lite中间件，observer是当 MobX 中的状态发生变化时，观察者组件会自动重新渲染，以反映最新的状态
import { observer } from 'mobx-react-lite';
// 用这个也行
// import { observer } from 'mobx-react';
import styles from './index.modules.scss';
// 使用全局上下文
import {useStores, MobxConsumer} from '@/store/mobx/index';

function mobx1(props) {
    const { About: apple } = useStores();
    console.log("全局上下文: ", apple);
    const { getCount } = About;
    const actionWay = (type) => {
        console.log('--actionWay--', type);
        // About.aboutAddCount(type);
        apple.aboutAddCount(type);
    };
    return (
        <section className={styles.mobx1}>
            <MobxConsumer>
                {(value) => <div>---{value.About.count}---</div>}
            </MobxConsumer>
            <LineTextLine>数据</LineTextLine>
            --{getCount}--
            <LineTextLine>action</LineTextLine>
            <button
                onClick={() => {
                    actionWay(88);
                }}
            >
                light
            </button>
            <button
                onClick={() => {
                    actionWay(99);
                }}
            >
                night
            </button>
        </section>
    );
}

export default observer(mobx1);
