import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import styles from './index.module.scss';
import { tabList } from './constants';

function tabBox(props: any) {
    const [tabActive, setTabOfActive] = useState(0);
    const [beTitle, setTitle] = useState(tabList[0].title);
    const petalWay = (item, index) => {
        setTabOfActive(index);
        setTitle(item.title);
    };
    return (
        <section className={styles.tabBox}>
            <div className={styles.rainbow}>
                <div className={styles.autumn}>
                    <ul>
                        {tabList.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        petalWay(item, index);
                                    }}
                                >
                                    {item.title}
                                </li>
                            );
                        })}
                        <div style={{ clear: 'both' }}></div>
                    </ul>
                    <div
                        className={styles.scenery}
                        style={{ transform: `translate(${104 * tabActive}px, 0px)` }}
                    >
                        {beTitle}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default compose(observer)(tabBox);
