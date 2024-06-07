import NavigationBar from "../components/navBar";
import { useRouter } from 'next/navigation';

export default function About() {
    return (
        <div className="overflow-x-hidden bg-black">
            <NavigationBar />
            <h1 className="pt-6 mb-4 flex text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Welcome.
            </h1>
            <p className="">
                This website was created with the intention of educating those with a willingness to learn.
                Education is an essential tool in the fight for liberation and this website is (hopefully) a tool
                that will assist people in doing so.
                <br />
                <br />
                <br />
                Included in this website are various readings and podcasts that revolve around topics such as 
                Palestine, Sudan, Congo, Racial Justice and LGBTQIA+ rights.
                <br />
                <br />
                <br />
                My hope is that anyone who comes across this site walks away with new knowledge that aligns with 
                progressive values.
            </p>
        </div>
    );
}