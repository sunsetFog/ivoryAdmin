import { get } from '@/@energy/ivoryDesign/@http/fetch';

/**
 * @function get
 * @description 请求测试
 */

export function fetchDemo() {
    return get('https://css-tricks.com/introducing-sass-modules/');
}
