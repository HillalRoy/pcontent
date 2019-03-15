const id = Math.round(Math.random() * Math.pow(10, 10))
let sendData
class MadiaControl {
    constructor(socket, connectWith) {
        this.socket = socket
        this.connectWith = connectWith
    }
    send(channel, msg) {
        msg.to = this.connectWith
        this.socket.emit(channel, msg)
    }
}

const madia = msg => {
    if (msg.video) {
        if (msg.src) {
            $("#vidoc").src = msg.src
            $("#vidoc").play()
        }
        $("#vidoc").requestFullscreen()
        $("#vidoc").controls = false
    } else if (msg.audio) {



    } else if (msg.err) {



    }
}







const controlMedia = (socket) => {
    socket.on("change", msg => {
        madia(msg)
        sendData.send("ok", {
            status: "ok"
        })
    })
    socket.on("nochange", msg => {
        sendData.send("ok", {
            status: "ok"
        })
    })
}

window.onload = () => {
    const socket = io()
    socket.emit("player", {
        lid: id,
        type: "player"
    })

    $("#idno").innerText = id
    socket.on("connected", (msg) => {
        sendData = new MadiaControl(socket, msg.cont)
        controlMedia(socket)
    })
}