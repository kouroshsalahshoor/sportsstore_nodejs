document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn").addEventListener("click", sendReq);
});

const requestUrl = "/read";

sendReq = async () => {
<<<<<<< HEAD
    //let payload = [];
    //for (let i = 0; i < 5; i++) {
    //    payload.push({ id: i, message: `Payload Message: ${i}\n` });
    //}
    const response = await fetch(requestUrl, {
        method: "POST", body: JSON.stringify(payload),
        //headers: {
        //    "Content-Type": "application/json"
        //}
    })
    document.getElementById("msg").textContent = response.statusText;
    document.getElementById("body").textContent = `Resp: ${await response.text()}`;
=======
    // let payload = document.getElementById("input").value;
    // for (let i = 0; i < 5; i++) {
    //     payload.push({ id: i, message: `Payload Message: ${i}\n`});
    // }
    const response = await fetch(requestUrl, {
        method: "POST", body: document.getElementById("input").value,
        // headers: {
        //     "Content-Type": "application/json"
        // }
    })
    document.getElementById("msg").textContent = response.statusText;
    document.getElementById("body").innerHTML = await response.text();
>>>>>>> ch7
}