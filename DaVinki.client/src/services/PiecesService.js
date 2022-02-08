import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


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

    async createPiece() {
        const res = await api.post('api/pieces', body)
        logger.log(res.data)
        AppState.pieces.unshift(res.body)
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

}



export const piecesService = new PiecesService()