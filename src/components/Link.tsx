export default function Link({linkName, onClick} : { linkName : string, onClick? : () => void }) {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }

    return (
        <div className="text-netflix-grey py-2 cursor-pointer ease-in-out duration-200 hover:text-white lg:text-white lg:hover:text-netflix-grey lg:py-0" onClick={handleClick}>
            { linkName }
        </div>
    )
}