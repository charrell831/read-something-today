"use client";

import { podcastSrcs } from "../podcastSrc";
import Link from "next/link";
import NavigationBar from "../components/navBar";

export default function AllPodcasts () {
    //add comment section and pending note for added readings
    return (
        <div>
            <NavigationBar />
            <h1 className="pr-4 pl-4 pt-6 mb-4 flex text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                All Readings Used In This Site Are Listed Below.
            </h1>
            <div className="pr-4 pl-4">
                {podcastSrcs.map((podcast)=>
                    <div className="justify-center">
                        <Link href={podcast.podLink}>{podcast.title}</Link>
                    </div>
                )}
            </div>
        </div>
    )
}