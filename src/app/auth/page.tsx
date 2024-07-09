"use client"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Button } from "@nextui-org/react";


export default function Auth(props: any) {
    return (
        <> 
        {props.user ? (
            <>
                <span className='italic'>
                    Signed in as {props.user.email}
                </span>
                <br/>
                <Button 
                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 text-white focus:ring-gray-300 dark:focus:ring-gray-600" 
                    onClick={props.signOut}
                >
                    Sign Out
                </Button>
            </>
        ) : (
            <Button 
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 text-white focus:ring-gray-300 dark:focus:ring-gray-600" 
                onClick={props.signIn}
            >
                Sign In
            </Button>
        )}
        </>
    )
}