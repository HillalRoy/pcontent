const router = require("express").Router()
const fs = require("fs");
const os = require('os');

let platform = 'pc';
if(os.platform() === "win32")
    platform = 'pc';
else if(os.platform() === "android")
    platform = 'mobail';

const exts = {
    musics: ["mp3", "wma"],
    videos: ["mp4", "avi", "mkv"],
    photos: ["jpg", "jpeg", "png"]
}

let prePath = os.homedir();
if(platform === 'pc')
    prePath = 'd:/'
else if(platform === 'mobail')
    prePath = '/storage/emulated/0/';
const readFile = async (req, res)=>{
    let newList = {
        folder: [],
        musics: [],
        videos: [],
        photos: [],
        other: []
    }
    let files;
    try{
        files = fs.readdirSync(`${prePath}${req.body.path}`,{withFileTypes: true})
    }catch(err){
        return res.json({type: `file not found`});
    }
    const list = (obj, g, reg) => {
        let v = obj.name;
        if (reg.test(v)) {
            newList[i].push(v)
            files.splice(g, 1)
        }
    }
    const newListmake = a => {
        const reg = new RegExp('\.'+a + '$', "i")
        files.forEach((v, g) => list(v, g, reg))
    }
    
    files.forEach((a,i)=>{
        if(a.isDirectory()){
            newList.folder.push(a.name);
            files.splice(i, 1);
        }
    })
    for (i in exts) {
        exts[i].forEach(newListmake)
    }
    files.forEach((a,i)=>{
        newList.other.push(a.name);
        files.splice(i, 1);
    })
    res.json(newList);
}
const getImage = async (req, res)=>{
    let path = req.params.imgname;
    path = path.replace(/\&/g,'/');
    return res.sendFile(`${prePath}${path}`); 
}


router.post('/allfiles',readFile)
router.get('/getimage/:imgname',getImage)

module.exports = router