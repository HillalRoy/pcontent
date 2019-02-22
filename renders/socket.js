let users = {}

const connection = user => {
    user.on('control', msg => {
        users[user.id] = msg
    })

    user.on('player', msg => {
        users[user.id] = msg
    })
    user.on('connectplayer', msg => {
        for (i in users) {
            if (users[i].type === "player" && msg.playerid === users[i].lid) {

                
 
            }
        }
    })

    user.on('disconnect', () => {
        delete users[user.id]
    })
}


const sockeIo = (server) => {
    const socket = require("socket.io")
    const io = socket(server)
    io.on("connection", connection)
}
module.exports = sockeIo