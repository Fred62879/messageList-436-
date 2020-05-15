let messages = JSON.stringify({ messages: [ "Hi there!", "Hi"] });

ini();

let form = document.getElementById("messform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// create list element
function create(mess) {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(mess);
    node.appendChild(textnode);
    node.id = "message";
    node.style.cssText = "font-size: 1em; display: none; float: left; margin: 0 0";
    
    return node;
}

// add pre stored messages
function ini() {
    let messlist = document.getElementById("messages");
    JSON.parse(messages).messages.forEach((message) => {
	messlist.appendChild(create(message));
	messlist.appendChild(document.createElement("BR"));
    });
}

// add new message
function add() {
    let newmess = document.getElementById("newmess").value;
    let messlist = document.getElementById("messages");
    let node = create(newmess);
    node.style.display = "block";
    messlist.appendChild(node);
    messlist.appendChild(document.createElement("BR"));
}

// clear message form
function empty() {
    document.getElementById("messform").reset();
}

function display() {
    let messages = document.querySelectorAll("#message");
    messages.forEach(message => {
	message.style.display = "block";
    });
}

function remove() {
    // let messarea = document.getElementById("messages");
    // messarea.style.display = "none";
    document.getElementById("messages").innerHTML = "";
}
