import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export  function P(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <p className="text-2xl tracking-normal">{props.children}</p>
    )
}