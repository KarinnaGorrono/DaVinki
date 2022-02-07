import { Auth0Provider } from "@bcwdev/auth0provider";
import { commissionsService } from "../services/CommissionsService";
import BaseController from "../utils/BaseController";


export class CommissionsController extends BaseController {
    constructor() {
        super('api/account/commissions')
        this.router
            .get('', this.getByAccount)
            .get('/:id', this.getById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createCommission)
            .put('/:id', this.editCommission)
            .delete('/:id', this.removeCommission)
    }

    async getByAccount(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const commissions = await commissionsService.getByAccount()
            return res.send(commissions)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            const commissions = await commissionsService.getById(req.params.id)
            return res.send(commissions)
        } catch (error) {
            next(error)
        }
    }

    async createCommission(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const commissions = await commissionsService.createCommission(req.body.id)
            return res.send(commissions)
        } catch (error) {
            next(error)
        }
    }

    async editCommission(req, res, next) {
        try {
            req.body.id = req.params.id
            const editedCommission = await commissionsService.editCommission(req.body.id)
            return res.send(editedCommission)
        } catch (error) {
            next(error)
        }

    }
    async removeCommission(req, res, next) {
        try {
            req.body.id = req.params.id
            req.body.accountId = req.userInfo.id
            await commissionsService.removeCommission(req.params.id)
            return res.send('deleted commission')
        } catch (error) {
            next(error)
        }
    }
}