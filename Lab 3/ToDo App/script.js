let toDoList = ['Do laboratory work for Web Development', 'Install the WebStorm', 'Go to the library'];

function fillTheList(){
    let printedList = '';

    for(let i = 0; i < toDoList.length; i++){
        printedList +=
            '<div><input type="checkbox"><p>'
            + toDoList[i] +
            '</p><button onclick="deleteTask('+i+')">DELETE</button></div>'
    }

    document.getElementById('list').innerHTML = printedList;
}


function addNewTask(){
    toDoList.push(document.getElementById('new_task').value);
    document.getElementById('new_task').value = '';
    fillTheList();
}


function deleteTask(i){
    toDoList.splice(i, 1);
    fillTheList();
}

fillTheList();
