import { useRouter } from 'next/navigation';
import Link from "next/link";

/* */

export default function ReadingDisplay(readingObject: any) {
    const router = useRouter();
    return (
        <div className="flex h-[100] pt-0">
        <div className="m-auto py-4 h-300 w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href={readingObject.readingObject.articleLink}>
            <div className="pr-4 pl-4 flex justify-center">
              <iframe width="600" height="400" src={readingObject.readingObject.articleLink} />
            </div>
            <br />
            <br />
            <h5 className="pr-4 pl-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {readingObject.readingObject.title}
            </h5>
            <h4 className="pr-4 pl-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              {readingObject.readingObject.author}
            </h4>
          </Link>
          {/* <div className="pr-80 pl-80 content-center">
            <button 
              type="button" 
              onClick={()=> router.push(`/discussion/${readingObject.readingObject.title}`)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Join the Discussion!
            </button>
          </div> */}
        </div>  
      </div>
    )
}