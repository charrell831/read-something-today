'use client';

import NavigationBar from "../components/navBar"
import { videoSrc } from "../videoSrc";
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useState } from "react";
import { ReadingTopics } from "../readings";
import WatchDisplay from "../components/videoDisplay";

function indexGenerator() {
    const index = Math.floor(Math.random()*videoSrc.length)
    return index;
}

function mapGenerator() {
    let vidMap = new Map();
    for (var i = 0; i < videoSrc.length; i++) {
      let currTopic = videoSrc[i].type
      if (vidMap.has(currTopic)) {
        vidMap.get(currTopic).push(videoSrc[i])
      } else {
        vidMap.set(currTopic, [videoSrc[i]])
      }
    }
    return vidMap;
}
  
  function findTopics(topic: string) {
    const topicList = mapGenerator().get(topic)
    if (topicList === undefined) {
      alert('Items of this topic have not been added yet.')
      return;
    } 
    return [Math.floor(Math.random()*topicList.length), topicList]
  }

export default function WatcbDisplay() {
    const index = indexGenerator()
    const router = useRouter();
    const [isTopicPicked, setIsTopicPicked] = useState(false)
    const [watchType, setWatchType] = useState('')
  
    function handleOnClick(watchType: string) {
        setIsTopicPicked(true)
        setWatchType(watchType)
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
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.MASS_INC)} onTouchStart={() => handleOnClick(ReadingTopics.MASS_INC)}>
              {ReadingTopics.MASS_INC}
            </DropdownItem>
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.FEMINISM)} onTouchStart={() => handleOnClick(ReadingTopics.FEMINISM)}>
              {ReadingTopics.FEMINISM}
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
      </div> 
            <h1 className="pt-6 mb-4 flex justify-center text-4xl xsm:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Watch Something&nbsp;<div className="text-red-500">Today</div>.
            </h1>
            <br />
            <br />
            <p className="flex justify-center text-3xl dark:text-white">
                Spotlight Video
            </p>
            <br />

            {isTopicPicked ? (
                <WatchDisplay videoObject={findTopics(watchType)![1][findTopics(watchType)![0]]}/>
            ) : (
                <WatchDisplay videoObject={videoSrc[index]}/>
            )}
            <br />
            <br />
            <br />
            </div>
        </div>
        
    )
}