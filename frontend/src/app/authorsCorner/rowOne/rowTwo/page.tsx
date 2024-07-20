'use client'

import Image from 'next/image'
import NavigationBar from "../../../components/navBar";
import { Suspense } from 'react';
import { useSearchParams, usePathname } from 'next/navigation'
import ReactDOMServer from 'react-dom/server'
import Link from 'next/link'

type NodeType = {
    child: [], 
    statment: string
}

let statement = ''
let row = [{}]
let node : NodeType;

function AuthorTreeComponent() {
    row.push(useSearchParams().get('child') as {})
    statement = ReactDOMServer.renderToString(useSearchParams().get('statement'))

    node = {child: JSON.parse(row[1] as string), statment: statement}
 
    const imageSrc = useSearchParams().get('imageSrc')
    let pathname = usePathname();
    const childListSize = node.child.length

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
            <div className={`pt-12 px-12 grid grid-cols-${childListSize} gap-2 flex place-items-center`}>
                {node.child.map((nodeChild: NodeType)=> {
                    return (
                        <Link 
                            className="px-6 py-5 text-center w-full m-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                            href={{pathname: pathname + '/rowThree', query: {statement: nodeChild.statment, child: JSON.stringify(nodeChild.child), imageSrc: ReactDOMServer.renderToString(imageSrc)}}}
                            key={0}
                        >
                            {nodeChild.statment}
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

export default function RowTwo() {
    return (
        <Suspense>
            <AuthorTreeComponent />
        </Suspense>
    )  
 }