// components/mdx-remote.js
import { MDXRemote, MDXRemoteProps} from 'next-mdx-remote/rsc'
import {JSX} from 'react'

const components = {
    h1: (props: JSX.IntrinsicAttributes & MDXRemoteProps) => (
        <h1 {...props} className="large-text">
            {props}
        </h1>
    ),
}

export function CustomMDX(props) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}