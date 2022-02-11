import { api } from "./AxiosService";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";

class ProfilesService{
 
    async getProfile(id) {
        const res = await api.get(`api/profiles/${id}`)
        logger.log('getting this profile', res.data)
    }
}

export const profilesService = new ProfilesService()