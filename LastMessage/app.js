let message = [];
function addMessage(text){
    const chat = {
        text,
        id: Date.now()
    }

    message.push(chat);
    
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend', 
        `<li class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </li>`
    );



}


const form = document.querySelector('.message-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.typedMessage');

    const text = input.value.trim();

    if(text !== ''){
        addMessage(text);
        input.value = '';
        input.focus();
    }
});