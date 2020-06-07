let result = []
const tables = document.querySelector(".output")

function multiply(num) {
    for (let i = 1; i <= 10; i++) {
        result.push(`${num} &times ${i} = ${num*i}`);
    }

    tables.insertAdjacentHTML('beforeend', `
        <div class="check">
            <span>${result.join('<br>')}</span>
            <hr>
        <div>
    `
    )

    result = []
}


const form  = document.querySelector(".number-form");
form.addEventListener('submit',event =>{
    event.preventDefault();
    const input = document.querySelector(".mulplicant")
    const final = input.value.trim();
    
    const element =  document.querySelector('.check');
    

    function removeAdd() {
        element.parentNode.removeChild(element);
        multiply(final);
    }

    element ? removeAdd() : multiply(final);
    
})
