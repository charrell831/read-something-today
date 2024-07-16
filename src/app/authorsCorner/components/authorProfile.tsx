'use client'

import { usePathname } from 'next/navigation'
import { AuthorType } from '../page';
import Link from 'next/link'
import Image from 'next/image';


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
            <Image 
                className="rounded-full m-auto" 
                src={'/' + data.imageSrc}
                width={200}
                height={200}
                alt={data.authorName} 
            />  
        </Link>
        </>
    )
}