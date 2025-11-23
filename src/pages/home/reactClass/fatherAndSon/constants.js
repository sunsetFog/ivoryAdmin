import React, { createContext } from 'react';

// 创建上下文
const ThemeContext = createContext();
// 提供数据（Provider）
// 消费数据（Consumer）
export const { Provider, Consumer } = ThemeContext;
