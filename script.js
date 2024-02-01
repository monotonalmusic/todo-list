const output = document.querySelector('.output');

let todoArray = [];

function refreshPage() {
    output.innerHTML = '';
    todoArray.forEach(todo => {
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

window.onload = refreshPage();

let buttonAdd = document.querySelector('#button-add');



let checkedItems = () => {
    let checkBoxes = document.querySelectorAll('.todo-check');
    console.table(checkBoxes)

    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', (e) => {
            let parent = e.target.parentNode;
            parent.parentNode.remove();
        });
    })
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
    console.table(todoArray);

});