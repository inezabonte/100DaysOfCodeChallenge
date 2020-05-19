let message = [];

//I wish to display the message on screen for 2 seconds then remove them.
function addMessage(text){
    const chat = {
        text,
        id: Date.now()
    }

    message.push(chat);
    

    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend', 
        `<p class="message-item" data-key="${chat.id}" id = "hide-me">
            <span>${chat.text}</span>
        </p>`

    );
    
    let token = setTimeout(() => {
        clearTimeout(token);
        Array.from(list.children).forEach((child) => 
       list.removeChild(child))
      },2000);

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