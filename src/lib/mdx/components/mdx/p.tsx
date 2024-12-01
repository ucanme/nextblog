import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import { CH } from "@code-hike/mdx/dist/components.esm.mjs";

export  function P(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    return (
        <p className="text-2xl tracking-normal">{props.children}</p>
    )
}