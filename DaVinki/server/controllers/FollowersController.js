import { Auth0Provider } from "@bcwdev/auth0provider";
import { followersService } from "../services/FollowersService";
import BaseController from "../utils/BaseController";

export class FollowersController extends BaseController {
    constructor() {
        super('api/account/commissions')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('/:id', this.getByAccount)
            .get('', this.getFollower)
            .delete('/:id', this.remove)
    }
    async getByAccount(arg0, getByAccount) {
        try {
            const followers = await followersService.getFollowersByAccountId
        } catch (error) {

        }
        throw new Error("Method not implemented.");
    }
    getFollower(arg0, getFollower) {
        throw new Error("Method not implemented.");
    }
    remove(arg0, remove) {
        throw new Error("Method not implemented.");
    }
}