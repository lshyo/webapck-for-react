/**
 * 版权所有：厦门畅享信息技术有限公司
 * Copyright 2021 Xiamen Sunsharing Information CO., LTD.
 * All right reserved.
 *====================================================
 * 文件名称: Modal.js
 * 修订记录：
 * No    日期                作者(操作:具体内容)
 * 1.    2021/06/04   10:11           linsh(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
import React, { useRef, useEffect } from 'react';
import { Icon } from 'antd';
import ReactDOM from 'react-dom';
import styles from './index.less';

const Element = ({ component, close, site }) => {
    const box = useRef(null);

    useEffect(() => {
        if (!box.current) return;
        console.log('box', box.current);
        box.current.style[site] = '0';
    }, []);
    return (
        <React.Fragment>
            <div className={styles.marking} />
            <div className={styles.modal} style={{ [site]: '-100%' }} ref={box}>
                <div>
                    <Icon type="close" twoToneColor="#fff" onClick={close} />
                    {component}
                </div>
            </div>
        </React.Fragment>
    );
};

/*
* component 组件
*  site : 弹窗弹出位置
* */
const alert = (component, site = 'right') => {

    const div = document.createElement('div');

    div.classList.add('modal-fate');
    document.body.append(div);
    document.body.style.overflow = 'hidden';
    const close = () => {

        div.classList.add('modal-fateOut');
        document.body.style.overflow = '';
        let _timer = setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div);
            if (div && div.parentNode){
                div.parentNode.removeChild(div);
            }

            clearTimeout(_timer);
            _timer = null;

        }, 500);
    };


    ReactDOM.render(<Element component={component} close={close} site={site} />, div);

};
const Modal = {};

Modal.alert = alert;


export default Modal;
