let current = '';
window.onload = () => {
    dataFetch('')
}
// setTimeout(()=>{
//     window.location.reload();

// },3000)
const dataFetch = (link) => {
    let json = { path: `${current}${link}` }
    const fetchData = async () => {
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json)
        }
        const data = await fetch(`/file/allfiles`, option)
        const jsonData = await data.json()
        // console.log(jsonData);
        return jsonData;
    }

    fetchData().then(json => {
        current += `${link}/`;
        $('#files').innerHTML = ``;
        let t = 0;
        for (files in json) {
            json[files].forEach(a => {
                addFile(files, a, t);
                t += 50;
            })
        }
        // setTimeout(() => {
        mapitems();
        // }, t)
    })
}


function addFile(type, name, t) {
    const files = $('#files');

    const fragment = document.createDocumentFragment();

    const a = document.createElement('a');
    a.href = "#";
    a.setAttribute('onclick', `openLink('${name}', '${type}')`);
    a.classList.add(type);
    a.innerHTML = `
                    <div class="icon"></div>
                    <div class="name">${name.length > 10 ? name.substring(0, 8) + '..' : name}</div>    
                `
    fragment.appendChild(a);
    // setTimeout(() => {
    files.appendChild(fragment);
    // }, t)
}

const openLink = (name, type) => {
    if (type == 'folder')
        dataFetch(`${name}`);

    else if (type == 'musics')
        playSong(`${name}`);

    else if (type == 'videos')
        playVideo(`${name}`);

    else if (type == 'photos')
        openImage(`${name}`);

    else if (type == 'other')
        alert(`File not soport`);
}

const closeImg = () => {
    const imgView = $('.imgview');
    const load = $('.imgview .load');
    imgView.style.display = `none`;
    imgView.removeChild($('.imgview img'));
    load.style.display = `block`;
    imgView.style.height = '60vh';

}
const openImage = (name) => {
    const imgView = $('.imgview');
    const load = $('.imgview .load');
    const close = $('.imgview .closebtn');

    imgView.style.display = `block`;
    load.style.display = `block`;

    this.blur();
    close.focus();


    const newImage = new Image();
    let path = current + name;
    path = path.replace(/\//g, '&');
    newImage.src = `/file/getimage/${path}`;
    newImage.onload = () => {
        load.style.display = `none`;
        imgView.appendChild(newImage);
        imgView.style.height = 'auto';
        let i = 0;
        while (imgView.getBoundingClientRect().top < 30) {
            imgView.style.width = `calc(80vw - ${i++}px)`;
            if (i === 1000)
                break;
        }
    }
}

let maping = {
    eliments: [],
    colloms: [],
    correntPos: {
        x: 0,
        y: 0
    }
}
const mapitems = () => {
    const a = document.querySelectorAll('a');
    maping.eliments = a;
    let arry = [];
    a.forEach(items => {
        const rect = items.getBoundingClientRect();
        const width = rect.width;
        const top = rect.top;
        if (width != 0) {
            arry.push(top);
        }
    });
    const coundDublicates = (arry) => {
        let newArry = [], o = 0, value, found = 1;

        arry.forEach((v, i, a) => {
            newArry[o] = found;
            if (v === value) {
                newArry[o] = ++found;
            } else if (i != 0 && v != value) {
                found = 1;
                o++;
            }
            value = v;
        })
        return newArry;
    }
    maping.colloms = coundDublicates(arry);
    console.log(maping.eliments[0])
    maping.eliments[0].focus();
}

const keydown = (e) => {
    if (e.keyCode === 13) {
        // Ok
        // e.preventDefault()

    } else if (e.keyCode === 37) {
        // Left
        e.preventDefault();
        if (maping.correntPos.x !== 0) {
            maping.correntPos.x -= 1;
            maping.eliments[maping.correntPos.x].focus();
        }

    } else if (e.keyCode === 40) {
        // Down
        e.preventDefault()

        if (maping.correntPos.x !== maping.eliments.length - 1) {
            maping.colloms[maping.correntPos.y]
            maping.correntPos.x += maping.colloms[maping.correntPos.y];
            maping.eliments[maping.correntPos.x].focus();
        }


    } else if (e.keyCode === 39) {
        // Right
        e.preventDefault()
        if (maping.correntPos.x !== maping.eliments.length - 1) {
            maping.correntPos.x += 1;
            maping.eliments[maping.correntPos.x].focus();
        }

    } else if (e.keyCode === 38) {
        // Up
        e.preventDefault()

        if (maping.correntPos.x !== 0) {
            maping.correntPos.x -= maping.colloms[maping.correntPos.y];
            maping.eliments[maping.correntPos.x].focus();
        }
    }
}

addEventListener("keydown", keydown)
