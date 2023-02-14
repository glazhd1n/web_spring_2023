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
    const checkBox = createCheckBox();
    console.log(checkBox.value);
    deleteButton.classList.add("deleteButton");
    newElement.innerHTML = form.value;
    newElement.classList.add("task1");
    hed.appendChild(newElement);
    newElement.appendChild(deleteButton);
    newElement.appendChild(checkBox);
};

const changeStyle = (checkBox) => {

};

const createCheckBox = () => {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", function () {
        if (checkBox.checked == true) {
            checkBox.parentElement.style.textDecoration = "line-through"
            checkBox.parentElement.style.color = "gray";
        } else {
            checkBox.parentElement.style.textDecoration = "none";
            checkBox.parentElement.style.color = "black";
        }
    });
    return checkBox;
};


const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    const deleteImage = document.createElement("img");
    deleteImage.src = "assets/trash.png";
    deleteButton.appendChild(deleteImage);
    deleteButton.style.appearance = "none";
    deleteButton.classList.add("trash-button");
    deleteImage.classList.add("trash");

    deleteButton.addEventListener("click", function () {
        deleteButton.parentElement.remove();
    })

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