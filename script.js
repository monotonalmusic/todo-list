const output = document.querySelector('.output');

let todoArray = [];

function refreshPage() {
    output.innerHTML = '';
    todoArray.forEach((todo, index) => {
        console.log(`todo: ${todo.id}`);
        console.log(`index: ${index}`);
        todo.id = index + 1;
        checkedItems();
        console.log(`todo after: ${todo.id}`);
        output.innerHTML += `
            <div class="todo" id="todo${todo.id}">
                <div class="todo-top">
                    <h3 id="top-header-${todo.id}">( ${todo.id} ) ${todo.title}</h3>
                    <input type="checkbox" name="todo" class="todo-check" id="check-${todo.id}"> 
                </div>
                <p>${todo.description}</p>
                <h4>DUE: ${todo.date}</h4>
                
            </div>
        `;
    
    });

};

function updateIndex() {
    todoArray.forEach((todo, index) => {
        let topHeader = document.getElementById(`top-header-${todo.id}`);
        todo.id = index + 1;
        console.log(todo.id);
        console.log(todo.title)
        topHeader.innerText = `( ${todo.id} ) ${todo.title}`;
        
    });

}

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
            updateIndex();

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