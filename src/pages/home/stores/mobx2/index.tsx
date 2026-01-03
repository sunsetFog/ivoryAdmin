import React, { useState, useEffect, useRef, useContext } from 'react';

import LineTextLine from '@/@energy/ivoryDesign/components/lineTextLine/index';
import { observer } from 'mobx-react-lite';
import styles from './index.modules.scss';

import { useStores } from '@/store/mobx/index';

function mobx2(props) {
    const { About } = useStores();
    console.log('--mobx2--', useStores());
    const actionWay = (type) => {
        console.log('--actionWay--', type);
        About.aboutAddCount(type);
    };
    return (
        <section className={styles.mobx2}>
            <LineTextLine>数据</LineTextLine>
            --{About.getCount}--
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

export default observer(mobx2);
