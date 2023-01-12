import React from "react";
import './LinkText.css';

function LinkText(props) {
    return (
        <div className="block">
            <img src={props.icon} alt=""/>
            <a href={props.href}>{props.text}</a>
        </div>
    );
}

export default LinkText;