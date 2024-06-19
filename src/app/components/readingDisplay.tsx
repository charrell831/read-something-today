import { useRouter } from "next/navigation";
import Link from "next/link";
import useMediaQuery from "../useMedia"
/* */

export default function ReadingDisplay(readingObject: any) {
    const router = useRouter();
    let isPhone = useMediaQuery("(max-width: 576px)")

    return (
        <div className="flex h-[100] pt-0">
        <div className="m-auto py-4 h-300 w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {!!isPhone && (
            <p className="italic text-xs pr-4 pl-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              For a better reading experience, it is suggested to use a laptop or tablet.
            </p>
          )}
          <Link href={readingObject.readingObject.articleLink}>
            <div className="pr-4 pl-4 flex justify-center">
              <iframe width="100%" height="400" src={readingObject.readingObject.articleLink} />
            </div>
            <br />
            <br />
            <h5 className="pr-4 pl-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {readingObject.readingObject.title}
            </h5>
            <h4 className="pr-4 pl-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              {readingObject.readingObject.author}
            </h4>
            <h3 className="italic pr-4 pl-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              ({readingObject.readingObject.type})
            </h3>
          </Link>
        </div>  
      </div>
    )
}