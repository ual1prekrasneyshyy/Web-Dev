let toDoList = ['Do '];

function fillTheList(){
    let printedList = '';

    for(let task in toDoList){
        printedList += '<div><input type="checkbox"><p>task</p><button>DELETE</button></div>'
    }

    document.getElementById('list').innerHTML = printedList;
}

fillTheList();
