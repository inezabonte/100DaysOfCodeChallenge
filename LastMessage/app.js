//Create an array where the message along with it's ID will be stored.
let message = [];

// This fuction will enables us to add the message to the DOM
function addMessage(text){
    //Object where message will be stored
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
    
    // This will help us to delete the message from the screen after it appeared for 2 seconds
    let token = setTimeout(() => {
        Array.from(list.children).forEach((child) => 
       list.removeChild(child))
       clearTimeout(token);
      },2000);

}



//Create event listener to detect when a message has been submitted
const form = document.querySelector('.message-form');
form.addEventListener('submit', event => {
    event.preventDefault();

    //input to save the message itself
    const input = document.querySelector('.typedMessage');

    //This helps us to detect empty messages and ignore them
    const text = input.value.trim();

    if(text !== ''){
        addMessage(text);
        input.value = '';
        input.focus();
        
    }
});