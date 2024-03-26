export default function Link({linkName} : { linkName : string}) {
    return (
        <div className="cursor-pointer ease-in-out duration-200 hover:text-grey">
            {linkName}
        </div>
    )
}