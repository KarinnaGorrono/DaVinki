import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CommissionsService {
    async getCommission(accountId) {
        const active = AppState.commissions.find(c => c.id === accountId)
        logger.log('active', active)
        AppState.activeCommission = active
    }

    async createCommission() {
        const res = await api.post('api/commissions', body)
        logger.log(res.data)
        AppState.commissions.unshift(res.body)
    }

    async editCommission(updatedCommission) {
        const res = await api.put('a[i/commissions/' + updatedCommission.id, updatedCommission)
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