const toDoList = [];

const addTask = () => {
    const form = document.getElementById("NewTask");
    if(form.value.length != 0) {
        createTask(form);
    }
};

const createTask = (form) => {
    const hed = document.getElementById("tasks");
    const newElement = document.createElement("div");
    const deleteButton = createDeleteButton();
    newElement.appendChild(deleteButton);
    deleteButton.classList.add("deleteButton");
    newElement.innerHTML = form.value;
    newElement.classList.add("task1");
    hed.appendChild(newElement);
    newElement.appendChild(deleteButton)
}

const createCheckBox = () => {
    const check = document.createElement("");
}


const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    const deleteImage = document.createElement("img");
    deleteImage.src = "assets/trash.png";
    deleteButton.appendChild(deleteImage);
    deleteButton.style.appearance = "none";
    deleteButton.classList.add("trash-button");
    deleteImage.classList.add("trash");
    return deleteButton;
}

const completeTask = () => {
    const task = 13;
    const index = toDoList.indexOf(task);
    if (index !== -1) {
        toDoList.splice(index, 1);
        console.log(`"${task}" completed.`);
    } else {
        console.log(`"${task}" not found in the to-do list.`);
    }
};

const showList = () => {
    console.log("To-Do List:");
    toDoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};