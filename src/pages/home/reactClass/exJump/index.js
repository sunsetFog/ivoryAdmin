import React, { Component } from 'react';
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

import { Link, NavLink } from 'react-router-dom';
import LineTextLine from '@/@energy/ivoryDesign/components/lineTextLine/index';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

/*
版本6已报废
import { withRouter } from 'react-router-dom';
export default withRouter(YourComponent);此时props对象里有了history属性

使用 history.push 进行页面跳转
this.props.history.push('/another-page');

版本6已报废
import { useHistory } from 'react-router-dom';
const history = useHistory();
*/
import withNavigation from '@/@energy/ivoryDesign/@higherOrder/withNavigation';
class Jump extends Component {
    state = {};

    constructor(props) {
        super(props);
        console.log('--路由参数在props.match里', props);
    }
    // react 类组件跳转自身页面并带路由参数，怎么获取路由参数呢？
    componentDidUpdate(prevProps) {
        console.log('--路由触发-1-', prevProps);
        console.log('--路由触发-2-', this.props);
    }
    peachWay = () => {
        // 会刷新页面
        // window.location.href = '/home/reactClass/exJump?id=6';
        // routes.push('/home/reactClass/exJump?id=6');
        this.props.navigate('/home/reactClass/exJump?id=6');
    };

    render() {
        return (
            <section>
                <LineTextLine>跳转</LineTextLine>
                <button onClick={this.peachWay}>跳转</button>
                <LineTextLine>Link跳转</LineTextLine>
                {/*
                    不可以起样式名
                    编译：<a href='/'>Home</a>
                */}
                <Link to='/home/reactClass/exJump?id=1'>跳转</Link>

                <LineTextLine>NavLink跳转</LineTextLine>
                {/*
                    可以起样式名
                    编译：<a href='/react' className='hurray'>React</a>
                */}
                <NavLink to='/home/reactClass/exJump?id=2'>跳转</NavLink>
            </section>
        );
    }
}

export default withNavigation(Jump);
