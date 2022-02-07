import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { followersService } from '../services/FollowersService'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/followers/:id', this.getByAccount)
  }

  async getByAccount(req, res, next) {
    try {
      const followers = await followersService.getFollowersByAccountId(req.userInfo.id)
      return res.send(followers)
    } catch (error) {

    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
