import Header from "../src/ui/layout/header/header"
import "./globals.css"
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-col justify-center">
            <Header />
        <div className="grid justify-center sm:p-5">
             <div className="bg-white">
                 <Link href="/hello" className="pl-3">
                <div className="grid pt-5">
                <span className="text-base	 font-bold inline-block">golang单元测试教程</span>
                <span className="inline-block  text-sm	pt-2 tracking-normal">具体讲解go test用法, gomonkey、goconvey的使用，以及单元测试的书写，单元测试覆盖率的计算等, 以及常见文件的解决，希望能够帮你更快的了解和学习</span>
            </div>
            <div className="text-xs font-sans">
                <span>2023-10-01</span>
            </div>
            </Link>

                 <Link href="/hello" className="pl-3">
                <div className="grid pt-5">
                    <span className="text-base	 font-bold inline-block">golang单元测试教程</span>
                    <span className="inline-block  text-sm	pt-2 tracking-normal">具体讲解go test用法, gomonkey、goconvey的使用，以及单元测试的书写，单元测试覆盖率的计算等, 以及常见文件的解决，希望能够帮你更快的了解和学习</span>
                </div>
                <div className="text-xs font-sans">
                    <span>2023-10-01</span>
                </div>
            </Link>
            <Link href="/hello" className="pl-3">
                <div className="grid pt-5">
                    <span className="text-base	 font-bold inline-block">golang单元测试教程</span>
                    <span className="inline-block  text-sm	pt-2 tracking-normal">具体讲解go test用法, gomonkey、goconvey的使用，以及单元测试的书写，单元测试覆盖率的计算等, 以及常见文件的解决，希望能够帮你更快的了解和学习</span>
                </div>
                <div className="text-xs font-sans">
                    <span>2023-10-01</span>
                </div>
            </Link>
            <Link href="/hello" className="pl-3">
                <div className="grid pt-5">
                    <span className="text-base	 font-bold inline-block">golang单元测试教程</span>
                    <span className="inline-block  text-sm	pt-2 tracking-normal">具体讲解go test用法, gomonkey、goconvey的使用，以及单元测试的书写，单元测试覆盖率的计算等, 以及常见文件的解决，希望能够帮你更快的了解和学习</span>
                </div>
                <div className="text-xs font-sans">
                    <span>2023-10-01</span>
                </div>
            </Link>
            </div>
        </div>
    </div>
  )
}
