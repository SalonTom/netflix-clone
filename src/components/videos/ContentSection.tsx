import { useEffect, useState } from "react";
import INetflixElement from "../../models/i-netflixElement";
import HeroDescription from "./HeroDescription";
import VideosSlider from "./VideosSlider";
import ApiService from "../../service/apiService";

export default function ContentSection({ heroSectionElement, trendingList } : { heroSectionElement : INetflixElement, trendingList : INetflixElement[] }) {
    
    const [trendingTvSerieList, setTrendingTvSerieList] = useState<INetflixElement[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const popularTvSerieList : INetflixElement[] = await ApiService.getPopularTvSeries();
            setTrendingTvSerieList(popularTvSerieList);
        }

        loadData();
    }, []);

    return (
        <div className="relative h-[80vh] z-[5]">
            <div className="absolute bottom-0 left-[3vw]">
                <HeroDescription element={heroSectionElement}></HeroDescription>
            </div>

            {/* Sliders */}
            <div className="absolute top-[83vh] left-[3vw]">

                {/* Trending films + series */}
                <VideosSlider sliderTitle="Tendances actuelles" videosList={trendingList}></VideosSlider>

                {/* Trending series */}
                <VideosSlider sliderTitle="Séries appréciées sur Blurflix" videosList={trendingTvSerieList}></VideosSlider>
            </div>

            
        </div>
    )
}