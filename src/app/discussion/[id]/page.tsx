"use client";

import Readings from "@/app/readings";
import { usePathname } from "next/navigation";
  
export default function discussion() {
//     const pathname = usePathname()
//     const readingObject = Readings().find((reading)=> reading.title === decodeURI(pathname.split('/')[2]))

    return (
        <div>
            {/* <h1 className="pt-6 mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {readingObject?.title}
            </h1> */}
            <p className="flex text-3xl dark:text-white font-bold">
                Discussion.
            </p>
            <br />
            <br />
            <form>
                <label>Message</label>
                <textarea name="message"></textarea>
            </form>
            <br/>
            <button 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >Add Comment</button>
            {/* <CommentSection /> */}
        </div>
    )
};