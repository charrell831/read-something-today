export default function PodcastDisplayComponent(podcastObject: any) {
    return (   
        <div className="justify-center flex">
            <iframe className="border-radius:12px " 
                src={podcastObject.podcastObject.podLink}
                width="50%" 
                height="352" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
            </iframe>
        </div>
    )
}