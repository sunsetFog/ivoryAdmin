import React, { Component } from 'react';
import { Consumer, ThemeOfContext } from './constants';
// 状态管理
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';

// @connect(
//     state => ({nice: state.nice}),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

class Grandson extends Component {
    state = {};

    constructor(props) {
        super(props);
        console.log('--constructor--Grandson数据的初始化', this);
    }
    componentDidMount() {
        console.log('--useContext使用Context数据--', this.props.useThemeContext);
    }

    render() {
        return (
            <div>
                <Consumer>
                    {(value) => <div>---{value}---</div>}
                </Consumer>
            </div>
        );
    }
}

export default ThemeOfContext(Grandson);
