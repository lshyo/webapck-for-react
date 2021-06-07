/**
 * 版权所有：厦门畅享信息技术有限公司
 * Copyright 2021 Xiamen Sunsharing Information CO., LTD.
 * All right reserved.
 *====================================================
 * 文件名称: RayLight.js
 * 修订记录：
 * No    日期                作者(操作:具体内容)
 * 1.    2021/05/25   11:22           linsh(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
import React from 'react';
import styles from './RayLight.less';

const RayLight = ({ time }) => {
    return (
        <div className={styles.line}>
            <div className={styles.moveLine} style={{ animationDuration: time && `${time}s` }} />
        </div>
    );
};

export default RayLight;
