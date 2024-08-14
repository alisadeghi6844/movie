import React from 'react';
import Image from "@/app/structure/components/image";
import {HeaderData} from "@/data/HeaderData";
import Link from "next/link";
import Typography from "@/app/structure/components/typography/Typography"
import Tooltip from "@/app/structure/components/tooltip"
import {IoMoon} from "react-icons/io5";
import {FaUser} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";
import {IoSearchOutline} from "react-icons/io5";

const Header = () => {
    return (
        <div
            className="fixed header top-4 right-1/2 translate-x-1/2 z-30 w-[88%] h-[80px] flex items-center rounded-xl py-5 px-7 justify-between">
            <div className="flex items-center gap-x-[64px]">

                <Image src="/images/DarkLogo.png" className="w-[96px] h-[96px]" alt="فیلم و سریال"/>

                <div className="flex items-center gap-x-7">
                    {HeaderData?.map(item => (
                        <Typography tag="p" key={item?.id}
                                    className="text-primary-700 relative font-bold text-lg group">
                            <Link href={item?.link}>{item?.title}</Link>
                            <div
                                className="w-0 absolute h-1 rounded-xl bg-primary-200 -bottom-2 right-0 group-hover:w-full transition-all"/>
                        </Typography>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-x-8">
                <div className="cursor-pointer relative">
                    <Tooltip title="جست و جو" position="top">
                        <IoSearchOutline className="text-primary-700 text-[28px]"/>
                    </Tooltip>
                </div>
                <div className="cursor-pointer relative">
                    <Tooltip title="اعلانات" position="top">
                        <IoNotifications className="text-primary-700 text-[28px] -mb-2"/>
                    </Tooltip>
                    <div className="w-2 h-2 rounded-full bg-error-500 absolute bottom-0 right-0"/>
                </div>
                <div className="cursor-pointer">
                    <Tooltip title="پروفایل" position="top">
                        <FaUser className="text-primary-700 text-[28px]"/>
                    </Tooltip>
                </div>
                <div className="cursor-pointer">
                    <Tooltip title="حالت تاریک" position="top">
                        <IoMoon className="text-primary-700 text-[28px]"/>
                    </Tooltip>
                </div>

            </div>
        </div>
    );
};

export default Header;
