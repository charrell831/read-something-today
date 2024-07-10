'use client'

import { Button } from "@nextui-org/react";

async function statementSelected(statement: string) {
        const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : "http://localhost:3000/api";

    fetch(`${url}/getChild/`)
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

export default function RowOne() {
    <>
        <Button 
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
            onClick={() => {}}
        >
            Fiction
        </Button>

        <Button 
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
            onClick={() => {}}
        >
            Non-Fiction
        </Button>
    </>
}