import React from 'react';

interface Props {
    onCancel: () => void;
}
/*
React.FC函数组件的接口, 用于在 TypeScript 中定义函数组件的类型

不可渲染的子元素块
<React.Fragment></React.Fragment>
等于
<></>

*/
const LoginModal: React.FC<Props> = (props: Props) => {
    const { onCancel } = props;
    return <React.Fragment>React.FC定义props的typescript</React.Fragment>;
};

export default LoginModal;
