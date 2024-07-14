'use client'

import Image from 'next/image'
import NavigationBar from "@/app/components/navBar";
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'
import ReactDOMServer from 'react-dom/server'

let statement = ''
let row: {}[] = []
let node = {};
let children: {}[] = []

function useSearch(searchProperty: string) {
    return (
        ReactDOMServer.renderToString(
            <Suspense>
                {useSearchParams().get(searchProperty)}
            </Suspense>
        )
    )
}

export default function RowTwo() {
    useEffect(()=> {
        const url = process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
        : "http://localhost:3000/api";
    
        fetch(`${url}/displayRow/`, node)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            statement =  data.statment
            children = data.child
        });
    }, [])

    row.push(useSearch('child') as {}) 
    statement = useSearch('statement')
    node = {child: JSON.parse(row[0] as string), statment: statement}

    const imageSrc = useSearch('imageSrc')
    //console.log('node', node.statment)
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
                    alt={"photo of "}
                    /> 
                    <br /> 
            <div className="text-2xl text-center">
                {statement}
            </div>
            <div className="pt-12 px-12 grid grid-cols-2 gap-2 flex place-items-center">
                {children.map((child)=> {
                    return (
                        <button 
                            className="px-6 py-5 w-full m-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                            onClick={() => {}}
                            key={0}
                        >
                            
                        </button>
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