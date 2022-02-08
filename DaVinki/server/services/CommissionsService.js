import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class CommissionsService {
    async getByAccount(userId) {
        // REVIEW Do we want more information on the populate?
        const commissions = await dbContext.Commissions.find({ $or: [{ buyerId: userId }, { artistId: userId }] })
            .populate('artist', 'name picture')
            .populate('buyer', 'name picture')

        return commissions
    }

    async getById(id, userId) {
        // REVIEW does this work? 
        const commission = await dbContext.Commissions.findOne({ _id: id, $or: [{ buyerId: userId }, { artistId: userId }] })
            .populate('artist', 'name picture')
            .populate('buyer', 'name picture')
        if (!commission) {
            throw new BadRequest('Invalid ID')
        }

        return commission
    }

    async createCommission(newCommission) {
        const createdCommission = await dbContext.Commissions.create(newCommission)
        await createdCommission.populate('artist', 'name picture')
        await createdCommission.populate('buyer', 'name picture')
        return createdCommission
    }

    async editCommission(updated, userId) {
        const original = await this.getById(updated.id, userId)

        if (original.status.toString() !== 'denied') {
            throw new BadRequest('Cannot Edit Denied Request')
        }
        if (original.artistId.toString() == userId) {

            original.totalPrice = updated.totalPrice || original.totalPrice
            original.status = updated.status || original.status
            original.deposit = updated.deposit || original.deposit
        } else {
            original.status = updated.status || original.status
            original.type = updated.type || original.type
            original.description = updated.description || original.description
        }

        await original.save()
        return original
    }

    async removeCommission(id, userId) {
        const foundCommission = await this.getById(id, userId)
        foundCommission.status = 'canceled'
        await foundCommission.save()
        return foundCommission
    }

}

export const commissionsService = new CommissionsService()