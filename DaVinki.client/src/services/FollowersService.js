import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class FollowersService {
    async getByAccount(artistId) {
        const active = AppState.followers.find(f => f.id === artistId)
        logger.log('active', active)
        AppState.activeFollower = active
    }

    async createFollower() {
        const res = await api.post('api/followers/' + id)
        logger.log(res.data)
        AppState.followers.unshift(res.body)
        return res.data
    }
    async removeFollower(id) {
        const res = await api.delete('api/followers/' + id)
        logger.log(res.data)
        const found = AppState.followers.findIndex(f => f.id == id)
        AppState.followers.splice(found, 1)
        logger.log(AppState.followers)
    }


}




export const followersService = new FollowersService()