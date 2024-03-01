import React, { useState, useEffect, useRef, useContext } from 'react';

import About from '@/store/mobx/modules/about';
import LineTextLine from '@/components/lineTextLine/index';
// mobx-react-lite中间件，observer是重新渲染用的
import { observer } from 'mobx-react-lite';
import styles from './index.modules.scss';

function mobx1(props) {
    const { getCount } = About;
    const actionWay = (type) => {
        console.log('--actionWay--', type);
        About.aboutAddCount(type);
    };
    return (
        <section className={styles.mobx1}>
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
