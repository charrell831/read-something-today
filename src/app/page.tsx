"use client";

import Readings from "./readings";
import NavigationBar from "./components/navBar";
import { useRouter } from 'next/navigation';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { ReadingTopics } from "./readings";
import { useState } from "react";
import ReadingDisplay from "./components/readingDisplay";
import Image from 'next/image'

function indexGenerator() {
  const index = Math.floor(Math.random()*Readings().length)
  return index;
}

function mapGenerator() {
  let readingsMap = new Map();
  for (var i = 0; i < Readings().length; i++) {
    let currTopic = Readings()[i].type
    if (readingsMap.has(currTopic)) {
      readingsMap.get(currTopic).push(Readings()[i])
    } else {
      readingsMap.set(currTopic, [Readings()[i]])
    }
  }
  return readingsMap;
}

function findTopics(topic: string) {
  const topicList = mapGenerator().get(topic)
  if (topicList === undefined) {
    alert('Items of this topic have not been added yet.')
    setTimeout(function() { document.getElementById("2")!.focus(); }, 100); 
  } 
  return [Math.floor(Math.random()*topicList.length), topicList]
}



export default function Page() {
  const router = useRouter();
  const index = indexGenerator()
  const [isTopicPicked, setIsTopicPicked] = useState(false)
  const [readingType, setReadingType] = useState('')
  const [readingTopicsList] = [ReadingTopics]
  const [readings, setReadings] = useState([])

  function handleOnClick(readingType: string) {
      setIsTopicPicked(true);
      setReadingType(readingType)
  }
  
  // useEffect(()=> {
  //   const fetchData = async() => {
  //     const latestReadings = (await data()).articles;
  //     console.log(typeof(latestReadings))
  //     setReadings(latestReadings)
  //   }
  //   console.log(readings)
  //   fetchData();
  // }, [])
  return (
    <div className="overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <NavigationBar/>
      </div>
      <br />
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
            <DropdownItem onClick={()=>handleOnClick(ReadingTopics.SUDAN)} onTouchStart={() => handleOnClick(ReadingTopics.SUDAN)}>
              {ReadingTopics.SUDAN}
            </DropdownItem>
            <DropdownItem onClick={() => router.push('/allreadings')} onTouchStart={() => router.push('/allreadings')}>
              All Readings
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
      </div> 
       
      <h1 className="pt-6 mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 xsm:text-2xl sm:text-3xl md:text-5xl lg:text-6xl dark:text-white">
        Read Something  &nbsp; <div className="text-red-500">Today</div>.
      </h1>
      <br />
      <br />
      <p className="flex justify-center text-3xl xsm:text-1xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
        Spotlight Reading
      </p>
      <br />

      {isTopicPicked ? (
        <ReadingDisplay readingObject={findTopics(readingType)![1][findTopics(readingType)![0]]}/>
      ) : (
        <ReadingDisplay readingObject={Readings()[index]}/>
      )}
      <br />
{/* 
      <div className="flex justify-center">
        <h1 className="pt-6 mb-4  text-3xl font-extrabold leading-none tracking-tight text-gray-900 xsm:text-1xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
          How it  &nbsp; <div className="text-red-500">works</div>:
        </h1>
        <br/>
        <br/>
        <p className="flex justify-center text-3xl xsm:text-1xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
          Each time you load the site, a new reading is requested!
        </p>
        <Image
          src="/boyreadingblack.png"
          width={350}
          height={350}
          alt="Person reading"
        />
      </div> */}
      
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
    

  );
}
