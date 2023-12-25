import { useMemo } from 'react'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import  {Options } from '@mdx-js/esbuild/lib'
import rehypePrism from 'rehype-prism-plus'
import fs from 'fs'
import '../app/globals.css'
// mdx plugins
import remarkGfm from 'remark-gfm'
import remarkMdxCodeMeta from 'rehype-mdx-code-props';

// import rehypeCodeTitles from 'rehype-code-titles'
// import rehypeImagePlaceholder from 'rehype-image-placeholder'
import rehypeCodeTitles  from 'rehype-code-titles'
import toc from '@jsdevtools/rehype-toc'
import rehypeSlug from 'rehype-slug'

import remarkSlug from 'remark-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkCodeHike } from "@code-hike/mdx";
import remarkSmartypants from '@silvenon/remark-smartypants'
import remarkTableofContents from 'remark-toc'
import remarkUnwrapImages from 'remark-unwrap-images'
// import '../app/monokai.css';
import "@code-hike/mdx/dist/index.css"
import Table from "../src/lib/mdx/components/table"

import {H1,H2,H3,H4,H5,H6} from  "../src/lib/mdx/components/h"
import {P} from  "../src/lib/mdx/components/p"
import Toc from "@/root/src/lib/mdx/components/toc";
import { readdirSync, readFileSync } from "fs";



export interface Post {
    category: string
    description: string
    image: string
    published: number
    slug: string
    title: string
}


// import mdxComponents from '@/root/components/mdx'
// import {Pos} from "@jridgewell/gen-mapping/dist/types/types";

interface PostProps {
    code: string
    metadata: Post
    sourceMd: string
}

interface Params {
    params: {
        slug: string
    }
}

const components = {
    table: Table,
    h1 : H1,
    h2 : H2,
    h3 : H3,
    h4 : H4,
    h5 : H5,
    h6 : H6,
    p: P,
}

export default function Post({ code, metadata,sourceMd }: PostProps) {
    // avoid recreating the component every render
    const Component = useMemo(() => getMDXComponent(code), [code])

    console.log(sourceMd)
    let tocCom = Toc({content:sourceMd})
    return (
        <div className="max-w-screen-lg px-10">
            <div className="TEST">
                {tocCom}
            </div>
            <div>
                <div className="py-10"><span className="text-3xl font-bold">Fireworks Raises the Quality Bar with Function Calling Model and API Release</span></div>
                <Component components={components}/>
            </div>
        </div>
    )
}

// export async function getStaticPaths() {
//     // post paths
//     const currentDirectory = process.cwd()
//     const posts = fs.readdirSync(`${currentDirectory}/posts`)
//     const postPaths = posts.map((post) => post)
//
//     // paths
//     const paths = postPaths.map((path) => ({
//         params: { slug: path },
//     }))
//
//     return {
//         paths,
//         fallback: false,
//     }
// }

export async function getStaticProps() {
    // slug

    let tocElement
    const options = {


        mdxOptions(options: Options) {
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkGfm,
                remarkCodeHike,
                // add id to headings
                // add links to headings
                // remarkSlug,
                // smart typographic punctuation like real quotes
                remarkSmartypants,
                // generates table of contents from headings
                // `tight` removes <p> from <li> when nested
                [remarkTableofContents, { tight: true }],
                // remove paragraph around images
                remarkUnwrapImages,

            ]


            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                // [
                //     rehypeSlug,
                //     {
                //         properties: {
                //             className: ['anchor'],
                //         },
                //     },
                // ],
                rehypeAutolinkHeadings,
                // [toc, {
                //     position: "afterend",
                //     nav: true,
                //     headings: ["h1", "h2"],     // Only include <h1> and <h2> headings in the Toc
                //     cssClasses: {
                //         toc: "page-outline",      // Change the CSS class for the Toc
                //         link: "page-link",        // Change the CSS class for links in the Toc
                //     }}],
                remarkMdxCodeMeta,


                // rehypeSyntaxHighlighting
            ];
            options.jsx = false

            return options
        },
    }

    // post path
    const currentDirectory = process.cwd()
    const postPath = `${currentDirectory}/posts/hello.mdx`
    const markdown = await bundleMDX({ file: postPath, ...options })
    const { code, frontmatter: metadata } = markdown
    const sourceMd =  fs.readFileSync(postPath,"utf8")
    return {
        props: {
            code,
            metadata,
            sourceMd,
        },
    }
}
