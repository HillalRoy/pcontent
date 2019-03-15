const socket = require("socket.io")
let io
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
                io.to(user.id).to(i).emit("connected", {cont : user.id, player: i})
            }
        }
    })

    user.on("change", msg=>{
        io.to(msg.to).emit("change", msg)
    })
    user.on("ok", msg=>{
        io.to(msg.to).emit("ok", msg)
    })
    user.on("nochange", msg=>{
        io.to(msg.to).emit("nochange", msg)
    })

    user.on('disconnect', () => {
        delete users[user.id]
    })
}


const sockeIo = server => {
    io = socket(server)
    io.on("connection", connection)
}
module.exports = sockeIo