const router = require("express").Router()
const app = require("express")()
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")
const mediatag = require("jsmediatags")

const exts = {
    musics: ["mp3", "wma"],
    videos: ["mp4", "avi", "mkv"],
    photos: ["jpg", "jpeg", "png"]
}

let newList = {
    musics: [],
    videos: [],
    photos: []
}
// parse various different custom JSON types as JSON
app.use(bodyParser.json({
    type: "application/json",
}))

// parse an HTML body into a string
app.use(bodyParser.text({
    type: "text/html",
}))




const Content = path.join(__dirname, "../", "public", "content/")


// const readfiles = () => {
// 	newList = {
// 		musics: [],
// 		videos: [],
// 		photos: []
// 	}
// 	const readed = (err, items) => {
// 		if (err) return console.log(err)

// 		const list = (v, g, reg) => {
// 			if (reg.test(v)) {
// 				newList[i].push(v)
// 				items.splice(g, 1)
// 			}
// 		}
// 		const newListmake = a => {
// 			const reg = new RegExp(a + '$', "i")
// 			items.forEach((v, g) => list(v, g, reg))
// 		}

// 		for (i in exts) {
// 			exts[i].forEach(newListmake)
// 		}
// 	}
// 	fs.readdir(Content, readed)
// }


// const dirent = new fs.Dirent();

// const reading = (err, data) => {
//     data.forEach((e) => {
//         console.log(typeof(e))
//     })
// }



const filse = fs.readdirSync(Content,{withFileTypes: true})
// filse.forEach(a=>{
//     // console.log(a.isFile())
// })

module.exports = router