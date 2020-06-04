
function multiply(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}


const form  = document.querySelector(".number-form");
form.addEventListener('submit',event =>{
    event.preventDefault();
    const number = document.querySelector(".mulplicant")
    const final = number.value.trim();

    multiply(final);
    
})