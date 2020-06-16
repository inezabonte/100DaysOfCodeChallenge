function randomColor(){
    const red = Math.floor(Math.random()*256).toString()
    const green = Math.floor(Math.random()*256).toString()
    const blue = Math.floor(Math.random()*256).toString()
    return `rgb(${red}, ${green}, ${blue})`;
}



let but = document.querySelector(".submit")
but.addEventListener('click', event => {
    event.preventDefault()
    const color = randomColor();
    document.querySelector('.final').innerHTML = `Your color is: ${color}`
    document.querySelector('.colour').style.backgroundColor = color
} )