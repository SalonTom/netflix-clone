import { useEffect, useState } from "react";
import INetflixElement from "../../models/i-netflixElement";

import { BsFillPlayFill } from "react-icons/bs";
import { BiPlus, BiChevronDown } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { NetflixButtonCircle } from "../core/button/Button";

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

            <div className="absolute left-0 bottom-0 ml-2 mb-2 rounded-lg px-2 py-1 max-w-[50%] text-ellipsis bg-netflix-black text-[0.8vw] font-bold overflow-hidden text-nowrap">
                {element.media_type === 'tv' ? element.name : element.title}
            </div>

            <div 
                onMouseLeave={() => onCardLeave()}
                className="absolute rounded top-3/4 left-1/2 h-8 w-8 z-10 duration-200 bg-netflix-black"
                style={{ transform : `translate(-50%, -75%)`, width : `${infoCardWidth}px`, height : `${infoCardHeight}px`, boxShadow: 'rgba(0, 0, 0, 0.75) 0px 3px 10px'}}>
                <div
                    className="relative rounded cursor-pointer w-full h-3/5">
                    <img 
                        className="w-full h-full rounded"
                        src={`${process.env.REACT_APP_IMAGE_URL}${element.backdrop_path}`}
                        alt={`Affiche de ${element.media_type === 'tv' ? element.name : element.title}`}></img>

                    {
                        cardIsHovered &&
                        <div className="absolute left-0 bottom-0 ml-2 mb-2 rounded-lg px-2 py-1 max-w-[50%] text-ellipsis bg-netflix-black text-[0.9vw] font-bold overflow-hidden text-nowrap">
                            {element.media_type === 'tv' ? element.name : element.title}
                        </div>
                    }
                    
                </div>
                <div className="h-2/5 p-1 text-[0.9vw] md:p-2 lg:p-3">
                    {
                        cardIsHovered &&
                        
                        <>
                            <div className="flex justify-between mb-2">
                                <div className="flex gap-1 md:gap-2">
                                    <NetflixButtonCircle type="primary" onlyIcon={true}>
                                        <BsFillPlayFill/>
                                    </NetflixButtonCircle>

                                    <NetflixButtonCircle type="secondary" onlyIcon={true}>
                                        <BiPlus/>
                                    </NetflixButtonCircle>

                                    <NetflixButtonCircle type="secondary" onlyIcon={true}>
                                        <AiOutlineHeart/>
                                    </NetflixButtonCircle>
                                </div>

                                <NetflixButtonCircle type="secondary" onlyIcon={true}>
                                    <BiChevronDown/>
                                </NetflixButtonCircle>
                            </div>
                            
                            <div className="text-green-400">Recommandé(e) à { Math.floor(Math.random() * 100) }%</div>
                            <div>{ Math.floor(5 + Math.random() * 10) } épisode(s)</div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}