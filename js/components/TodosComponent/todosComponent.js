function TodosComponent(todos , index) {
   
    var container = document.getElementById('todo');

    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('card-todos');
    

    this.todoTitle = document.createElement('p');
    this.todoTitle.classList.add('todo-title');
    this.todoTitle.innerHTML = todos.title;

    this.todoComplision = document.createElement('p');

    if(todos.completed == false){
        this.todoComplision.classList.add('todo-complision'); 
        this.todoComplision.classList.add('false');
    }else{
        this.todoComplision.classList.add('todo-complision'); 
    }
    this.todoComplision.innerHTML = todos.completed;



    this.btnTodo = document.createElement('a');
    this.btnTodo.classList.add('button4','buttonTodo');
    this.btnTodo.innerHTML = "New Todos";

    if(index == 0){
        container.appendChild(this.btnTodo);
    }


    container.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.todoTitle);
    this.cardDiv.appendChild(this.todoComplision);


    
    
}