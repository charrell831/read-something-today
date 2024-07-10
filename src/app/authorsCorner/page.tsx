'use client';

import { useRouter } from 'next/navigation';

import { Button } from "@nextui-org/react";

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
    const router = useRouter();
    //const children = authorSelected('baldwinTree')

    return (
        <>
            <Button 
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                onClick={() => router.push('/rowOne')}
            >
                James Baldwin
            </Button>
        </>
    )
}