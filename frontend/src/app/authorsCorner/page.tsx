'use client';

import AuthorProfile from './components/authorProfile';
import NavigationBar from '../components/navBar';
import { createContext, useContext, useState } from 'react';
import { AuthorChoices } from './authors';

export type AuthorType = {
    authorName: AuthorChoices;
    imageSrc: string;
}



// const url = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
//   : "http://localhost:3000/api";

// async function authorSelected(author: string) {
//         const children = [] as any[]
//         fetch(`${url}/${author}/`)
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             children.push(data.child)
//             return children
//           });
// }



export default function AuthorsCorner() {
    return (
        <>
            <NavigationBar />
            <h1 className="pt-6 mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 xsm:text-2xl sm:text-3xl md:text-5xl lg:text-6xl dark:text-white">
                The Author's&nbsp; <div className="text-red-500">Corner</div>. &nbsp;
            </h1>
            <div className='px-12 h-56 grid grid-cols-3 gap-4 content-stretch relative inset-0 flex pt-12'> 
                <AuthorProfile authorType={{authorName: AuthorChoices.JAMES_BALDWIN, imageSrc: "james-baldwin.png"}}/>
                <AuthorProfile authorType={{authorName: AuthorChoices.TONI_MORRISON, imageSrc: "toni-morrison.png"}}/>
                <AuthorProfile authorType={{authorName: AuthorChoices.AUDRE_LORDE, imageSrc: "audre-lorde.png"}}/>
                <AuthorProfile authorType={{authorName: AuthorChoices.BELL_HOOKS, imageSrc: "bell-hooks.png"}}/>
                <AuthorProfile authorType={{authorName: AuthorChoices.ANGELA_DAVIS, imageSrc: "angela-davis.png"}}/>
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
            <br />
            <br />
            <br />
            <br />
        </>
    )
}