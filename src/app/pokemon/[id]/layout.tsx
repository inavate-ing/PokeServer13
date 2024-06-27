'use client'
import Link from "next/link";
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};

const Layout = (props: Props) => {
    return (
        <div className="flex flex-col h-screen">
            <Link className="flex gap-1 transition-colors px-4 py-2 text-[#23C8A6] w-32 rounded-lg" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-arrow-big-left">
                    <path d="M18 15h-6v4l-7-7 7-7v4h6v6z"/>
                </svg>
                Go back
            </Link>
            <main className="flex-1 overflow-y-auto p-4">{
                props.children
            }</main>
        </div>
    );
}

export default Layout