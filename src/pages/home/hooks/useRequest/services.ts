import { get, post } from '@/@energy/ivoryDesign/@http/fetch';
// 全局弹窗配置信息
export function getDialogConfig(): Promise<any> {
    return get('/fd/api/v1/fast/getfastunpay', {});
}

// 邀请好友(会员裂变)配置
export function getInviteInfoReq(params: any = {}): Promise<any> {
    console.log('--参数6--', params);
    return post('/api/v3/invite/index', {
        body: JSON.stringify(params),
    });
}
