import React from 'react';
import "./Message.css";
import {Avatar} from "@mui/material";

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Juicy
                    <span className="message__timestamp">
                        Timestamp
                    </span>
                </h4>
                <p>Hello World!!!</p>
            </div>

        </div>
    )
}

export default Message;