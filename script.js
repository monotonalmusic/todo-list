const output = document.querySelector('.output');

let todoArray = [];

function refreshPage() {
    output.innerHTML = '';
    todoArray.forEach((todo, index) => {
        console.log(todo)
        todo.id = index + 1 ;
        output.innerHTML += `
            <div class="todo" id="todo${todo.id}">
                <div class="todo-top">
                    <h3>( ${todo.id} ) ${todo.title}</h3>
                    <input type="checkbox" name="todo" class="todo-check" id="check-${todo.id}"> 
                </div>
                <p>${todo.description}</p>
                <h4>DUE: ${todo.date}</h4>
                
            </div>
        `;
    
    });

};


let buttonAdd = document.querySelector('#button-add');



let checkedItems = () => {
    let checkBoxes = document.querySelectorAll('.todo-check');
    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', (e) => {
            let id = e.target.id.split('-')[1];
            console.log(id);
            todoArray.splice(id - 1, 1);
            let parent = e.target.parentNode;
            parent.parentNode.remove();
        });
    });
}

checkedItems();

buttonAdd.addEventListener('click', () => {
    let arrayLength = todoArray.length;
    console.log(arrayLength)
    let newItem = {};
    newItem.id = arrayLength + 1;
    newItem.title = document.querySelector('#task-add').value;
    document.querySelector('#task-add').value = '';
    newItem.description = document.querySelector('#description-add').value;
    document.querySelector('#description-add').value = '';
    newItem.date = document.querySelector('#duedate-add').value;
    document.querySelector('#duedate-add').value = '';
    newItem.checked = false;
    todoArray.push(newItem);
    refreshPage();
    checkedItems();

});