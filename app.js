function init() {
    // listen for item form inputs
    var addItemButton = document.getElementById("addItemButton");
    addItemButton.onclick = handleAddItemButton; // ### see if .onsubmit works better here
    var addItemInput = document.getElementById("userInput");
    addItemInput.onkeypress = handleKeypress;
}

document.addEventListener("click", function (event) {
    // If Nuke button is clicked, remove all items <<kaboom>> 
    if (event.target.matches(".nuke-button")) {
        handleNukeBtn();
    }

    // If Done button is clicked, add .task--done to the parent li 
    if (event.target.matches(".task__done-btn")) {
        handleDoneBtn(event);
    }

    // If Delete button is clicked, remove parent li
    if (event.target.matches(".item__delete-btn")) {
        handleDeleteBtn(event);
    }
}, false);

function handleAddItemButton() {
    var newItemToProcess = document.getElementById("userInput").value;
    // get the ul#bucket and add newItemToProcess to a span with accompanying buttons and place it inside a new li element
    document.getElementById("bucket").innerHTML +=
        `<li class="item task">
            <span>${newItemToProcess}</span><button class="item__btn task__done-btn">✔️</button><button class="item__btn item__delete-btn">🗑️</button>
        </li>`;
    // clear the input of user's previous input
    document.getElementById("userInput").value = "";
}

function handleKeypress(e) {
    if (e.keyCode === 13) {
        addItemButton.click();
        return false;
    }
}

function handleNukeBtn() {
    var bucket = document.getElementById("bucket");
    var child = bucket.firstElementChild;
    while (child) {
        bucket.removeChild(child);
        child = bucket.firstElementChild;
    }
}

function handleDoneBtn(event) {
    var liParent = event.target.parentElement;
    liParent.classList.toggle("task--done");
}

function handleDeleteBtn(event) {
    // get the appropriate li and remove it
    var itemToRemove = event.target.parentElement;
    document.getElementById("bucket").removeChild(itemToRemove);
}

window.onload = init;