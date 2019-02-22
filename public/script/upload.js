const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "./css/upload.css";
document.head.appendChild(css);
let file, mainData;
window.onload = () => {
    const submit = $("#submit-file");
    file = $("#file");
    file.onchange = filein;
    submit.onclick = upload;



}
const filein = () => {
    if (file.files.length) {
        let l = file.files[0];
        let data = new FormData()
        data.append("file", l);
        data.append("user", "hillal");
        mainData = data;
    }

}
const upload = async () => {
    const url = "/api/upload";
    const response = await fetch(url, {
        method: "POST",
        // headers: {
        //     "Content-Type": "multipart/form-data; boundary = --iamthehero"
        // },
        body: mainData
    });
    // const total = Number(response.headers.get('content-length'));

    // const reader = response.body.getReader();
    // const result = await reader.read();
    // let bytesReceived = 0;
    // while (true) {
    //     if (result.done) {
    //         console.log('Fetch complete');
    //         break;
    //     }
    //     bytesReceived += result.value.length;
    //     console.log('Received', bytesReceived, total);
    // }
    const res = await response.json();
    await console.log(res);

}