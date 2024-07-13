'use client'

import { usePathname } from 'next/navigation'
import { AuthorType } from '../page';
import Link from 'next/link'


//pass as object including image src, author name enum
export default function AuthorProfile({authorType}: {authorType: AuthorType}) {
    const data = authorType
    let pathname = usePathname();
    
    return (
        <>
        <Link
            href={{
                pathname: pathname + '/rowOne',
                query: data
            }}
            >
            <img 
                className="rounded-full m-auto" 
                src={data.imageSrc}
                width={200}
                height={200}/>   
        </Link>
        </>
    )
}