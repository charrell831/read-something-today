'use client'

import NavigationBar from "../components/navBar";
import useMediaQuery from "../useMedia";

export default function Welcome() {
    let isPhone = useMediaQuery("(max-width: 576px)")
    const paddingSize = isPhone ? 25 : 40

    return (
        <div className="px-[15%] overflow-x-hidden bg-black">
            <NavigationBar />
            <h1 className={`text-center pt-6 mb-4 flex text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}>
                Welcome.
            </h1>
            <div>
            <p className={`flex justify-center`}>
                This website was created with the intention of educating those with a willingness to learn.
                I believe that education is an essential tool in the fight for liberation and this website is (hopefully) a tool
                that will assist people in doing so.
            </p >
                <br />
            <h2 className={`italic  pt-6 mb-4 flex text-1xl font-extrabold leading-none tracking-tight text-gray-900 xsm:text-1xl sm:text-1xl md:text-2xl lg:text-3xl dark:text-white`}>
                How does it  &nbsp; <div className="text-red-500">work</div>?
            </h2>
            <p className={`px-flex justify-center`}>
                Each time you load this site, a reading or podcast will be randomly suggested to you. If you'd like to 
                read or listen to something that aligns with a specific topic, you can click the 'Topics' button, select
                whichever subject you'd prefer to learn more about and the site will randomly suggest a reading/podcast 
                that aligns with your choice.
                <br />
                <br />
                <br />
                Included in this website are various readings (fiction and nonfiction) and podcasts that revolve around topics such as 
                Palestine, Sudan, Congo, Racial Justice and LGBTQIA+ rights.
                <br />
                <br />
                <br />
                My hope is that anyone who comes across this site will walk away with new knowledge that aligns with 
                progressive values and empathy towards marginalized groups.
                <br />
                <br />
                <br />
                Thank you.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </p>
            </div>
        </div>
    );
}