"use client";

import "../../../../app/globals.css"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from '@nextui-org/dropdown'
import {Avatar} from '@nextui-org/avatar'
import {Input} from '@nextui-org/input'
import {Link} from  '@nextui-org/link'


import {AcmeLogo} from "./logo";
import SearchIcon from "./search";

export default function Header() {
        return (
            <Navbar isBordered className="bg-white/100">
                <NavbarContent justify="start">
                    <NavbarBrand className="pr-4">
                        <Link href="/">
                            <AcmeLogo />
                            <p className="hidden sm:block font-bold text-inherit">首页</p>
                        </Link>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-3">
                        <NavbarItem>
                            <Link color="foreground" href="/hello">
                                文章
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#" aria-current="page" color="secondary">
                                专题
                            </Link>
                        </NavbarItem>
                        {/*<NavbarItem>*/}
                        {/*    <Link color="foreground" href="#">*/}
                        {/*        工具*/}
                        {/*    </Link>*/}
                        {/*</NavbarItem>*/}
                        {/*<NavbarItem>*/}
                        {/*    <Link color="foreground" href="#">*/}
                        {/*        关于*/}
                        {/*    </Link>*/}
                        {/*</NavbarItem>*/}
                    </NavbarContent>
                    <NavbarContent as="div" className="items-center" justify="end">
                        <Input
                            classNames={{
                                base: "h-10",
                                mainWrapper: "h-full",
                                input: "text-small",
                                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                            }}
                            placeholder="Type to search..."
                            size="sm"
                            startContent={<SearchIcon size={18} />}
                            type="search"
                        />
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">zoey@example.com</p>
                                </DropdownItem>
                                <DropdownItem key="settings">My Settings</DropdownItem>
                                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                <DropdownItem key="analytics">Analytics</DropdownItem>
                                <DropdownItem key="system">System</DropdownItem>
                                <DropdownItem key="configurations">Configurations</DropdownItem>
                                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>
                </NavbarContent>

            </Navbar>
        );
}
