'use client';

import axios from 'axios';
import { useAuthorStore } from '../authorTree';
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";

async function authorSelected(author: string) {
    // if (author === 'James Baldwin') {
    //     await fetch(`${url}/baldwinTree/`).then((data)=>{});
        
    // }
        fetch(`${url}/baldwinTree/`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data.statment);
            return (
                <>
                    hi
                        {data.statment}
                </>
            )
          });
}

export default function AuthorsCorner() {
    return (
        <>
            <Button 
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                onClick={() => {authorSelected('James Baldwin')}}
            >
                James Baldwin
            </Button>
        </>
    )
}