import axios from "axios"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

//NOTE need to know what API is needed
const pieceApi = axios.create({

})
class PiecesService {
    async getAllPieces(query = '') {
        const res = await api.get('api/pieces' + query)
        logger.log(res.data)
        AppState.pieces = res.data
        AppState.filteredPieces = res.data
    }

    async getPieceById(pieceId) {
        const active = AppState.pieces.find(p => p.id === pieceId)
        logger.log('active', active)
        AppState.activePiece = active
    }

    async createPiece(body) {
        const res = await api.post('api/pieces', body)
        logger.log(res.data)
        AppState.pieces.unshift(res.data)
        return res.data
    }

    async editPiece(updatedPiece) {
        const res = await api.put('api/pieces/' + updatedPiece.id, updatedPiece)
        logger.log(res.data)
        AppState.activePiece = new Piece(res.data)
    }

    async removePiece(id) {
        const res = await api.delete('api/pieces/' + id)
        logger.log(res.data)
        const found = AppState.pieces.findIndex(p => p.id == id)
        AppState.pieces.splice(found, 1)
        logger.log(AppState.pieces)
    }

    async getSearchPieces(query = {}) {

        const res = await api.get('api/pieces?query=' + query.query)
        logger.log('getting search by piece', res.data)
        AppState.pieces = res.data
        AppState.searchResults = res.data.results

    }

}



export const piecesService = new PiecesService()