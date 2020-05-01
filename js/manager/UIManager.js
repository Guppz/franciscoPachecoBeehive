function UIManager(appManager) {
    this.appManager = appManager;
    this.bees = null;
    this.beesID = 0;
    this.beedPostID = 0;
}

UIManager.prototype.showLoader = function () {
    console.log('showLoader');
}

UIManager.prototype.createBeesUI = function (user) {


    for(var i = 0; i<user.length; i++){
        console.log(user[i]);
        this.bees = new CardView(user[i],this.appManager);
    }
    
};

UIManager.prototype.createPostUI = function (user,index) {
    let postcontainer = document.getElementById('posts');
    postcontainer.innerHTML = "";
    this.newPost = new NewPostComponent(this.appManager);
    this.newComment = new NewCommentComponent(this.appManager,user[index]);
    for(var i = 0; i<user[index].posts.length; i++){
        this.post = new PostComponent(this.appManager,user[index].posts[i],i,this.newPost,this.newComment);
    }
    this.newPost.hide();
    this.newComment.hide();
};

UIManager.prototype.createAlbumUI = function (user,index) {
    
    let albumContainer = document.getElementById('albums');
    albumContainer.innerHTML = "";
    for(var i = 0; i<user[index].album.length; i++){
        this.album = new AlbumComponent(user[index].album[i]);
    }
};

UIManager.prototype.createTodosUI = function (user,index) {
    this.newTodo = new NewTodoComponent(this.appManager);
    let todosContainer = document.getElementById('todos');
    todosContainer.innerHTML = "";
    for(var i = 0; i<user[index].todos.length; i++){
        this.todos = new TodosComponent(user[index].todos[i],i,this.newTodo);
    }
    this.newTodo.hide();

};


UIManager.prototype.createNewPost = function (title , body) {
    let arrayUser = this.appManager.dataManager.users;
    let postId = arrayUser[this.beesID].posts.length+1;
    let newPost = new Posts(postId,body,title,this.beesID,[]);
    this.appManager.dataManager.users[this.beesID].posts.unshift(newPost);
    let postcontainer = document.getElementById('posts');
    postcontainer.innerHTML = "";
    this.newPost = new NewPostComponent(this.appManager);
    for(var i = 0; i<arrayUser[this.beesID].posts.length; i++){
        this.post = new PostComponent(this.appManager,arrayUser[this.beesID].posts[i],i,this.newPost);
    }
    this.newPost.hide();

};



UIManager.prototype.createNewTodos = function (title , finshed) {
    let arrayUser = this.appManager.dataManager.users;
    let todoId = arrayUser[this.beesID].todos.length+1;
    let newTodo = new Todos(todoId,this.beesID,finshed,title);
    this.appManager.dataManager.users[this.beesID].todos.unshift(newTodo);
    let todoscontainer = document.getElementById('todos');
    todoscontainer.innerHTML = "";
    this.newTodos = new NewTodoComponent(this.appManager);
    for(var i = 0; i<arrayUser[this.beesID].todos.length; i++){
        this.todo = new TodosComponent(arrayUser[this.beesID].todos[i],i,this.newTodos);
    }

    this.newTodos.hide();
    

};


UIManager.prototype.createNewComment = function (comment) {
    let arrayUser = this.appManager.dataManager.users;
    let postiD = this.beedPostID - 1;
    comment.id = this.beedPostID + 1;
    comment.postId = this.beedPostID;
    this.appManager.dataManager.users[this.beesID].posts[postiD].comments.unshift(comment);
    let postcontainer = document.getElementById('posts');
    postcontainer.innerHTML = "";
    this.newPost = new NewPostComponent(this.appManager);
    this.newComment = new NewCommentComponent(this.appManager,arrayUser[this.beesID]);
    for(var i = 0; i<arrayUser[this.beesID].posts.length; i++){
        this.post = new PostComponent(this.appManager,arrayUser[this.beesID].posts[i],i,this.newPost,this.newComment);

    }
    this.newPost.hide();
    this.newComment.hide();

};












