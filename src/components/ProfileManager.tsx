import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { BiTransferAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";

function ProfileEntry({ username } : { username : string }) {
    return (
        <div className="flex gap-2 items-center">
            <div className="w-8 h-8 rounded bg-orange-400 relative flex justify-center items-center">
                <span className="font-bold">
                    { username.at(0) }
                </span>
            </div>
            <div>
                { username }
            </div>
        </div>
    )
}

function MenuHover({ isHovered, profiles } : { isHovered : boolean, profiles : string[] }) {
    if (isHovered) {
        return <> 
            <div className="bg-black bg-opacity-90 absolute top-full right-0 w-48 mt-4 text-sm">
            
                <div className="flex flex-col gap-2 px-2 py-4">
                    {
                        profiles.map(profile => {
                            return <>
                                <ProfileEntry username={profile}/>
                            </>
                        })
                    }

                    <div className="flex gap-2 items-center">
                        <CiEdit className="size-8"></CiEdit>
                        <div>Gérer les profils</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <BiTransferAlt className="size-8"></BiTransferAlt>
                        <div>Transférer un profil</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <BsPerson className="size-8"></BsPerson>
                        <div>Compte</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <BiHelpCircle className="size-8"></BiHelpCircle>
                        <div>Centre d'aide</div>
                    </div>
                </div>
                <div className="h-[1px] w-48 bg-gray-600"></div>
                <div className="py-3 text-center">
                    Se déconnecter
                </div>
            </div>          
        </>
    }
    
    return null
}

export default function ProfileManager() {

    const profiles : string[] = ["Tom", "Papa", "Maman", "Jeunesse"];

    const [currentProfile, setCurrentProfile] = useState('Tom');

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(true)}>

            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded border-solid border-white relative flex justify-center items-center">
                    <span className="font-bold">
                        {currentProfile.at(0)}
                    </span>
                </div>         
                <BiSolidDownArrow className='h-3 duration-300 ease-in-out' style={{ transform : isHovered ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
            </div>

            <MenuHover isHovered={isHovered} profiles={profiles}></MenuHover>
        </div>
    )
}