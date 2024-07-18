'use client';

import NavigationBar from "../components/navBar"
import { podcastSrcs } from "../podcastSrc";
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useState } from "react";
import { ReadingTopics } from "../readings";
import PodcastDisplayComponent from "../components/podcastDisplay";

function indexGenerator() {
    const index = Math.floor(Math.random()*podcastSrcs.length)
    return index;
}

function mapGenerator() {
    let podcastsMap = new Map();
    for (var i = 0; i < podcastSrcs.length; i++) {
      let currTopic = podcastSrcs[i].type
      if (podcastsMap.has(currTopic)) {
        podcastsMap.get(currTopic).push(podcastSrcs[i])
      } else {
        podcastsMap.set(currTopic, [podcastSrcs[i]])
      }
    }
    return podcastsMap;
}
  
  function findTopics(topic: string) {
    const topicList = mapGenerator().get(topic)
    if (topicList === undefined) {
      alert('Items of this topic have not been added yet.')
      return;
    } 
    return [Math.floor(Math.random()*topicList.length), topicList]
  }

export default function PodcastDisplay() {
    const index = indexGenerator()
    const router = useRouter();
    const [isTopicPicked, setIsTopicPicked] = useState(false)
    const [podcastType, setPodcastType] = useState('')
  
    function handleOnClick(podcastType: string) {
        setIsTopicPicked(true)
        setPodcastType(podcastType)
    }

    return (
      <div className="overflow-x-hidden">
        <div className="min-h-screen bg-black">
            <NavigationBar />
          <br/>
        <div className="flex justify-center">
        <Dropdown className="bg-slate-500">
        <DropdownTrigger>
          <button 
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 italic"
          >
            Topics
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions">
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.LGBTQIA)} onTouchStart={() => handleOnClick(ReadingTopics.LGBTQIA)}>
              {ReadingTopics.LGBTQIA}
            </DropdownItem>
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.PALESTINE)} onTouchStart={() => handleOnClick(ReadingTopics.PALESTINE)}>
              {ReadingTopics.PALESTINE}
            </DropdownItem>
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.RACIAL_JUSTICE)} onTouchStart={() => handleOnClick(ReadingTopics.RACIAL_JUSTICE)}>
              {ReadingTopics.RACIAL_JUSTICE}
            </DropdownItem>
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.SUDAN)} onTouchStart={() => handleOnClick(ReadingTopics.SUDAN)}>
              {ReadingTopics.SUDAN}
            </DropdownItem>
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.CONGO)} onTouchStart={() => handleOnClick(ReadingTopics.CONGO)}>
              {ReadingTopics.CONGO}
            </DropdownItem>
            <DropdownItem onClick={() => router.push('/allpodcasts')} onTouchStart={() => router.push('/allpodcasts')}>
              All Podcasts
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
      </div> 
            <h1 className="pt-6 mb-4 flex justify-center text-4xl xsm:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Listen to Something&nbsp;<div className="text-red-500">Today</div>.
            </h1>
            <br />
            <br />
            <p className="flex justify-center text-3xl dark:text-white">
                Spotlight Podcast
            </p>
            <br />

            {isTopicPicked ? (
                <PodcastDisplayComponent podcastObject={findTopics(podcastType)![1][findTopics(podcastType)![0]]}/>
            ) : (
                <PodcastDisplayComponent podcastObject={podcastSrcs[index]}/>
            )}
            <br />
            <br />
            <br />
            </div>
        </div>
        
    )
}