const router = require("express").Router()

// Home page
router.get("/", (req, res) => res.render("home", {title: "Home"}))

// Upload
router.get("/upload", (req, res) => res.render("upload", {title: "Upload"}))

// Video content
router.get("/show", (req, res) => res.render("show", {title: "Show"}))

// About page
router.get("/about", (req, res) => res.render("about", {title: "About"}))

//Video
router.get("/video", (req, res) => res.render("video", {title: "Video"}))

// All content
router.get("/music", (req, res) => res.render("music", {title: "Music"}))


router.get("/player", (req, res) => res.render("player", {title: "Payer"}))
router.get("/control", (req, res) => res.render("control", {title: "Control"}))

module.exports = router
