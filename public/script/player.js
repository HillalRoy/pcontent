const id =Math.round(Math.random()*Math.pow(10,10))
console.log(id)
window.onload = ()=>{
    let connectWith
    const socket = io()
    socket.emit("player", {
        lid: id,
        type: "player"
    })

    $("#idno").innerText = id
    socket.on("connected", (msg)=>{
        connectWith = msg.player
    })
}