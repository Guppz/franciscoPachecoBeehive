function PostComponent(post , index , newPost) {
    this.newPost = newPost;
    var container = document.getElementById('post');

    this.cardDiv = document.createElement('div');
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


    this.btnPost = document.createElement('a');
    this.btnPost.classList.add('button4','buttonPost');
    this.btnPost.innerHTML = "New Post";

    this.btnPost .addEventListener("click", this.showNewPost.bind(this))
    

    if(index == 0){
        container.appendChild(this.btnPost);
    }

    container.appendChild(this.cardDiv);
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









