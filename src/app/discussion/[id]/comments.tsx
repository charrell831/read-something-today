import { signOut, User } from "firebase/auth";
import Readings from "@/app/readings";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Comment (props: any) {
    const pathname = usePathname()
    const readingObject = Readings().find((reading)=> reading.title === decodeURI(pathname.split('/')[2]))
    

}