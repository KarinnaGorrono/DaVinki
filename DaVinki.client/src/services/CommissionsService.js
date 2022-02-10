import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CommissionsService {
    async getCommission(artistId) {
        const res = await api.get('api/commissions')
        logger.log('active', res.data)
        AppState.activeCommission = res.data
    }

    async createCommission() {
        const res = await api.post('api/commissions', body)
        logger.log(res.data)
        AppState.commissions.unshift(res.body)
    }

    async editCommission(updatedCommission) {
        const res = await api.put('api/commissions/' + updatedCommission.id, updatedCommission)
        logger.log(res.data)
        AppState.activeCommission = new Commission(res.data)
    }

    async removeCommission(id) {
        const res = await api.delete('api/commissions/' + id)
        logger.log(res.data)
        const found = AppState.commissions.findIndex(c => c.id == id)
        AppState.commissions.splice(found, 1)
        logger.log(AppState.commissions)
    }
}

export const commissionsService = new CommissionsService()