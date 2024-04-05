import { PiFilmSlateBold } from "react-icons/pi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import INetflixElement from "../../models/i-netflixElement";
import { NetflixButton } from "../core/button/Button";

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
                <NetflixButton type="primary" hasIcon={true}>
                    <PiFilmSlateBold />
                    Lecture
                </NetflixButton>
                <NetflixButton type="secondary" hasIcon={true}>
                    <AiOutlineInfoCircle />
                    Plus d'infos
                </NetflixButton>
            </div>
        </>
    )
}