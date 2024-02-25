import { makeObservable, observable, action, computed, flow } from 'mobx';

class About {
    count = 0;
    constructor() {
        /**
         * makeObservable 与 makeAutoObservable区别在于：
         * makeObservable: 需要显式地指定要转换为可观察对象的属性和方法。
         * makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
         * 如何选择 ?
         * 1. 需要更细粒度地控制哪些属性或方法需要观察时，使用 makeObservable。
         * 2. 需要将整个类转换为响应式对象，而不需要对每个属性或方法进行个性化配置使用 makeAutoObservable。
         * 3. 注意: makeAutoObservable可能会不小心观察到不需要观察的属性或方法，导致性能问题。
         */
        makeObservable(this, {
            count: observable,
            aboutAddCount: action,
            getCount: computed,
            incrementAsync: flow,
        });
    }

    get getCount() {
        console.log('--getCount--', this.count);
        return this.count;
    }

    aboutAddCount = (num) => {
        console.log('--aboutAddCount--', num);
        this.count = num;
    };

    *incrementAsync() {
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        this.count++;
    }
}

export default new About();
