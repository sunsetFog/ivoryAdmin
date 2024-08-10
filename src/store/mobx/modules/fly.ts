import { makeObservable, observable, action, computed, flow } from 'mobx';
/*
    常用装饰器类型:
    @observable: 将一个属性转换为可观察属性。当属性的值发生变化时，mobx 会自动通知观察者。
    @computed: 将一个属性转换为计算属性。计算属性的值是从其他可观察属性或计算属性中派生出来的，当依赖的属性发生变化时，计算属性会自动重新计算。
    @action: 将一个方法转换为动作。动作是一个可以修改状态的函数，只有通过动作来修改状态，mobx 才能跟踪状态的变化并通知观察者。
    @flow: 将一个方法转换为异步流。异步流是一个可以暂停和恢复的异步操作，可以用来实现复杂的异步逻辑。

    decorators抱歉，这项目没有装饰器
*/
class Fly {
    constructor() {
        makeObservable(this);
    }
    // 主题色
    @observable
    public theme = '';

    // 使用的
    @computed
    public get themeValue() {
        return this.theme;
    }

    @action
    public setTheme(theme?: string) {
        this.theme = theme;
    }
}

export default new Fly();
