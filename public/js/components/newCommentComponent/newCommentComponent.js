function NewCommentComponent(appManager , user) {
    this.appManager = appManager;
    this.user = user;
    var container = document.getElementById('post');
    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('new','scale-up-center');

    this.header = document.createElement('header');
    this.header.classList.add('new-header');

    this.headerTitle = document.createElement('H1');
    this.headerTitle.classList.add('new-header-title');
    this.headerTitle.innerHTML = "New Comment";



    this.newPostdiv = document.createElement('div');
    this.newPostdiv.classList.add('newPost');



    this.titleLabel = document.createElement('label');
    this.titleLabel.classList.add('label');
    this.titleLabel.innerHTML = "Name";

    this.newTitle = document.createElement('h1');
    this.newTitle.classList.add('h1-comment');
    this.titleLabel.innerHTML = user.name;



    this.bodyLabel = document.createElement('label');
    this.bodyLabel.classList.add('label');
    this.bodyLabel.innerHTML = "Comment";

    this.newBody = document.createElement('textarea');
    this.newBody.type = "text";
    this.newBody.classList.add('newBody');




    this.btnAccept = document.createElement('a');
    this.btnAccept.classList.add('button4','buttonAccept');
    this.btnAccept.innerHTML = "Accept";
    this.btnAccept.addEventListener("click", this.newComment.bind(this));

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
    this.newPostdiv.appendChild(this.newBody);
    this.newPostdiv.appendChild(this.btnAccept);
    this.newPostdiv.appendChild(this.btnNo);
}

NewCommentComponent.prototype.hide = function () {
    this.cardDiv.hidden = true;
}

NewCommentComponent.prototype.show = function () {
    this.cardDiv.hidden = false;
}

NewCommentComponent.prototype.newComment = function () {
    let name = this.user.name;
    let postIndex = null;
    let email = this.user.email;
    let body = this.newBody.value;
    let id = null;
 
    if(body === ""){
        alert("Comment is empty");
    }else{
        this.comment = new Comments(id,email,name,body,postIndex);
        this.appManager.uiManager.createNewComment(this.comment);
    }
}






