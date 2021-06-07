import React from 'react';

const noop = children => children;

const Span = ({ placeholder = '—', normalize = noop, children, ...otherProps }) => {
    const text = normalize(children);

    return <span {...otherProps}>{text != undefined ? text : placeholder}</span>; // eslint-disable-line
};

export default Span;
