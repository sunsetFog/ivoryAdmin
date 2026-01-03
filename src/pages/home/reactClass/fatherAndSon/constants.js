import React, { createContext, useContext } from 'react';

// study: 跨组件通信，爷爷传孙子
// 创建上下文
const ThemeContext = createContext();
// 提供数据（Provider）
// 消费数据（Consumer）
export const { Provider, Consumer } = ThemeContext;
// export const getThemeContext = useContext(ThemeContext);

/*
study: 类组件用不了hook函数怎么办？？
useContext是hook方法
方法0，不想类组件转函数组件
方法1，使用高阶组件，设置props值
方法2，方法3，看自定义hook篇
*/
export const ThemeOfContext = (Component) => {
    return (props) => <Component {...props} useThemeContext={useContext(ThemeContext)} />;
};
