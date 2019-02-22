let i = 0
const songCTime = (ct) => {
    const cm = Math.floor(ct / 60)
    const cs = Math.floor(ct % 60)
    return `${cm < 10 ? "0"+cm : cm }:${cs< 10 ? "0"+cs : cs}`
}
const getPersent = () => {
    return ($("#timer").value / song.duration) * 100
}
const animate = () => {
    if (song) {
        $(".currenttime").innerText = songCTime(song.currentTime)
        $(".endtime").innerText = songCTime(song.duration)
        $("#timer").max = song.duration
        $("#timer").style.setProperty("--parsentis", getPersent() + "%")
        $("#timer").value = song.currentTime
        if (!!song.ended) {
            i++
            songChange()
        }
    }
}
let animateL
const songTime = () => {
    clearInterval(animateL)
    $("#timer").style.setProperty("--parsentis", getPersent() + "%")
    song.currentTime = $("#timer").value
    animateL = setInterval(animate, 1000 / 5)
}

const palySong = () => {
    if (song) {
        if (!song.paused) {
            $(".play").src = "/img/play.jpg"
            song.pause()
        } else {
            song.src = "/content/" + songs[i % songs.length]
            getmusicdata(songs[i % songs.length])
            $(".play").src = "/img/pause.jpg"
            song.play()
        }
    }
}

const songChange = () => {
    if (song) {
        song.src = "/content/" + songs[i % songs.length]
        imgLoad(songs[i % songs.length])
        getmusicdata(songs[i % songs.length])
        $(".play").src = "/img/pause.jpg"
        song.play()
    }
}

$(".next").onclick = () => {
    i++
    songChange()
}
$(".pvr").onclick = () => {
    i--
    songChange()
}
$(".play").onclick = palySong

const imgLoad = async (link) => {
    const data = await fetch("/api/img/" + link).then(dat => dat.json())
    const b64encoded = btoa(String.fromCharCode.apply(null, await data.data))
    $("#cover").src = 'data:image/jpeg;base64,' + await b64encoded
}

const getmusicdata = async (song) => {

    const data = await fetch("/api/mdata/" + song).then(dat => dat.json())
    if (data.info.errno) return
    const name = async () => {
        if (await data.title.length > 20)
            return data.title.substring(0, 20) + "..."
        return data.title
    }
    $(".songname").innerText = await name()

}

let song = new Audio(),
    songs
const music = (list) => {
    if (list.length === 0) {
        $(".songname").innerText = "No song ableble"
        song = undefined
        clearInterval(animateL)
        return
    }
    songs = list
    const img = $("#cover")
    imgLoad(list[0], img)
    getmusicdata(list[2])
    animateL = setInterval(animate, 1000 / 5)

}

listdiv = $(".file")
fetch("/api/getfiles")
    .then(data => data.json())
    .then(data => music(data.musics))

const id = Math.round(Math.random() * Math.pow(10, 10))
window.onload = () => {
    const socket = io()
    socket.emit("control", {
        lid: id,
        type: "controlar"
    })
    $("input[type='range']").onchange = songTime
    animate()


    const connectPlayer = () => {
        if ($("#idno").value.length === 10) {
            socket.emit("connectplayer", {
                lid: id,
                playerid: Number($("#idno").value)
            })
        }else{
            // Error Handelar
            console.log("err")
        }
    }
    $("#idno").onchange = connectPlayer
}