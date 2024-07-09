'use client';

import {Navbar, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import useMediaQuery from "../useMedia";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
//import { useAuth } from "../contexts/AuthContents";

export default function NavigationBar() {
    const router = useRouter();
    let isPhone = useMediaQuery("(max-width: 576px)")
    //const { user } = useAuth();
    //let signInOrEmail = user ? user?.email : "Sign In"


    return (
        <div>
           { isPhone ? (     
                <Dropdown className="bg-slate-500">
                    <DropdownTrigger>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </DropdownTrigger>  
                    <DropdownMenu aria-label="Dynamic Actions">
                        <DropdownItem onClick={() => router.push('/')} onTouchStart={() => router.push('/')}>
                            Home
                        </DropdownItem>
                        <DropdownItem onClick={()=> router.push('/podcasts')} onTouchStart={() => router.push('/podcasts')}>
                            Podcasts
                        </DropdownItem>
                        <DropdownItem onClick={()=> router.push('/about')} onTouchStart={() => router.push('/about')}>
                            About
                        </DropdownItem>
                        
                        {/* <DropdownItem onClick={() => router.push('/donationhub')} onTouchStart={() => router.push('/donationhub')}>
                            Donation Hub
                        </DropdownItem> */}
                    </DropdownMenu>
                </Dropdown>
           ) : (
                <Navbar className="bg-black **nav.scrolled { @apply shadow-2xl; border-bottom: 0px; }">
                    <NavbarContent justify="center">
                        <NavbarItem>
                            {/* <Button 
                                type="button" 
                                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 text-white focus:ring-gray-300 dark:focus:ring-gray-600" 
                                id="user-menu-button" 
                                aria-expanded="false"
                                onClick={() =>  '/auth'}>
                                Sign In 
                            </Button> */}
                        </NavbarItem>
                        <NavbarItem>
                            <Button 
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white font-bold"  
                                onClick={() => router.push('/')}
                            >
                                Home
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button 
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                                onClick={() => router.push('/podcasts')}
                            >
                                Podcasts
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button 
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                                onClick={() => router.push('/about')}
                            >
                                About
                            </Button>
                        </NavbarItem>
                        {/* <NavbarItem>
                            <Button 
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                                onClick={() => router.push('/authorsCorner')}
                            >
                                Author's Corner
                            </Button>
                        </NavbarItem> */}
                        
                        {/* <NavbarItem>
                            <Button 
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                            onClick={() => router.push('/addsomething')}
                            >
                            Add Something
                            </Button>
                        </NavbarItem> */}
                        {/* <NavbarItem>
                            <Button 
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                            onClick={() => router.push('/donationhub')}
                            >
                                Donation Hub
                            </Button>
                        </NavbarItem> */}
                    </NavbarContent>
                </Navbar>
            )}
        </div> 
    ) 
}
