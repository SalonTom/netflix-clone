import axios, { AxiosInstance } from 'axios';

export default class AxiosUtils {

    private static _instance : AxiosInstance;

    public static getAxiosInstance() {
        if (!this._instance) {
            this._instance = axios.create({
                baseURL: process.env.REACT_APP_API_BASE_URL,
                timeout: 1000,
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_JWT_TOKEN}`
                  }
            });
        }

        return this._instance;
    }
}