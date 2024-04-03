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

    const [cardWidth, setCardWith] = useState(0);

    const [cardHeight, setCardHeight] = useState(0);

    const [sliderButtonsWidth, setSliderButtonsWidth] = useState(0);

    const [sliderWidth, setSliderWidth] = useState(0);

    useEffect(() => {
        setMiniatureOrder(Array.from(Array(videosList.length).keys()))
    }, [videosList])

    
    const newOrder = () => {
        miniatureOrder[currentElement] += videosList.length;
        setMiniatureOrder(miniatureOrder);
        setCurrentElement((currentElement + 1) % videosList.length)
    }

    const setElementsSize = () => {
        let nbMiniatures : number = 6;
        const windowWidth : number = window.outerWidth;
        console.log(windowWidth);

        if (windowWidth < 1024 && windowWidth >= 768) {
            nbMiniatures = 4;
        } else if (windowWidth < 768) {
            nbMiniatures = 3;
        }

        let sliderWidth = windowWidth*0.97 - 16;

        // 0.5 added to take into consideration the size of the slider buttons that are 1/4 the size of the card.
        const cardWidth : number = (sliderWidth - (nbMiniatures - 1) * 12) / (nbMiniatures + 0.5);
        const sliderButtonsWidth : number = cardWidth / 2;

        setCardWith(cardWidth);
        setCardHeight(cardWidth * 9/16);
        setSliderButtonsWidth(sliderButtonsWidth);
        setSliderWidth(sliderWidth);
    }

    useEffect(() => {
        if (titleIsHovered) {
            setExploreSectionSize('fit-content');
        } else {
            setExploreSectionSize('0px');
        }
    }, [titleIsHovered])

    useEffect(() => {
        
        setElementsSize();

        window.addEventListener('resize', (event) => {
            setElementsSize();
        });
    }, [])
    
    return (
        <div 
            onMouseEnter={() => setSliderIsHovered(true)}
            onMouseLeave={() => setSliderIsHovered(false)}>
            <div className="my-[3vh] relative" style={{ width: `${sliderWidth}px`}}>
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
                <div className="flex gap-3 w-fit">
                    {
                        !!videosList ?
                            videosList.map((element, index) => 
                                <VideoCard 
                                    index={miniatureOrder[index]} 
                                    element={element} 
                                    onHover={() => setSliderIsHovered(false)}
                                    cardHeight={cardHeight}
                                    cardWidth={cardWidth}/>)
                        :
                            <div>Loading ...</div>
                    }

                </div>
                {
                    sliderIsHovered && 
                    <div 
                        onMouseEnter={() => setSliderIsHovered(true)}
                        onClick={() => newOrder()}
                        className="absolute right-0 bottom-0 rounded-l-lg flex items-center justify-center cursor-pointer h-full bg-netflix-black bg-opacity-70"
                        style={{ width: `${sliderButtonsWidth}px`, height: `${cardHeight}px`}}>
                        <BiChevronRight className="size-8"></BiChevronRight>
                    </div>
                }
            </div>
        </div>
    )
}