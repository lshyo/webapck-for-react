/**
 * 版权所有：厦门畅享信息技术有限公司
 * Copyright 2021 Xiamen Sunsharing Information CO., LTD.
 * All right reserved.
 *====================================================
 * 文件名称: Arrow.js
 * 修订记录：
 * No    日期                作者(操作:具体内容)
 * 1.    2021/06/03   15:15           linsh(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
import React, { useState } from 'react';
import { useInterval } from 'react-use';
import styles from './index.less';
const Arrow = () => {
    const [idx, setIdx] = useState(0);

    useInterval(() => setIdx(pre => pre + 1), 3000);
    return (
        <div className={styles.arrow} key={idx}>
            <span />
            <span />
            <span />
        </div>
    );
};

export default Arrow;
