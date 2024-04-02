import { useEffect, useState } from "react";
import INetflixElement from "../../models/i-netflixElement";

export default function VideoCard({ index, element, cardHeight, cardWidth, onHover } : { index : number, element : INetflixElement, cardHeight : number, cardWidth : number,onHover : (...args: any[]) => any }) {

    const [cardIsHovered, setCardIsHovered] = useState(false);

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

    return (
        <div
            onMouseEnter={() => onCardHover()}
            onMouseLeave={() => onCardLeave()}
            className="relative rounded duration-500 cursor-pointer overflow-hidden"
            style={{order: `${index}`, width : `${cardWidth}px`, height : `${cardHeight}px`}}>
            <img 
                className="absolute top-0 left-0 w-full h-auto"
                src={`${process.env.REACT_APP_IMAGE_URL}${element.backdrop_path}`}
                alt={`Affiche de ${element.media_type === 'tv' ? element.name : element.title}`}></img>

            {
                cardIsHovered &&
                    <div className="absolute top-1/2 left-1/2 h-8 w-8 bg-blue-900">
                        test
                    </div>
            }
        </div>
    )
}