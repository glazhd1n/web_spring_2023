const toDoList = [];

const addTask = () => {
    const form = document.getElementById("NewTask");
    console.log(form.value)
    toDoList.push(form.value)
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

const changeHower = () => {
    const form = document.getElementById("NewTask");
    form.value = "";
    form.style.color = "black";

}
addTask("Go grocery shopping");
addTask("Pay bills");
addTask("Exercise");

showList();

completeTask("Pay bills");

showList();