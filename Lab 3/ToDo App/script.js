let toDoList = ['Do laboratory work for Web Development', 'Install the WebStorm', 'Go to the library'];

function fillTheList(){
    let printedList = '';

    for(let i = 0; i < toDoList.length; i++){
        printedList +=
            '<div class="item"><input id="check'+i+'" class="subitem" type="checkbox" onchange="taskDone('+i+')">' +
            '<p class="subitem" id="task'+i+'">' + toDoList[i] + '</p>' +
            '<button class="subitem delete_button" onclick="deleteTask('+i+')">DELETE</button></div>'
    }

    document.getElementById('list').innerHTML = printedList;
}


function addNewTask(){
    const task = document.getElementById('new_task').value
    if(task && task !== '') {
        toDoList.push(document.getElementById('new_task').value);
        document.getElementById('new_task').value = '';
        fillTheList();
    }else{
        alert('Error! ')
    }
}


function deleteTask(i){
    toDoList.splice(i, 1);
    fillTheList();
}

function taskDone(i){
    // console.log(document.getElementById(`check${i}`) )
    if( document.getElementById(`check${i}`).checked )
        document.getElementById(`task${i}`).innerHTML = `<s>${toDoList[i]}</s>`;
    else
        document.getElementById(`task${i}`).innerHTML = `<span>${toDoList[i]}</span>`;
}

fillTheList();
