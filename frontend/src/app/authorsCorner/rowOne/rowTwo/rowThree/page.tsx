'use client'

import { useSearchParams } from 'next/navigation'
import ReactDOMServer from 'react-dom/server'
import Image from 'next/image'
import NavigationBar from '@/app/components/navBar'
import Link from 'next/link'

enum BookImage {
    IF_BEALE_COULD_TALK = 'ifbealestreetcouldtalk.jpg',
    GIOVANNIS_ROOM = 'giovannisroom.jpg'
}

type NodeType = {
    child: [], 
    statment: string
}

let row = [{}]
let node : NodeType;

export default function RowThree() {
    row.push(useSearchParams().get('child') as {})
    let statement = ReactDOMServer.renderToString(useSearchParams().get('statement'))
    let bookImage = '';
    let pathname = ''

    node = {child: JSON.parse(row[1] as string), statment: statement}
    const nodeChild: NodeType = node.child.at(0)!

    console.log('node', nodeChild?.statment)
    statement = nodeChild?.statment

    if (statement === 'If Beale Street Could Talk') {
        bookImage = BookImage.IF_BEALE_COULD_TALK
        pathname = 'https://thelittlebohobookshop.com/item/BCF_nhsWIAUyjvwRp5Kdig'
    } else if (statement === 'Giovannis Room') {
        bookImage = BookImage.GIOVANNIS_ROOM
        pathname = 'https://rep.club/products/giovannis-room-deluxe?_pos=2&_sid=8e7295596&_ss=r'
    }

    return (
        <>
            <NavigationBar />
            <h1 className="pt-6 mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 xsm:text-2xl sm:text-3xl md:text-5xl lg:text-6xl dark:text-white">
                The Author's&nbsp; <div className="text-red-500">Corner</div> &nbsp;
            </h1>
            <br />
            <Link
                href={{pathname: pathname}}>
                    <Image 
                    className="rounded-25 m-auto" 
                    src={"/"+bookImage}
                    width={300}
                    height={500}
                    alt={"photo of "}
                    /> 
                    <br /> 
            </Link>
            
            <div className="text-2xl text-center">
                {statement}
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