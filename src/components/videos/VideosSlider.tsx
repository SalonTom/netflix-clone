import { useEffect, useState } from "react";
import INetflixElement from "../../models/i-netflixElement";
import VideoCard from "./VideoCard";
import { BiChevronRight } from "react-icons/bi";

export default function VideoSlider({ sliderTitle, videosList } : { sliderTitle : string, videosList : INetflixElement[] }) {
    
    const [miniatureOrder, setMiniatureOrder] = useState<number[]>([]);

    const [currentElement, setCurrentElement] = useState(0);

    
    const [sliderIsHovered, setSliderIsHovered] = useState(false);

    const [titleIsHovered, setTitleIsHovered] = useState(false);

    const [exploreSectionSize, setExploreSectionSize] = useState('0px');

    useEffect(() => {
        setMiniatureOrder(Array.from(Array(videosList.length).keys()))
    }, [videosList])

    
    const newOrder = () => {
        miniatureOrder[currentElement] += videosList.length;
        setMiniatureOrder(miniatureOrder);
        setCurrentElement((currentElement + 1) % videosList.length)
    }

    useEffect(() => {
        if (titleIsHovered) {
            setExploreSectionSize('fit-content');
        } else {
            setExploreSectionSize('0px');
        }
    }, [titleIsHovered])
    
    return (
        <div 
            onMouseEnter={() => setSliderIsHovered(true)}
            onMouseLeave={() => setSliderIsHovered(false)}
            className="absolute top-[83vh] left-[3vw]">
            <div className="my-[3vh]">
                <div className="mb-3 flex justify-between items-center">
                    <div 
                        onMouseEnter={() => setTitleIsHovered(true)}
                        onMouseLeave={() => setTitleIsHovered(false)}
                        className="flex items-center h-10 cursor-pointer gap-1">

                        <div className="text-[1.4vw] font-bold">
                                {sliderTitle}
                        </div>
                        <div className="flex h-10 items-center">
                            { sliderIsHovered && 
                                <>
                                    <div className="text-cyan-400 text-[1vw] overflow-hidden" style={{ width: `${exploreSectionSize}`}}>Tout explorer</div>
                                    <BiChevronRight className="size-6 text-cyan-400"></BiChevronRight> 
                                </>
                            }
                        </div>
                    </div>

                    {

                        sliderIsHovered &&
                        <div className="mr-6 flex gap-1">
                            {
                                videosList.map((element, index) => <>
                                    {
                                        // Transform into styled component
                                        index === currentElement ?
                                        <div className="h-[2px] w-3 bg-netflix-white"></div>
                                        :
                                        <div className="h-[2px] w-3 bg-netflix-grey bg-opacity-80"></div>
                                    }
                                </>)
                            }
                        </div>
                    }
                </div>
                <div className="flex gap-3 max-w-[96vw] relative">
                    {
                        !!videosList ?
                            videosList.map((element, index) => <VideoCard index={miniatureOrder[index]} element={element} onHover={() => setSliderIsHovered(false)}/>)
                        :
                            <div>Loading ...</div>
                    }

                    {
                        sliderIsHovered && 
                        <div 
                            onClick={() => newOrder()}
                            className="absolute right-0 bottom-0 top-0 w-32 h-full flex items-center justify-center cursor-pointer"
                            style={{ background : "linear-gradient(270deg, rgba(20, 20, 20), rgba(20, 20, 20, 0.7) 25%, rgba(20, 20, 20, 0.5) 75%, transparent)"}}>
                            <BiChevronRight className="size-8"></BiChevronRight>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}