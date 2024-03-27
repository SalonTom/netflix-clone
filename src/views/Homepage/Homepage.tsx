import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ApiService from "../../service/apiService";
import NetflixElement from "../../models/i-netflixElement"
import ContentSection from "../../components/videos/ContentSection";
import INetflixElement from "../../models/i-netflixElement";

export default function Homepage() {

    const [trendingList, setTrendingList] = useState<NetflixElement[]>([]);

    const [heroSectionElement, setHeroSectionElement] = useState<NetflixElement>();

    function getRandomElement(list : NetflixElement[]) : NetflixElement {
        return list[Math.floor(Math.random() * list.length)];
    }

    useEffect(() => {
        const loadData = async () => {
            const trendingList : NetflixElement[] = await ApiService.getMoviesListAsync();
            setTrendingList(trendingList);
            setHeroSectionElement(getRandomElement(trendingList));
        }

        loadData();
    }, []);

    return (
        <>
            {
                heroSectionElement &&
                    <div className="min-h-screen w-auto" style={{ 
                        backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${heroSectionElement.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Navbar></Navbar>
                        <ContentSection heroSectionElement={heroSectionElement}></ContentSection>
                    </div>
            }
        </>
    )
}