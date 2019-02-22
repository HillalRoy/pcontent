const express = require("express")
const hbs = require("express-handlebars")
const upload = require("express-fileupload")
const http = require("http")
const path = require("path")

const app = express()
const server = http.Server(app)
const port = process.env.PORT || 80;
/**
 *  soket.io
 * */
require(path.join(__dirname,"renders/socket"))(server)

app.use(upload())

const render = require(path.join(__dirname, "renders/index"))
const api = require(path.join(__dirname, "renders/api"))

app.use(express.static(path.join(__dirname, "public")))

app.engine("hbs", hbs({
    defaultLayout: "main",
    extname: "hbs"
}))
app.set("view engine", "hbs")

app.use("/", render)
app.use("/api", api)

server.listen(port, ()=>console.log("server runing..."))
