import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export  function H1(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h1 className="font-bold text-2xl py-3">{props.children}</h1>
    )
}
export  function H2(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h2 className="font-bold text-xl py-2">{props.children}</h2>
    )
}

export  function H3(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h3 className="font-bold text-lg py-1">{props.children}</h3>
    )
}
export  function H4(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h4 className="font-bold text-base">{props.children}</h4>
    )
}
export  function H5(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h5 className="font-bold  text-sm">{props.children}</h5>
    )
}
export  function H6(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <h6 className="font-bold  text-xs">{props.children}</h6>
    )
}