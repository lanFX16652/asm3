import roomModel from "../models/roomModel.js"

class ChatController {
    #roomModel;
    constructor(roomModel) {
        this.#roomModel = roomModel
    }

    createRoom = async (req, res, next) => {

        try {
            const newRoom = new roomModel({
                userCreate: req.user._id,
                messages: [{
                    content: req.body.content,
                    userId: req.user._id
                }]
            })

            await newRoom.save()
            global.socket.emit("room-created", {
                newRoom
            });

            return res.status(201).json(newRoom)
        } catch (error) {
            next(error)
        }
    }


    async getListChat(req, res, next) {
        try {
            const chats = await this.#roomModel.find()
            return res.json(chats)
        } catch (error) {
            next(error)
        }
    }
}

export default new ChatController(roomModel)
