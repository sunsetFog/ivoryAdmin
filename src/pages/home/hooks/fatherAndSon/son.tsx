import React, {useState, useEffect, useRef, useContext, createContext, createRef, useImperativeHandle} from 'react';
import Grandson from './grandson';
import LineTextLine from '@/@energy/ivoryDesign/components/lineTextLine/index';
function Son(props) {
    //用于暴露一些外部ref能访问的属性
    useImperativeHandle(props.onRef, () => {
        return {
            rewardInfo: rewardInfo
        };
    });
    const rewardInfo = (value) => {
        console.log('--rewardInfo-', value);
        return '子数据传父';
    };
    return (
        <section>
            <LineTextLine>子组件</LineTextLine>
            <Grandson></Grandson>
        </section>
    );
}

export default Son;
