import Header from "../src/ui/layout/header/header"
import "./globals.css"
import Link from "next/link";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
    <main className="grid grid-col">
      <Header />
        <div className="grid justify-center mt-2">
        {/*<div className="grid grid-cols-3 gap-10   ">*/}
        {/*    <Card className="py-4 border-0" >*/}
        {/*        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">*/}
        {/*        <p className="text-tiny uppercase font-bold">Daily Mix</p>*/}
        {/*        <small className="text-default-500">12 Tracks</small>*/}
        {/*        <h4 className="font-bold text-large">Frontend Radio</h4>*/}
        {/*        </CardHeader>*/}
        {/*        <CardBody className="overflow-visible py-2">*/}
        {/*            <Image*/}
        {/*            alt="Card background"*/}
        {/*            className="object-cover rounded-xl"*/}
        {/*            src="https://nextui.org/images/hero-card.jpeg"*/}
        {/*            width={270}*/}
        {/*            />*/}
        {/*        </CardBody>*/}
        {/*    </Card>*/}

        {/*    <Card className="py-4 " >*/}
        {/*        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">*/}
        {/*            <p className="text-tiny uppercase font-bold">Daily Mix</p>*/}
        {/*            <small className="text-default-500">12 Tracks</small>*/}
        {/*            <h4 className="font-bold text-large">Frontend Radio</h4>*/}
        {/*        </CardHeader>*/}
        {/*        <CardBody className="overflow-visible py-2">*/}
        {/*            <Image*/}
        {/*                alt="Card background"*/}
        {/*                className="object-cover rounded-xl"*/}
        {/*                src="https://nextui.org/images/hero-card.jpeg"*/}
        {/*                width={270}*/}
        {/*            />*/}
        {/*        </CardBody>*/}
        {/*    </Card>*/}
        {/*    <Card className="py-4 " >*/}
        {/*        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">*/}
        {/*            <p className="text-tiny uppercase font-bold">Daily Mix</p>*/}
        {/*            <small className="text-default-500">12 Tracks</small>*/}
        {/*            <h4 className="font-bold text-large">Frontend Radio</h4>*/}
        {/*        </CardHeader>*/}
        {/*        <CardBody className="overflow-visible py-2">*/}
        {/*            <Image*/}
        {/*                alt="Card background"*/}
        {/*                className="object-cover rounded-xl"*/}
        {/*                src="https://nextui.org/images/hero-card.jpeg"*/}
        {/*                width={270}*/}
        {/*            />*/}
        {/*        </CardBody>*/}
        {/*        </Card>*/}
        {/*</div>*/}
        <div className="pt-5  bg-white mt-5">
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
    </main>
  )
}
