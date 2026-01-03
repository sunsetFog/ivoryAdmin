import React, { useState, useEffect, useRef, useContext } from 'react';

import LineTextLine from '@/@energy/ivoryDesign/components/lineTextLine/index';
// 导入中间件链接mobx react 完成响应式变化
import { observer, useLocalObservable } from 'mobx-react-lite';
import styles from './index.modules.scss';

function mobx3(props) {
    //  代码更加简洁，提高了组件的可维护性和可重用性。
    const partStore = useLocalObservable(() => ({
        count: 0,
        aboutAddCount(num) {
            this.count = num;
        },
    }));
    const actionWay = (type) => {
        console.log('--actionWay--', type);
        partStore.aboutAddCount(type);
    };
    return (
        <section className={styles.mobx3}>
            <LineTextLine>数据</LineTextLine>
            --{partStore.count}--
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

export default observer(mobx3);
