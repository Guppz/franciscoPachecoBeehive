function NewTodoComponent(appManager) {
    this.appManager = appManager;
    var container = document.getElementById('todo');
    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('new','scale-up-center');

    this.header = document.createElement('header');
    this.header.classList.add('new-header');

    this.headerTitle = document.createElement('H1');
    this.headerTitle.classList.add('new-header-title');
    this.headerTitle.innerHTML = "New Todo";



    this.newPostdiv = document.createElement('div');
    this.newPostdiv.classList.add('newPost');



    this.titleLabel = document.createElement('label');
    this.titleLabel.classList.add('label');
    this.titleLabel.innerHTML = "Todo Name";

    this.newTitle = document.createElement('input');
    this.newTitle.type = "text";
    this.newTitle.classList.add('newTitle');



    this.bodyLabel = document.createElement('label');
    this.bodyLabel.classList.add('label');
    this.bodyLabel.innerHTML = "Finished/Unfinished Task";



    this.btnFinshed = document.createElement('a');
    this.btnFinshed.classList.add('button4','finshed');
    this.btnFinshed.innerHTML = "Finished";
    this.btnFinshed.id = 'finished';


    this.btnUnFinshed = document.createElement('a');
    this.btnUnFinshed.classList.add('button4','finshed');
    this.btnUnFinshed.innerHTML = "Unfinished";
    this.btnUnFinshed.id = 'unfinished';


    this.btnFinshed.addEventListener("click", this.addStatusFinshed.bind(this));
    this.btnUnFinshed.addEventListener("click", this.addStatusUn.bind(this));
    




    this.btnAccept = document.createElement('a');
    this.btnAccept.classList.add('button4','buttonAccept');
    this.btnAccept.innerHTML = "Accept";
    this.btnAccept.addEventListener("click", this.newPost.bind(this));

    this.btnNo = document.createElement('a');
    this.btnNo.classList.add('button4','buttonNo');
    this.btnNo.innerHTML = "Cancel ";
    this.btnNo .addEventListener("click", this.hide.bind(this))


    container.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.header);
    this.cardDiv.appendChild(this.newPostdiv);
    this.header.appendChild(this.headerTitle);
    this.newPostdiv.appendChild(this.titleLabel);
    this.newPostdiv.appendChild(this.newTitle);
    this.newPostdiv.appendChild(this.bodyLabel);
    this.newPostdiv.appendChild(this.btnFinshed);
    this.newPostdiv.appendChild(this.btnUnFinshed); 
    this.newPostdiv.appendChild(this.btnAccept);
    this.newPostdiv.appendChild(this.btnNo);
}

NewTodoComponent.prototype.hide = function () {
    this.cardDiv.hidden = true;
}

NewTodoComponent.prototype.show = function () {
    this.cardDiv.hidden = false;
}

NewTodoComponent.prototype.newPost = function () {
    var title = this.newTitle.value;
    var finshed = this.btnFinshed.classList.length;
    var unfinshed = this.btnUnFinshed.classList.length;
    var bool = null;
    if(finshed === 3){
        bool = true;
    }else if(unfinshed === 3){
        
        bool = false;
    }
    if(bool == null || title == ""){
        alert("Select an option please");
    }else{
        this.appManager.uiManager.createNewTodos(title,bool);
        var title = this.newTitle.value = "";
        this.btnUnFinshed.classList.remove('clicked');
        this.btnFinshed.classList.remove('clicked');
        this.cardDiv.hidden = true;
    }

}

NewTodoComponent.prototype.addStatusFinshed = function () {
    this.btnFinshed.classList.add('clicked');
    this.btnUnFinshed.classList.remove('clicked');
}

NewTodoComponent.prototype.addStatusUn = function () {
    this.btnFinshed.classList.remove('clicked');
    this.btnUnFinshed.classList.add('clicked');
}







