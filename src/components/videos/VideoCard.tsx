import { useEffect, useState } from "react";
import INetflixElement from "../../models/i-netflixElement";

export default function VideoCard({ index, element, onHover } : { index : number, element : INetflixElement, onHover : (...args: any[]) => any }) {

    const [cardIsHovered, setCardIsHovered] = useState(false);
    const [cardTransformProperty, setCardTransformProperty] = useState('none');

    function onCardHover() {
        setTimeout(() => {
            onHover();
            setCardIsHovered(true)
        }, 200);
    };

    function onCardLeave() {
        setTimeout(() => {
            setCardIsHovered(false)
        }, 200);
    }

    useEffect(() => {
        if (cardIsHovered) setCardTransformProperty('scale(1.8)')
        else setCardTransformProperty('none')
    }, [cardIsHovered])

    return (
        <img 
            onMouseEnter={() => onCardHover()}
            onMouseLeave={() => onCardLeave()}
            className="w-[28vw] md:w-[20vw] lg:w-[13.5vw] h-auto rounded duration-500 cursor-pointer"
            src={`${process.env.REACT_APP_IMAGE_URL}${element.backdrop_path}`}
            style={{order: `${index}`, transform: `${cardTransformProperty}`}}
            alt={`Affiche de ${element.media_type === 'tv' ? element.name : element.title}`}></img>
    )
}