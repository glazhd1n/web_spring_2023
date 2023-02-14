let toDoList = [];
window.addEventListener('load', function () {
    const arrayToRender = localStorage.getItem('todos');
    toDoList = JSON.parse(arrayToRender);
    for(const i of toDoList) {
        createTask(i);
    }
});
const addTask = () => {
    const form = document.getElementById("NewTask");
    if(form.value.length !== 0) {
        createTask(form.value);
        toDoList.push(form.value);
        localStorage.setItem("todos", JSON.stringify(toDoList));
        form.value = "";
    }
};

const createTask = (form) => {
    const hed          = document.getElementById("tasks");
    const newElement   = document.createElement("div");
    const deleteButton = createDeleteButton();
    const checkBox     = createCheckBox();
    const text         = document.createElement("p");

    text.innerHTML     = form;
    deleteButton.classList.add("deleteButton");
    newElement.classList.add("task1");
    hed.appendChild(newElement);
    newElement.appendChild(deleteButton);
    newElement.appendChild(text);
    newElement.appendChild(checkBox);
};

const removeElement = (toRemove) => {
    console.log(toRemove);
    const i = toDoList.indexOf(toRemove);
    console.log(i);
    toDoList.splice(i);
    localStorage.setItem("todos", JSON.stringify(toDoList));
};

const createCheckBox = () => {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", function () {
        if (checkBox.checked === true) {
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
        const parEl = deleteButton.parentElement.children[1];
        removeElement(parEl.innerText);
        deleteButton.parentElement.remove();
    })

    return deleteButton;
};

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