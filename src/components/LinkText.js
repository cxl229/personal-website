import React from "react";

function LinkText(props) {
    return (
        <>
        <img src={props.icon} alt=""/>
        <a href={props.href}>{props.text}</a>
        </>
    );
}

export default LinkText;