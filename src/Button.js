import React, { Component } from 'react';
import "./Button.css";

const Button = props => {
    const defaultClassNames = ["button"];
    // merge default classnames with anything passed by
    // by the caller
    const classNameStr = defaultClassNames
        .concat(props.classNames || [])
        .join(" ");

    const onClick = props.clickEvt ? props.clickEvt : function() {};

    return <button className={classNameStr} onClick={onClick}>
        {props.children}
    </button>
}

const OrangeButton = props => {
    return <Button {...props} classNames={["orange"]} />
}

export {
    Button,
    OrangeButton,     
};
