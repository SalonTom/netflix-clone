import netflixLogo from '../../assets/netflix_logo.svg';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";

import Link from './Link';
import ProfileManager from './ProfileManager';
import { useEffect, useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

function CategorySelector() {
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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>      
            <div className='hidden gap-5 items-center lg:flex'>
                {
                    links.map(link => <Link key={link.name} linkName={ link.name }></Link>)
                }
            </div>
            <div className='lg:hidden' style={{fontSize : "1.2vw"}}>
                <div 
                    className='flex gap-2 items-center cursor-pointer ease-in-out duration-300 hover:text-netflix-grey'
                    onClick={() => setIsOpen(!isOpen)}>

                    Parcourir
                    <BiSolidDownArrow className='h-3 size-2' style={{ transform : isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                </div>

                {
                    isOpen && 
                    <>
                        <div className='absolute top-full left-0 ml-4 w-2/5 text-center p-2 bg-netflix-black bg-opacity-80 flex flex-col border-solid border-t-2 border-t-netflix-white border-x-[1px] border-x-zinc-800 border-b-[1px] border-b-zinc-800'>
                            {
                                links.map(link => <Link key={link.name} linkName={ link.name } onClick={() => setIsOpen(false)}></Link>)
                            }
                        </div>
                    </>
                }
            </div>
        </>
    )

}

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const rootElmt : HTMLElement | null = document.getElementById('root');
        
        rootElmt?.addEventListener("scroll", () => {
            setScrolled(!(rootElmt.scrollTop == 0));
        });
    }, []);

    return (
        <div 
            className="sticky top-0 left-0 h-16 flex justify-between items-center px-[3vw] z-10 duration-500"
            style={{ background: `${scrolled ? 'rgb(20 20 20)' : 'linear-gradient(180deg, #141414, transparent)'}`}}>
            <div className='flex items-center'>
                <img 
                    src={netflixLogo}
                    className="cursor-pointer mr-7 w-[10%] h-auto lg:w-24 lg:h-8"
                    alt="Netflix Logo"
                    />

                <CategorySelector></CategorySelector>
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