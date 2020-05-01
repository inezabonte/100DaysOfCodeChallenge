function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let time = hours + ':' + min + ':' + sec;

    console.log(time);
}

setInterval(printTime, 1000);
