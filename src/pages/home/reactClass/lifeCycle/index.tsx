import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import LineTextLine from '@/@energy/ivoryDesign/components/lineTextLine/index';
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

/*
从React版本16.3开始，以下组件生命周期方法正在逐步淘汰。
UNSAFE_componentWillMount
UNSAFE_componentWillReceiveProps
UNSAFE_componentWillUpdate
所以控制台有黄色警告
如果要使用这些方法，请在方法前面加上UNSAFE_
*/

// props指定类型
interface Props {}
// state指定类型
interface State {
    painting: string;
}
class LifeOfCycle extends Component<Props, State> {
    // props 默认值
    public static defaultProps = {};
    /*
        props：父组件传递子组件的数据，有更新会重新渲染
        state：组件内部数据，setState来更新state，触发组件重新渲染
     */
    state = {
        painting: '画画',
    };
    /*
        创建对象并初始化state
        完成了React数据的初始化，还未渲染DOM，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
     */
    constructor(props) {
        super(props);
        console.log('--constructor--初始化渲染顺序1');
    }
    /*
        已经插入虚拟DOM，渲染完成
        组件第一次渲染完成，此时dom节点已经生成，用于发起ajax网络请求
     */
    componentDidMount() {
        console.log('--componentDidMount--初始化渲染顺序4');
    }
    /*
        将要组件的卸载和数据的销毁
        用于清理定时器，监听事件，取消订阅

     */
    componentWillUnmount() {
        console.log('--componentWillUnmount--移除组件');
    }
    /*
        每一次完成渲染都会触发，用于监听状态更新，相当于函数组件的useEffect，可以用来网络请求
        参数1: 旧的props
        参数2: 旧的state
     */
    componentDidUpdate(prevProps, prevState) {
        console.log('--componentDidUpdate--每次更新state顺序3');
    }
    /*
        不常用
        setState后是否重新渲染
        返回true，重新渲染
        返回false，不重新渲染
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('--shouldComponentUpdate--setState的一道关卡', nextProps, '---', nextState);
        return true;
    }
    /*
        已删除
        将要插入虚拟dom
        一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。
     */
    UNSAFE_componentWillMount() {
        console.log('--UNSAFE_componentWillMount--初始化渲染顺序2');
    }
    /*
        已删除
        将要更新回调
        参数1: 新的props
        参数2: 新的state
     */
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('--UNSAFE_componentWillUpdate--每次更新state顺序1', nextProps, nextState);
    }
    /*
        已删除，替换成getDerivedStateFromProps生命周期了
        props变化时更新state
     */
    UNSAFE_componentWillReceiveProps(nextProps, prevState) {
        console.log(
            '--UNSAFE_componentWillReceiveProps--props改变才触发，父子组件传参用',
            nextProps,
        );
    }

    /*
        普通方法
     */
    waterWay(event) {
        this.setState({
            painting: '画啥',
        });
        console.log('此时state未更新', this.state);
    }

    // 普通方法
    unloadWay() {
        // React 18不支持
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    /*
        用于插入虚拟DOM
     */
    render() {
        console.log('--render--初始化渲染顺序3--每次更新state顺序2');
        // TypeScript形状才能正确解构  未知???
        // const {
        //     state: {painting},
        //     props: {}
        // } = this;
        const { painting } = this.state;
        console.log('--painting--', painting);
        return (
            <div>
                {/*
                空标签<></>  相当于vue的template标签
                现在是<React.Fragment> 若上面import React, { Component, Fragment } from 'react';  就用 <Fragment>
            */}
                <LineTextLine>空标签</LineTextLine>
                <React.Fragment>空标签</React.Fragment>
                <LineTextLine>更新state</LineTextLine>
                <button onClick={this.waterWay.bind(this)}>{painting}</button>
                <LineTextLine>手动卸载组件</LineTextLine>
                <button onClick={this.unloadWay.bind(this)}>卸载组件</button>
            </div>
        );
    }
}

export default LifeOfCycle;
