import roomModel from "../models/roomModel"

class SocketService {
    constructor(roomModel) {
        this.roomModel = roomModel
    }
}

export default new SocketService(roomModel)




