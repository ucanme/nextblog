import {Post} from "@/root/pages/hello";
import React from "react";
import {Pos} from "@jridgewell/gen-mapping/dist/types/types";
interface PostProps{
    filename: string
    title: string
    className: string
    children: React.ReactNode
}
export default function Pre( {filename,className,children}: PostProps ){
    return (
        <div>
            <div>{filename}</div>

        <pre  className={className}>
            <pre>
                {children}
            </pre>
        </pre>
        </div>

    )
}

