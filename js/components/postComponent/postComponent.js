function PostComponent(appManager,post , index , newPost , newComment) {
    this.appManager = appManager;
    this.newPost = newPost;
    this.newComment = newComment;
    var container = document.getElementById('post');
    var postcontainer = document.getElementById('posts');
    this.cardDiv = document.createElement('div');
    this.cardDiv.id = post.id;
    this.cardDiv.classList.add('card-post');
    this.posth2 = document.createElement('h2');
    this.posth2.classList.add('post-title');
    this.posth2.innerHTML = post.title;
    this.postbody = document.createElement('p');
    this.postbody.classList.add('post-body');
    this.postbody.innerHTML = post.body;
    this.commentsNum = document.createElement('p');
    this.commentsNum.classList.add('comments-num');
    this.commentsNum.innerHTML = "Comments:";
    this.btnTodo = document.createElement('a');
    this.btnTodo.classList.add('button4','buttonComments');
    this.btnTodo.innerHTML = "New Comment";
    this.btnPost = document.getElementById("btnNewPost");
    this.btnPost.addEventListener("click", this.showNewPost.bind(this));
    this.btnTodo.addEventListener("click", this.showNewComment.bind(this));
    container.appendChild(postcontainer);
    postcontainer.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.posth2);
    this.cardDiv.appendChild(this.postbody);
    this.cardDiv.appendChild(this.commentsNum);
    
    post.comments.forEach(element => {
        CommentsComponent(this.cardDiv,element);
    });

    this.cardDiv.appendChild(this.btnTodo);
}



PostComponent.prototype.showNewPost = function () {
    
    this.newPost.show();
}


PostComponent.prototype.showNewComment = function () {
    this.appManager.uiManager.beedPostID = this.cardDiv.id;
    this.newComment.show();
}









