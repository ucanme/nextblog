"use client";

import styled from "styled-components";
import {TYPE} from "@formatjs/icu-messageformat-parser";
import Link from 'next/link'
type TocHead = {
    text: string
    link: string
    indent: number
}
const TOC = ({ content }: { content: string })  => {
    const getHeadings = (source: string): TocHead[] => {
        const regex = /^(#|##|###) (.*$)/gim;
        // if (source.match(regex)) {
            return source.match(regex)?.map((heading: string) :TocHead => (
              {
                text: heading.replace('#', '').replace('#', '  ').replace('#', '  '),
                link: heading.replace('# ', '').replace('#', '').replace('#', '').replace(/ /g, '-').toLowerCase().replace('?', '').replace(",",'').replace("!",''),
                indent: heading.match(/#/g)?.length
            } as TocHead)
        ) as TocHead[]
        // return []<TocHead>;
        }

    const HeadingArr: TocHead[] = getHeadings(content);
    console.log(HeadingArr)
    return (
        <div>
         {HeadingArr.map((heading:TocHead, index:number) => (
          <div key={index} className="py-1">
              <Link href={"#"+heading.link} className="whitespace-pre">{heading.text}</Link>
            </div>
    ))}
    </div>
)

}
export default TOC;