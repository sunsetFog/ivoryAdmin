import React, { useState, useEffect, useRef } from 'react';
import { useSetState, useRequest } from 'ahooks';
import { useNavigate, NavLink, useLocation, useParams, useSearchParams } from 'react-router-dom';
import LineTextLine from '@/@energy/ivoryDesign/components/lineTextLine/index';

function toJump(props) {
    const routerParams1 = useLocation();
    console.log('--跳转useParams参数接收--', routerParams1);

    let [params] = useSearchParams();
    let title = params.get( 'title');
    console.log("问好后的参数：", title)


    const navigate = useNavigate();
    // const {history} = props;
    const toGo1 = () => {
        navigate('/home/hooks/toJump?title=6');
        // history.push('/home/hooks/toJump?title=6');
        // history.push({
        //     pathname: '/home/exRedux',
        //     state: { name: '白菜' },
        // })
    };
    const toGo2 = () => {
        /*
            路由path要加/home/hooks/toJump:id
            navigate('/home/hooks/toJump/777');

            获取参数
            let params = useParams();
            let id = params.id;

        */
    };
    return (
        <section>
            <LineTextLine>useNavigate跳转</LineTextLine>
            <button onClick={toGo1}>跳转1</button>
            <br></br>
            <button onClick={toGo2}>跳转2</button>
            <LineTextLine>NavLink标签跳转</LineTextLine>
            <NavLink to='/home/hooks/toJump?title=5'>跳转</NavLink>
        </section>
    );
}

export default toJump;
