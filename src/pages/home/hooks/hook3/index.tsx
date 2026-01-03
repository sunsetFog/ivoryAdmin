import React, { useState, useEffect, useRef, createRef } from 'react';

// 自定义 Hook (只能在函数组件中使用)
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(c => c + 1);
    return { count, increment };
}


function CounterRenderProp({ children }) {
    // 使用hook
    const counter = useCounter(999);
    return children(counter);
}

// 方法2，类组件不能用hook函数，就是可以用函数组件作为子组件，这用法只能DOM里用，有局限性
// 方法3，函数组件作为子组件，用ref父调子方法，reture数据回来
class Hook3 extends React.Component {
  render() {
    return (
      <CounterRenderProp>
        {({ count, increment }) => (
            <button onClick={increment}>{count}</button>
        )}
      </CounterRenderProp>
    );
  }
}


export default Hook3;
