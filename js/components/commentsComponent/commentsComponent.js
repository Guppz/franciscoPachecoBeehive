function CommentsComponent(container,comment) {
   




    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('card-comments-post');
    

    this.commentsName = document.createElement('p');
    this.commentsName.classList.add('comment-name');
    this.commentsName.innerHTML = comment.name;


    this.commentsbody = document.createElement('p');
    this.commentsbody.classList.add('comment-body');
    this.commentsbody.innerHTML = comment.body;



    this.commentsEmail = document.createElement('p');
    this.commentsEmail.classList.add('comment-email');
    this.commentsEmail.innerHTML = comment.email;




    container.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.commentsName);
    this.cardDiv.appendChild(this.commentsbody);
    this.cardDiv.appendChild(this.commentsEmail);
    



}
