function TodosComponent(todos , index , newTodo) {
    this.newTodo = newTodo;
    this.btnTodo = document.getElementById("btnNewTodos");
    var container = document.getElementById('todo');
    var todosContainer = document.getElementById('todos');

    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('card-todos');
    

    this.todoTitle = document.createElement('p');
    this.todoTitle.classList.add('todo-title');
    this.todoTitle.innerHTML = todos.title;

    this.todoComplision = document.createElement('p');

    if(todos.completed === false){
        this.todoComplision.classList.add('todo-complision'); 
        this.todoComplision.classList.add('false');
        this.todoComplision.innerHTML = "Unfinished";
    }else{
        this.todoComplision.classList.add('todo-complision'); 
        this.todoComplision.innerHTML = "Finshed";
    }
    



    container.appendChild(todosContainer);
    todosContainer.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.todoTitle);
    this.cardDiv.appendChild(this.todoComplision);

    this.btnTodo.addEventListener("click", this.showNewTodo.bind(this));

    
    
}

TodosComponent.prototype.showNewTodo = function () {
    
    this.newTodo.show();
}
