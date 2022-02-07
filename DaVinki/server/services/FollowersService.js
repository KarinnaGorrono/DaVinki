import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'
class FollowersService {
    async getFollowingByAccountId(userId) {
        const following = await dbContext.Followers.find({ followingId: userId }).populate('account', 'name picture')
        return following
    }
    async getFollowersByAccountId(accountId) {
        const followers = await dbContext.Followers.find({ accountId: accountId }).populate('follower', 'name picture')
        return followers
    }

    async addFollower(newFollower) {
        const addFollower = await dbContext.Followers.create(newFollower)
        await addFollower.populate('follower', 'name picture')
        return addFollower
    }

    async removeFollower(modelId, userId) {
        const foundFollower = await dbContext.Followers.findById(modelId)
        if (foundFollower.followerId.toString() !== userId) {
            throw new BadRequest('unable to delete')
        }
        await foundFollower.remove()
        return foundFollower
    }

}


export const followersService = new FollowersService()