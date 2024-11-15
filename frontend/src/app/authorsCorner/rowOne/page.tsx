'use client'

import { useSearchParams, usePathname } from 'next/navigation'
import Image from 'next/image'
import NavigationBar from "../../components/navBar";
import Link from 'next/link'
import { Suspense } from 'react';
import ReactDOMServer from 'react-dom/server'
import axios from 'axios';

let statement = ''
let row: any[] = []

function GetChildren() {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
            ? `https://www.readsomethingtoday.com/api`
            : `http://127.0.0.1:5000/api`;
    axios.get(`${url}/baldwinTree`, {
        headers: {'Content-Type': 'text/plain', },
    }).then((res)=> {
        statement = res.data.statment
        row = res.data.child
        console.log('statement', statement)
    }).catch((error)=> {
        console.error(error.response.data);
    })
}

function AuthorTreeComponent() {
    GetChildren()
    const imageSrc = useSearchParams().get('imageSrc')
    let pathname = usePathname();
    
    return (
        <>
            <NavigationBar />
            <h1 className="pt-6 mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 xsm:text-2xl sm:text-3xl md:text-5xl lg:text-6xl dark:text-white">
                The Author's&nbsp; <div className="text-red-500">Corner</div>. &nbsp;
            </h1>
            <br />
            <Image 
                className="rounded-full m-auto" 
                src={"/"+imageSrc}
                width={300}
                height={300}
                alt={"photo of " + ReactDOMServer.renderToString(useSearchParams().get('authorName'))}
            /> 
            <br /> 
            <div className="text-2xl text-center">
                {statement}
            </div>
            <div className="pt-12 px-12 grid grid-cols-2 gap-2 flex place-items-center">
                {row.map((r)=> {
                    return (
                        <Link 
                            className="px-6 py-5 w-full m-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                            //children being past in url is messed up
                            href={{pathname: pathname + '/rowTwo', query: {statement: r.statment, child: JSON.stringify(r.child), imageSrc: ReactDOMServer.renderToString(imageSrc)}}}
                            key={r.statment}
                        >
                            <div className='text-center'>
                                {r.statment}
                            </div>
                        </Link>
                    )
                })}
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

export default function RowOne() {
    return (
            <Suspense>
                <AuthorTreeComponent />
            </Suspense>
    )  
}