import todoArray from "/todo.json" assert { type: "json" };

const app = {};

app.init = () => {
    const output = document.querySelector('.output');
    function updateIndex() {
        console.table(todoArray);
            output.innerHTML = '';
            todoArray.forEach((todo, index) => {
                //ID gets out sync with the index, because topheader # is not being updated
                todo.id = index + 1;
                output.innerHTML += `
                <div class="todo" id="todo${todo.id}">
                    <div class="todo-top">
                        <h3 id="top-header-${todo.id}">( Task ${todo.id} ) ${todo.title}</h3>
                        <input type="checkbox" name="todo" class="todo-check" id="check-${todo.id}"> 
                    </div>
                    <p>${todo.description}</p>
                    <h4>DUE: ${todo.date}</h4>
                    
                </div>
                `;
                checkedItems();
            });
    };
    let buttonAdd = document.querySelector('#button-add');
    function checkedItems () {
        let checkBoxes = document.querySelectorAll('.todo-check');
        checkBoxes.forEach(checkBox => {
            console.log("EVENT FIRED!!!")
            checkBox.addEventListener('click', (e) => {
                let id = e.target.id.split('-')[1];
                todoArray.splice(id - 1, 1);
                let parent = e.target.parentNode;
                parent.parentNode.remove();
                console.table(todoArray)
                updateIndex();
            });
        });
    };
    buttonAdd.addEventListener('click', () => {
        if (document.querySelector('#task-add').value == '' || document.querySelector('#description-add').value == '' || document.querySelector('#duedate-add').value == '') {
            alert('Please fill out all fields');
            return;
        };
        let arrayLength = todoArray.length;
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
        updateIndex();
    });
};
app.init();