import useMediaQuery from "../useMedia"

export default function PodcastDisplayComponent(podcastObject: any) {
    let isPhone = useMediaQuery("(max-width: 576px)")
    console.log(isPhone)
    return (
        <div>
        {isPhone ? (
            <div className="justify-center flex">
            <iframe className="border-radius:12px" 
                src={podcastObject.podcastObject.podLink}
                width="75%" 
                height="600"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">     
            </iframe>
        </div>
        ):(
            
            <div className="justify-center flex ">
            <iframe className="border-radius:12px " 
                src={podcastObject.podcastObject.podLink}
                width="50%" 
                height="352" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
            </iframe>
        </div>
        )}   
        </div>
    )
}