import { useEffect, useState } from "react";
import INetflixElement from "../../models/i-netflixElement";

import { BsFillPlayFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export default function VideoCard({ index, element, cardHeight, cardWidth, onHover } : { index : number, element : INetflixElement, cardHeight : number, cardWidth : number,onHover : (...args: any[]) => any }) {

    const [cardIsHovered, setCardIsHovered] = useState(false);

    const [infoCardWidth, setInfoCardWidth] = useState(0);

    const [infoCardHeight, setInfoCardHeight] = useState(0);

    function onCardHover() {
        setTimeout(() => {
            onHover();
            setCardIsHovered(true)
        }, 500);
    };

    function onCardLeave() {
        setTimeout(() => {
            setCardIsHovered(false)
        }, 500);
    }

    useEffect(() => {
        const infoCardWidth = cardIsHovered ? cardWidth*1.3 : 0;
        const infoCardHeight = cardIsHovered ? cardHeight*2 : 0;
        
        setInfoCardWidth(infoCardWidth);
        setInfoCardHeight(infoCardHeight);

    }, [cardIsHovered, cardWidth, cardHeight])

    return (
        <div
            onMouseEnter={() => onCardHover()}
            onMouseLeave={() => onCardLeave()}
            className="relative rounded cursor-pointer"
            style={{order: `${index}`, width : `${cardWidth}px`, height : `${cardHeight}px`}}>
            <img 
                className="absolute top-0 left-0 w-full h-auto rounded"
                src={`${process.env.REACT_APP_IMAGE_URL}${element.backdrop_path}`}
                alt={`Affiche de ${element.media_type === 'tv' ? element.name : element.title}`}></img>

                    <div 
                        onMouseLeave={() => onCardLeave()}
                        className="absolute rounded top-3/4 left-1/2 h-8 w-8 z-10 duration-200 bg-netflix-black"
                        style={{ transform : `translate(-50%, -75%)`, width : `${infoCardWidth}px`, height : `${infoCardHeight}px`, boxShadow: 'rgba(0, 0, 0, 0.75) 0px 3px 10px'}}>
                        <div
                            className="rounded cursor-pointer w-full h-3/5">
                            <img 
                                className="w-full h-full rounded"
                                src={`${process.env.REACT_APP_IMAGE_URL}${element.backdrop_path}`}
                                alt={`Affiche de ${element.media_type === 'tv' ? element.name : element.title}`}></img>
                            
                        </div>
                        <div className="h-2/5 p-3">
                            {
                                cardIsHovered &&
                                <>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex gap-2">
                                            <div className="flex justify-center items-center gap-3 size-4 md:size-6 lg:size-8 bg-netflix-white text-netflix-black rounded-full cursor-pointer hover:bg-opacity-80">
                                                <BsFillPlayFill className="size-2 md:size-4 lg:size-6"/>
                                            </div>
                                            <div className="flex justify-center items-center gap-3 size-4 md:size-6 lg:size-8 bg-netflix-grey bg-opacity-80 text-netflix-white rounded-full cursor-pointer hover:bg-opacity-50">
                                                <BiPlus className="size-2 md:size-4 lg:size-6"/>
                                            </div>
                                            <div className="flex justify-center items-center gap-3 size-4 md:size-6 lg:size-8 bg-netflix-grey bg-opacity-80 text-netflix-white rounded-full cursor-pointer hover:bg-opacity-50">
                                                <AiOutlineHeart className="size-2 md:size-4"/>
                                            </div>
                                        </div>
                                        <div>info</div>
                                    </div>
                                    
                                    <div>Recommandé(e) à 77%</div>
                                    <div>6 épisodes</div>
                                </>
                            }
                        </div>
                    </div>
        </div>
    )
}