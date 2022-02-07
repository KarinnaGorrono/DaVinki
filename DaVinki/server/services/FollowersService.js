import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'
class FollowersService {
    async getFollowersByAccountId(accountId) {
        const followers = await dbContext.Followers.find({ accountId: accountId }).populate('account', 'name picture')
        return followers
    }

    async addFollower(newFollower) {
        const addFollower = await dbContext.Followers.create(newFollower)
        await addFollower.populate('follower', 'name picture')
        return addFollower
    }

    async removeFollower(followerId) {
        const foundFollower = await dbContext.Followers.findById(followerId)
        if (foundFollower.followerId.toString() !== followerId) {
            throw new BadRequest('unable to delete')
        }
        await foundFollower.remove()
        return foundFollower
    }
}


export const followersService = new FollowersService()