'use client'

import { Button } from "@nextui-org/react";
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import NavigationBar from "@/app/components/navBar";

let statement = ''

async function statementSelected() {
        const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : "http://localhost:3000/api";

    fetch(`${url}/baldwinTree/`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        statement =  data.statment
    });
}

export default function RowOne() {
    const data = useSearchParams()
    const imageSrc = data.get('imageSrc') as string
    statementSelected()
    console.log(statement)
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
                    alt={"photo of " + data.get('authorName')}
                    /> 
                    <br /> 
            <div className="text-2xl text-center">
                {statement}
            </div>
            <div className="pt-12 px-12 grid grid-cols-2 gap-2 flex place-items-center">
                <>
                    <button 
                        className="px-6 py-5 w-full m-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                        onClick={() => {}}
                    >
                        Fiction
                    </button>

                    <button 
                        className="px-6 py-5 w-full m-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={() => {}}
                    >
                        Non-Fiction
                    </button>
                </> 
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