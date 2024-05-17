import React from 'react';
import {colors} from "@mui/material";

interface MessageProps {
    color: string;     // Type de la couleur (par exemple '#RRGGBB' ou 'red')
    position_: string;  // Type de la position (par exemple 'left', 'right', etc.)
}

const Message :React.FC<MessageProps> = ({ color, position_ }) => {
    const containerClassName = `rounded-5 p-2 text-center ${position_ === 'left' ? 'justify-content-start' : 'justify-content-end'}`;

    return (
        <>
            <div className={containerClassName} style={{marginLeft:`${position_}px`, maxWidth:'80%', width: 'auto ', height:'auto', backgroundColor: color}}>

                    lodthriyhrlwetetjymwlteatedk,jurhttiulo
                    dkvjwef,me.,wef,erv r
                    v43verf,.em34.

            </div>
        </>
    );
};

export default Message;