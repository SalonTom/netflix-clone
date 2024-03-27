import netflixLogo from '../assets/netflix_logo.svg';
import Link from './Link';

import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import ProfileManager from './ProfileManager';

export default function Navbar() {
    
    const links : { name : string, route: string }[] = [
        {
            name:"Accueil",
            route: ""
        },
        {
            name:"Séries",
            route: ""
        },
        {
            name:"Films",
            route: ""
        },
        {
            name:"Nouveautés les plus regardées",
            route: ""
        },
        {
            name:"Ma liste",
            route: ""
        },
        {
            name:"Explorer par langue",
            route: ""
        }
    ];

    return (
        <div className="bg-netflix-black sticky top-0 left-0 h-16 flex justify-between items-center px-12">
            <div className="flex gap-5 items-center">
                <img 
                    src={netflixLogo}
                    className="cursor-pointer mr-7 w-[10%] h-auto lg:w-24 lg:h-8"
                    alt="Netflix Logo"
                    />

                {
                    links.map(link => <Link linkName={ link.name }></Link>)
                }
            </div>
            <div className="flex gap-5 items-center">
                <HiMagnifyingGlass className='cursor-pointer'/>
                <div className="hidden lg:block">
                    <Link linkName="Jeunesse"></Link>
                </div>
                <BsBell className='cursor-pointer'/>
                <ProfileManager></ProfileManager>
            </div>
        </div>
    )
}