'use client';

import {Navbar, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function NavigationBar() {
    const router = useRouter();
    return (
        <div>
            <Navbar className="bg-black **nav.scrolled { @apply shadow-2xl; border-bottom: 0px; }">
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
                        onClick={() => router.push('/about')}
                        >
                        About
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
                    {/* <NavbarItem>
                        <Button 
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                        onClick={() => router.push('/addsomething')}
                        >
                        Add Something
                        </Button>
                    </NavbarItem> */}
                    <NavbarItem>
                        <Button 
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"  
                        onClick={() => router.push('/donationhub')}
                        >
                        Donation Hub
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div> 
    ) 
}
