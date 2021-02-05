function init() {
    // listen for item form inputs
    var addItemButton = document.getElementById("addItemButton");
    addItemButton.onclick = handleAddItemButton; // ### see if .onsubmit works better here
    var addItemInput = document.getElementById("userInput");
    addItemInput.onkeypress = handleKeypress;

    // listen for individual task button inputs for "Done" buttons
    addDoneBtnListeners();

    // listen for individual task button inputs for "Delete" buttons
    document.querySelectorAll(".task__delete-btn").forEach(
        function (item) {
            item.addEventListener("click", handleDelete, false);
        }
    );
}

function addDoneBtnListeners() {
    document.querySelectorAll(".task__done-btn").forEach(
        function (item) {
            item.addEventListener("click", handleMarkedDone, false);
        }
    );
}

function handleAddItemButton() {
    var newItemToProcess = document.getElementById("userInput").value;
    // get the ul#bucket and add newItemToProcess to a span with accompanying buttons and place it inside a new li element
    document.getElementById("bucket").innerHTML +=
        `<li class="item task">
            <span>${newItemToProcess}</span><button class="item__btn task__done-btn">✔️</button><button class="item__btn task__delete-btn">🗑️</button>
        </li>`;
    addDoneBtnListeners(); // ### why not make this add only 1 listener so it will be more efficient?
}

function handleKeypress(e) {
    if (e.keyCode === 13) {
        addItemButton.click();
        return false;
    }
}

function handleMarkedDone() {
    // get the appropriate li and change its class to .task--done
    var liParent = this.parentElement;
    liParent.classList.toggle("task--done");
}

function handleDelete() {
    // get the appropriate li and delete it from the DOM
    var liToDelete = this.parentElement;
    document.getElementById("bucket").removeChild(liToDelete);
}
window.onload = init;