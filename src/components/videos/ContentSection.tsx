import HeroDescription from "./HeroDescription";

export default function ContentSection({ heroSectionElement } : { heroSectionElement : any }) {
    return (
        <div className="relative h-[80vh] z-30">
            <div className="absolute bottom-0 left-11 z-30">
                <HeroDescription element={heroSectionElement}></HeroDescription>
            </div>

            <div className="absolute top-[80vh] left-11">
                Let's goooooooooooooo
            </div>
        </div>
    )
}