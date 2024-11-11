"use client";

import Readings from "../readings";
import Link from "next/link";
import NavigationBar from "../components/navBar";

export default function AllReadings () {
    //add comment section and pending note for added readings
    return (
        <div>
            <NavigationBar />
            <div className="px-[15%]">
                <h1 className="pr-4 pl-4 pt-6 mb-4 flex text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    All Readings Used In This Site Are Listed Below...
                </h1>
                <div className="pr-4 pl-4 ">
                    {Readings().map((reading)=>
                    <ul key={reading.articleLink}>
                        <div className="justify-center underline italic">
                            <Link href={reading.articleLink}>{reading.title}</Link>
                        </div>
                        </ul>  
                    )}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}