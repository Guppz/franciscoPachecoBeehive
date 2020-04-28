function UIManager(appManager) {
    this.appManager = appManager;
    this.bees = null;
}

UIManager.prototype.showLoader = function () {
    console.log('showLoader');
}

UIManager.prototype.createBeesUI = function (user) {
    for(var i = 0; i<user.length; i++){
        console.log(user[i]);
        this.bees = new BeesView(user[i]);
    }
    
};

UIManager.prototype.createPostUI = function (user,index) {
    this.newPost = new NewPostComponent();
    for(var i = 0; i<user[index].posts.length; i++){
        this.post = new PostComponent(user[index].posts[i],i,this.newPost);
    }
    this.newPost.hide();
};

UIManager.prototype.createAlbumUI = function (user,index) {
    for(var i = 0; i<user[index].album.length; i++){
        this.album = new AlbumComponent(user[index].album[i]);
    }
};

UIManager.prototype.createTodosUI = function (user,index) {

    for(var i = 0; i<user[index].todos.length; i++){
        this.todos = new TodosComponent(user[index].todos[i],i);
    }

};








