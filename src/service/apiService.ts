import AxiosUtils from "../utils/axiosUtils";
import NetflixElement from "../models/i-netflixElement"

export default class ApiService {
    public static async getMoviesListAsync() : Promise<NetflixElement[]> {
        try {
            const response = await AxiosUtils.getAxiosInstance().get(process.env.REACT_APP_URI_DISCOVER_MOVIE as string);
            const movieList : NetflixElement[] = response.data["results"];

            return Promise.resolve(movieList);
        } catch(error) {
            alert(error);
            return []
        }
    }

    public static async getTrendingElements() : Promise<NetflixElement[]> {
        try {
            const response = await AxiosUtils.getAxiosInstance().get(process.env.REACT_APP_URI_TOP_RATED_MOVIE as string);
            const movieList : NetflixElement[] = response.data["results"];

            return Promise.resolve(movieList);
        } catch(error) {
            alert(error);
            return []
        }
    }
}