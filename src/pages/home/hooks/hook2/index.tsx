import React from 'react';
import PropTypes from 'prop-types';

interface Props {
    loadingActive: boolean;
}
/*
设置属性类型约束1

React.FC函数组件的接口, 用于在 TypeScript 中定义函数组件的类型

不可渲染的子元素块
<React.Fragment></React.Fragment>
等于
<></>

*/
const LoginModal: React.FC<Props> = (props: Props) => {
    const { loadingActive } = props;
    return <React.Fragment>React.FC定义props的typescript</React.Fragment>;
};

// 设置属性类型约束2
// LoginModal.propTypes = {
//     loadingActive: PropTypes.bool,
// };

export default LoginModal;
