const express = require("express");
const hbs = require("express-handlebars");
const upload = require("express-fileupload");
const http = require("http");
const path = require("path");


const app = express();
const server = new http.Server(app);
const port = process.env.PORT || 80;


require(path.join(__dirname, "renders/socket"))(server)


app.use(upload())

const files = require(path.join(__dirname, "renders/files"))
const render = require(path.join(__dirname, "renders/index"))
const api = require(path.join(__dirname, "renders/api"))

app.use(express.static(path.join(__dirname, "public")))

app.engine("hbs", hbs({
    defaultLayout: "main",
    extname: "hbs"
}))
app.set("view engine", "hbs")

app.use(files)
app.use("/", render)
app.use("/api", api)

server.listen(port, () => console.log("server runing..."))