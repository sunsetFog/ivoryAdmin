import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/@energy/ivoryDesign/@utils/redux';
import PopupUnit from '@/@energy/ivoryDesign/web/components/popupUnit';

import { nameSortIndex } from '@/@energy/ivoryDesign/@utils/sort';

function cabbageUnit(props: any) {
    const sortWay = () => {
        let arrList = [
            { name: '香茗全站' },
            { name: '华丽全站' },
            { name: '阿里体育' },
            { name: '猫女体育' },
            { name: '听日全站' },
        ];
        arrList.sort((a: any, b: any) => {
            return nameSortIndex(a.name) - nameSortIndex(b.name);
        });
        console.log('--数组name排序--', arrList);
    };
    useEffect(() => {});
    return (
        <section>
            <PopupUnit>自定义弹窗</PopupUnit>
            <br />
            <br />
            <button
                onClick={() => {
                    sortWay();
                }}
            >
                数组name排序
            </button>
        </section>
    );
}

export default compose(observer)(cabbageUnit);
