import { get, post } from '@/@energy/ivoryDesign/@http/rxjsAjax';
let domain = 'http://localhost:8062/sky';

// 获取抽奖记录
export function lotteryRecord(params = {}) {
    return post(domain + '/dragonBoat2023/first/infoList', params);
}
