import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ApiService from "../../service/apiService";
import INetflixElement from "../../models/i-netflixElement"
import ContentSection from "../../components/videos/ContentSection";

export default function Homepage() {

    const [trendingList, setTrendingList] = useState<INetflixElement[]>([]);

    const [heroSectionElement, setHeroSectionElement] = useState<INetflixElement>();

    function getRandomElement(list : INetflixElement[]) : INetflixElement {
        return list[Math.floor(Math.random() * list.length)];
    }

    useEffect(() => {
        const loadData = async () => {
            const trendingList : INetflixElement[] = await ApiService.getMoviesListAsync();
            setTrendingList(trendingList);
            setHeroSectionElement(getRandomElement(trendingList));
        }

        loadData();
    }, []);

    return (
        <>
            {
                heroSectionElement &&
                    <div className="min-h-screen w-[100vw]" style={{ 
                        backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${heroSectionElement.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        boxShadow: 'rgb(20, 20, 20) 0px -24px 36px 14px inset'
                    }}>
                        <Navbar></Navbar>
                        <ContentSection heroSectionElement={heroSectionElement} trendingList={trendingList}></ContentSection>
                    </div>
            }
        </>
    )
}