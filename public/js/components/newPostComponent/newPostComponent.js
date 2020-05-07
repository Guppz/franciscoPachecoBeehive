function NewPostComponent(appManager) {
    this.appManager = appManager;
    var container = document.getElementById('post');
    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('new','scale-up-center');

    this.header = document.createElement('header');
    this.header.classList.add('new-header');

    this.headerTitle = document.createElement('H1');
    this.headerTitle.classList.add('new-header-title');
    this.headerTitle.innerHTML = "New Post";



    this.newPostdiv = document.createElement('div');
    this.newPostdiv.classList.add('newPost');



    this.titleLabel = document.createElement('label');
    this.titleLabel.classList.add('label');
    this.titleLabel.innerHTML = "Title";

    this.newTitle = document.createElement('input');
    this.newTitle.type = "text";
    this.newTitle.classList.add('newTitle');



    this.bodyLabel = document.createElement('label');
    this.bodyLabel.classList.add('label');
    this.bodyLabel.innerHTML = "Body";


    this.newBody = document.createElement('textarea');
    this.newBody.type = "text";
    this.newBody.classList.add('newBody');




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
    this.newPostdiv.appendChild(this.newBody);
    this.newPostdiv.appendChild(this.btnAccept);
    this.newPostdiv.appendChild(this.btnNo);
}

NewPostComponent.prototype.hide = function () {
    this.cardDiv.hidden = true;
}

NewPostComponent.prototype.show = function () {
    this.cardDiv.hidden = false;
}

NewPostComponent.prototype.newPost = function () {
    var title = this.newTitle.value;
    var body = this.newBody.value;
    console.log(title,body);
    if(title == "" || body == ""){
        alert("Error blank spaces");
    }else{
        this.appManager.uiManager.createNewPost(title,body);
        var title = this.newTitle.value = "";
        var body = this.newBody.value = "";
        this.cardDiv.hidden = true;

    }
    

}






