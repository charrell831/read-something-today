'use client'

import { usePathname } from 'next/navigation'
import { AuthorType } from '../page';
import Link from 'next/link'


//pass as object including image src, author name enum
export default function AuthorProfile({authorType}: {authorType: AuthorType}) {
    const data = authorType
    let pathname = usePathname();
    console.log(pathname)
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
            {/* <button 
                className="transition ease-in-out delay-150"
                onClick={() => router.push(
                    '/rowOne', data
                )}
            >
                <img 
                    className="rounded-full m-auto" 
                    src={authorType.imageSrc}
                    width={200}
                    height={200}/>
            </button> */}
        </>
    )
}