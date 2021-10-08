const inputTask = document.querySelector("#input-task");
const list = document.querySelector("#task-list");
const addTask = document.querySelector("#add-task-button");

//document.addEventListener('DomContentLoaded', getSavedTasks)
    addTask.addEventListener("click", addTaskHandler);

let dataList = [];

    function addTaskHandler(){
        let id = new Date().getTime() % 10e+5;

        //creating li tag
        let taskList = document.createElement("li");
        taskList.setAttribute("data-key", id);
        list.appendChild(taskList);

        //creating checkbox
        let inputBox = document.createElement("input");
        inputBox.setAttribute("type", "checkbox");
        taskList.appendChild(inputBox);

        //creating span to keep task name
        let  taskName = document.createElement("span");
        taskName.innerHTML = inputTask.value;
        taskName.className += "task";
        taskList.appendChild(taskName);
        inputTask.value="";

        //creating an object to push it to array dataList
        let newTask = {
            id,
            text: taskName.innerHTML,
        }
        //pushing the object to dataList
        dataList.push(newTask);
        console.log(dataList);

        //storing dataList in local storage under the key: "tasks"; by converting it into string using stringify
        localStorage.setItem("tasks", JSON.stringify(dataList));

        //creating delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x";
        deleteButton.className += "delete-btn";
        deleteButton.setAttribute("data-key", id + "");
        taskList.appendChild(deleteButton);

        //adding what will happen when delete button will be clicked
        deleteButton.addEventListener('click', function(e) {
            taskList.parentNode.removeChild(taskList);                 //this removes task from the webpage and not local storage

            let getItem = localStorage.getItem("tasks");          //all items stored under the key: "tasks" in local storage will be assigned to getItem
            let allItems = JSON.parse(getItem);                       //It retrieves the items from getItems by converting it back to its original dataType from string
            let delete_me = this.getAttribute("data-key"); //assigning items with "data-key" attribute to delete_me
            console.log(delete_me);

            let updatedArray = [];      //this array will store the tasks that are not deleted

            //making a loop that checks the id's of all items of allItems array, if it is equal to delete_me
            for(let i = 0; i < allItems.length; i++){
                if (allItems[i].id != delete_me){
                    updatedArray.push(allItems[i]);   //if the id is not equal to delete_me id then push it to updatedArray where tasks not to be deleted are stored
                }
            }

            //Now store the updated array (by converting it to string using stringify) under the key: "tasks"
            localStorage.setItem("tasks", JSON.stringify(updatedArray));

        });

        //Adding the functionality to checkbox
        inputBox.addEventListener("click", function (){
            taskName.classList.toggle("done");
            if(taskName.classList.contains("done")){
                localStorage.setItem("checked tab",JSON.stringify(inputBox.checked));
                console.log("it's checked");
            }
        })

    }


function getTasks(){
        let str = localStorage.getItem("tasks");
        dataList = JSON.parse(str);
        if (!dataList){
            dataList = [];
        }

        return dataList;
}

function renderDom(){
        let data = getTasks();
        data.forEach(createTask);

}
renderDom();

function createTask(task){
     //creating li tag
    let taskList = document.createElement("li");
    taskList.setAttribute("data-key", task.id);
    list.appendChild(taskList);

    //creating checkbox
    let inputBox = document.createElement("input");
    inputBox.setAttribute("type", "checkbox");
    taskList.appendChild(inputBox);

    //creating span to keep task name
    let  taskName = document.createElement("span");
    taskName.innerHTML = task.text; //gets the text from task
    taskName.className += "task";
    taskList.appendChild(taskName);

    //creating delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.className += "delete-btn";
    deleteButton.setAttribute("data-key", task.id + "");
    taskList.appendChild(deleteButton);

    //adding what will happen when delete button will be clicked
    deleteButton.addEventListener('click', function(e) {
        taskList.parentNode.removeChild(taskList);
        let getItem = localStorage.getItem("tasks");
        let allItems = JSON.parse(getItem);
        let delete_me = this.getAttribute("data-key");
        console.log(delete_me);

        let updatedArray = [];      //this array will store the tasks that are not deleted

        //making a loop that checks the id's of all items of allItems array, if it is equal to delete_me
        for(let i = 0; i < allItems.length; i++){
            if (allItems[i].id != delete_me){
                updatedArray.push(allItems[i]);   //if the id is not equal to delete_me id then push it to updatedArray where tasks not to be deleted are stored
            }
        }

        //Now store the updated array (by converting it to string using stringify) under the key: "tasks"
        localStorage.setItem("tasks", JSON.stringify(updatedArray));

    });

    //Adding the functionality to checkbox
    inputBox.addEventListener("click", function (){
        taskName.classList.toggle("done");
    })


}




























