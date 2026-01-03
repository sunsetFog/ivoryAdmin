import React, { useState, useEffect, useRef, useContext } from 'react';
import { compose } from 'redux';
import { connect, useSelector, useDispatch } from 'react-redux';
import { modifyCount, fetchChannelList } from '@/store/reduxToolkit/modules/counterStore';


import LineTextLine from '@/@energy/ivoryDesign/components/lineTextLine/index';

function reduxToolkit(props) {
    console.log('--props对象--', props);
    /*
        使用数据
        caught TypeError: (0 , _reactRedux.useSelector) is not a function
        升级react-redux版本到7.1.1
     */
    const { count } = useSelector((state) => state.counter);
    // 修改数据
    const dispatch = useDispatch();
    const beanWay = () => {
        console.log('--beanWay--');
        // 1. 生成action对象
        const action = modifyCount(8);
        // 2. 提交action进行数据更新
        dispatch(action);
    };

    // 异步调用接口，获取数据后用dispatch
    useEffect(() => {
        dispatch(fetchChannelList());
    }, [dispatch]);

    return (
        <div>
            <LineTextLine>使用redux_state数据</LineTextLine>
            {count}
            <LineTextLine>使用dispatch修改store中的数据</LineTextLine>
            <button onClick={beanWay}>修改</button>
        </div>
    );
}



/*

import { connect } from 'react-redux';
是 React 和 Redux 之间的桥梁
连接 React 组件与 Redux Store，将 Store 的 state 和 dispatch 映射为组件的 props

import { compose } from 'redux';
组合多个高阶函数

*/

function mapStateToProps(state) {
    console.log('-mapStateToProps-', state);
    return {
        state: state,
    };
}
// 将 action creators 映射到组件的 props
const mapDispatchToProps = { modifyCount, fetchChannelList };

// 用Provider, 才能用connect    看/ivoryAdmin/src/index.tsx
export default compose(connect(mapStateToProps, mapDispatchToProps))(reduxToolkit);

// export default reduxToolkit;
