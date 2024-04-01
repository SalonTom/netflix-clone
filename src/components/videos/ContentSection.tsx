import INetflixElement from "../../models/i-netflixElement";
import HeroDescription from "./HeroDescription";
import VideosSlider from "./VideosSlider";

export default function ContentSection({ heroSectionElement, trendingList } : { heroSectionElement : INetflixElement, trendingList : INetflixElement[] }) {
    
    return (
        <div className="relative h-[80vh] z-[5]">
            <div className="absolute bottom-0 left-[3vw]">
                <HeroDescription element={heroSectionElement}></HeroDescription>
            </div>

            <VideosSlider sliderTitle="Tendances actuelles" videosList={trendingList}></VideosSlider>
            
        </div>
    )
}