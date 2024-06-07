// import { familyDonationSrcs, orgDonationSrcs } from "../donateSrcs";
// import Link from "next/link";
// import NavigationBar from "../components/navBar";
// import { ReadingTopics } from "../readings";

 export default function DonationHub () {
//     //add comment section and pending note for added readings
     return (
        <>
          <h1 className="pt-6 mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Coming &nbsp; <div className="text-red-500"> Soon</div>.
            </h1>
        </>
//         <div>
//             <NavigationBar />
//             <h1 className="pr-4 pl-4 pt-6 mb-4 flex text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//                 Donate Directly to Those in Need.
//             </h1>
//             <br />
//             <div className="pr-4 pl-4">
//             <h2 className="underline text-2xl justify-center italic">
//                 Help Palestinians Directly
//             </h2> 
//                 {familyDonationSrcs.map((src)=>
//                     (src.type === ReadingTopics.PALESTINE) && (
//                         <div className="justify-center italic">
//                             <Link href={src.donationLink}>{src.title}</Link>
//                         </div>
//                     )   
//                 )}
//             </div>
//             <br />
//             <div className="pr-4 pl-4">
//             <h2 className="underline text-2xl justify-center italic">
//                 Help Those in the Congo Directly
//             </h2> 
//                 {familyDonationSrcs.map((src)=>
//                     (src.type === ReadingTopics.CONGO) && (
//                         <div className="justify-center italic">
//                             <Link href={src.donationLink}>{src.title}</Link>
//                         </div>
//                     )   
//                 )}
//             </div>   
//             <br />
//             <div className="pr-4 pl-4">
//             <h2 className="underline text-2xl justify-center italic">
//                 Organizations Helping Palestine
//             </h2>
//                 {orgDonationSrcs.map((src)=>
//                     (src.type === ReadingTopics.PALESTINE) && (
//                         <div className="justify-center italic">
//                             <Link href={src.donationLink}>{src.title}</Link>
//                         </div>
//                     )
//                 )}
//             </div>
//             <br />
//             <div className="pr-4 pl-4">
//             <h2 className="underline text-2xl justify-center italic">
//                 Organizations Helping Sudan
//             </h2>
//                 {orgDonationSrcs.map((src)=>
//                     (src.type === ReadingTopics.SUDAN) && (
//                         <div className="justify-center italic">
//                             <Link href={src.donationLink}>{src.title}</Link>
//                         </div>
//                     )
//                 )}
//             </div>
//         </div>
     )
 }