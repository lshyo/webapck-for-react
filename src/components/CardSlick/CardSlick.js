/**
 * 版权所有：厦门畅享信息技术有限公司
 * Copyright 2021 Xiamen Sunsharing Information CO., LTD.
 * All right reserved.
 *====================================================
 * 文件名称: CardSlick.js
 * 修订记录：
 * No    日期                作者(操作:具体内容)
 * 1.    2021/06/03   21:05           linsh(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
import React, { useRef, useState }  from 'react';
import { useInterval } from 'react-use';
import styles from './index.less';
function insertEle(ele, targetEle){
    let _timer = setTimeout(() => {
        ele.classList.remove('fateOut');
        targetEle.insertAdjacentElement('afterend', ele);

        clearTimeout(_timer);
        _timer = null;

    }, 500);
}


const CardSlick = props => {
    const card = useRef(null);
    const { authPlay = false } = props;
    const [running, setRunning] = useState(authPlay);

    const data = props.children;
    const len = data.length;

    const toggle = () => {
        if (!card.current) return;

        const cards = card.current.childNodes;
        const [targetE] = cards; // 点击第一个卡片元素

        // 点击第一张，让它飞出去的效果
        targetE.classList.add('fateOut');

        // 等淡出效果执行完后，再插入到最后一个元素的后面
        insertEle(targetE, cards[len - 1]);
    };

    useInterval(toggle, running ? 3000 : null);

    return (
        <div
            className={styles.cards} ref={card}
            onMouseEnter={() => {
                authPlay && setRunning(false);
            }}
            onMouseLeave={() => {
                authPlay && setRunning(true);
            }}
        >
            {
                data
                    .map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                onClick={toggle}
                            >{props.children[idx]}</div>
                        );
                    })
            }
        </div>
    );
};

export default CardSlick;
