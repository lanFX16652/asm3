const userConnectSocket = new Set()

export const socketHandler = (socket) => {
    userConnectSocket.add(socket.request.user?._id.toString())

    console.log(userConnectSocket)

    socket.on('room', (data) => {
        if (data.action === 'create') {

        }
    })
}



