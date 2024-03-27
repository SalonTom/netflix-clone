export default function Link({linkName} : { linkName : string}) {
    return (
        <div className="cursor-pointer ease-in-out duration-200 hover:text-netflix-grey">
            { linkName }
        </div>
    )
}