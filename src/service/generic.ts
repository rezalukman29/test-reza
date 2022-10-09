import axios from "./axiosInstance";

export default class GenericService {
    url: string;
    constructor(url: string) {
        this.url = url;
    }


    async get(resource?: string): Promise<any> {
        let res;

        if (resource) {
            res = await axios.get(`${this.url}/${resource}`);
        } else {
            res = await axios.get(`${this.url}`);
        }

        return res.data;
    }

}