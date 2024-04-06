#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [] ;
let conditions = true;
console.log(chalk.green.bold("\n \t Welcome to ToDO-List Application\n"));


let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices:["Add Task", "Delete Task", "update Task","View ToDo-List","Exit"],
            
            }
        ]);
        if(option.choice === "Add Task") {
            await addTask()
        }
        else if(option.choice ===  "Delete Task"){
            await deleteTask()
        }
        else if( option.choice ===  "update Task"){
            await updateTask()
        }
        else if(option.choice ===  "View ToDo-List"){
            await viewTask()

        }
        else if(option.choice === "Exit"){
            conditions = false;
        }

    }
}
// function toadd new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added sucessfully in ToDo-List`);
}

// function to view all ToDo-List Tasks
let viewTask = () => {
    console.log("\nYour ToDo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    })
    console.log("\n");
}
// function to delete a task from the list
let deleteTask = async() => {
    await viewTask()
        let taskIndex = await inquirer.prompt([
            {
                name: "index",
                type: "number",
                message: "Enter the 'index number' of the task you want to delete :"

        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} This task has been deleted successfully from your ToDo-List`)
    

}
// function to update task
let updateTask = async () => {
    await viewTask() 
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index number' of task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Enter new task name :"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index - 1}updated successfully [For updated list check "view ToDo-List"] `)
}
main();
