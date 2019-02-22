const id =Math.round(Math.random()*Math.pow(10,10))
console.log(id)
window.onload = ()=>{
    const socket = io()
    socket.emit("player", {
        lid: id,
        type: "player"
    })

    $("#idno").innerText = id
}