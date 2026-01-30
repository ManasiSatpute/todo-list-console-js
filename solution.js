// Todo List Application (Console Based)

let todo = [];
let req = prompt("Please enter your request (add, list, delete, quit)");

while (true) {
    if (req === "quit") {
        console.log("Quitting app");
        break;
    }

    if (req === "list") {
        console.log("----------- TODO LIST -----------");
        if (todo.length === 0) {
            console.log("No tasks available");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(i + ":", todo[i]);
            }
        }
        console.log("--------------------------------");
    } 
    else if (req === "add") {
        let task = prompt("Enter your task:");
        todo.push(task);
        console.log("Task added.");
    } 
    else if (req === "delete") {
        let index = prompt("Enter task index to delete:");
        index = Number(index);

        if (index >= 0 && index < todo.length) {
            let deletedTask = todo.splice(index, 1);
            console.log("Deleted task:", deletedTask[0]);
        } else {
            console.log("Invalid index");
        }
    } 
    else {
        console.log("Invalid request");
    }

    req = prompt("Please enter your request (add, list, delete, quit)");
}
