'use client';

import {Navbar, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import useMediaQuery from "../useMedia";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
//import { useAuth } from "../contexts/AuthContents";

export default function NavigationBar() {
    const router = useRouter();
    let isPhone = useMediaQuery("(max-width: 576px)")
    const navMenu: {name:string, dir: string}[] = [{name: 'Home', dir: '/'}, {name: 'Podcasts', dir: '/podcasts'}, {name: 'Watch', dir: '/watch'}, {name: 'Welcome', dir: '/welcome'}]
    //const { user } = useAuth();

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
                    <DropdownMenu aria-label="Dynamic Actions" items={navMenu}>
                        {(item) =>
                            <DropdownItem key={item.name} onClick={() => router.push(item.dir)} onTouchStart={() => router.push(item.dir)}>
                                {item.name}
                            </DropdownItem>
                        }
                    </DropdownMenu>
                </Dropdown>
           ) : (
                <Navbar className="bg-black **nav.scrolled { @apply shadow-2xl; border-bottom: 0px; }">
                    <NavbarContent justify="center">
                        <NavbarItem>
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
                                onClick={() => {router.push('/watch')}}
                            >
                                Watch
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button 
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                                onClick={() => {router.push('/welcome')}}
                            >
                                Welcome
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
