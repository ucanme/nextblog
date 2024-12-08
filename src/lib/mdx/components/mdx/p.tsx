"use client";
import { CH } from "@code-hike/mdx/dist/components.esm.mjs";
import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export  function P(props:DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>){
    console.log(props.children)
    return (
        <p className="text-2xl tracking-normal">{props.children}</p>
    )
}