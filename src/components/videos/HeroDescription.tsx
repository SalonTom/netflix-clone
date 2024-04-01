import { PiFilmSlateBold } from "react-icons/pi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import INetflixElement from "../../models/i-netflixElement";

export default function HeroDescription({ element } : { element : INetflixElement }) {
    return (
        <>
            <div className="flex flex-col gap-4 max-w-lg">
                <div className="text-[4.5vw]">
                    {element.media_type === 'tv' ? element.name : element.title}
                </div>
                <div className="text-[1.2vw] max-w-[30vw] line-clamp-4 lg:line-clamp-none">
                    { element.overview }
                </div>
            </div>
            <div className="flex gap-3 text-xl font-semibold mt-6">
                <div className="flex items-center gap-3 h-fit pl-4 pr-5 py-2 bg-netflix-white text-netflix-black rounded cursor-pointer hover:bg-opacity-80">
                    <PiFilmSlateBold />
                    Lecture
                </div>
                <div className="flex items-center gap-3 h-fit pl-4 pr-5 py-2 bg-netflix-grey bg-opacity-80 text-netflix-white rounded cursor-pointer hover:bg-opacity-50">
                    <AiOutlineInfoCircle />
                    Plus d'infos
                </div>
            </div>
        </>
    )
}