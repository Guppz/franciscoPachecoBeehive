function CardView(user,appManager,state) {
    this.user = user;
    this.state = state;
    var header = document.getElementById('header-title');
    this.header = header;
    this.appManager = appManager;
    var container = document.getElementById('bees');
    this.container = container;
    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('card-seaction');
    this.cardImg = document.createElement('img');
    this.cardImg.classList.add('avatar');
    this.cardImg.setAttribute('src', 'img/avatar.png');
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.cardName = document.createElement('h3');
    this.cardName.classList.add('card-text');
    this.cardUsername = document.createElement('P');
    this.cardUsername.classList.add('card-text');
    this.cardPhone = document.createElement('P');
    this.cardPhone.classList.add('card-text');
    this.cardEmail = document.createElement('P');
    this.cardEmail.classList.add('card-text');
    this.cardDiv.appendChild(this.cardImg);
    container.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.card);
    this.card.appendChild(this.cardName);
    this.card.appendChild(this.cardUsername);
    this.card.appendChild(this.cardPhone);
    this.card.appendChild(this.cardEmail);
    this.cardName.innerHTML = user.name;
    this.cardUsername.innerHTML = user.username;
    this.cardPhone.innerHTML = user.phone;
    this.cardEmail.innerHTML = user.email;
    this.btnDiv = document.createElement('div');
    this.btnDiv.classList.add('btn-seaction','none');
    this.card.appendChild(this.btnDiv);
    this.btnPost = document.createElement('a');
    this.btnPost.classList.add('button4');
    this.btnPost.innerHTML = "Post";
    this.btnAlbum = document.createElement('a');
    this.btnAlbum.classList.add('button4');
    this.btnAlbum.innerHTML = "Album";
    this.btnTodo = document.createElement('a');
    this.btnTodo.classList.add('button4');
    this.btnTodo.innerHTML = "Todo";
    this.btnDiv.appendChild(this.btnPost);
    this.btnDiv.appendChild(this.btnAlbum);
    this.btnDiv.appendChild(this.btnTodo);
    this.cardDiv.addEventListener("click", this.changeUser.bind(this));



    console.log(this.state.type);
    if(this.state.type === 1){
        this.btnPost.addEventListener("click", this.showPostTablet.bind(this));
        this.btnAlbum.addEventListener("click", this.showAlbumTablet.bind(this));
        this.btnTodo.addEventListener("click", this.showTodoTablet.bind(this));
    }else{

        this.btnPost.addEventListener("click", this.showPost.bind(this));
        this.btnAlbum.addEventListener("click", this.showAlbum.bind(this));
        this.btnTodo.addEventListener("click", this.showTodo.bind(this));
    }


}

CardView.prototype.changeUser = function () {
    this.appManager.uiManager.beesID =  this.user.id -1;
    let reload = new Reload(this.appManager,this.user.id -1);
}



CardView.prototype.showPost = function () {
    var containerPost = document.getElementById('post');
    this.container.classList.add('off');
    containerPost.classList.add('on');
    this.header.innerHTML = "< Back";
    this.header.addEventListener("click", this.back.bind(this));
}

CardView.prototype.showAlbum = function () {
    this.container.classList.add('off');
    var containerAlbum = document.getElementById('album');
    containerAlbum.classList.add('on');
    this.header.innerHTML = "< Back";
    this.header.addEventListener("click", this.back.bind(this));
}
CardView.prototype.showTodo = function () {
    this.container.classList.add('off');
    var containerTodo = document.getElementById('todo');
    containerTodo.classList.add('on');
    this.header.innerHTML = "< Back";
    this.header.addEventListener("click", this.back.bind(this));
}





CardView.prototype.showPostTablet = function () {
    var containerPost = document.getElementById('post');
    var containerAlbum = document.getElementById('album');
    var containerTodo = document.getElementById('todo');
    containerPost.classList.add('on');
    containerPost.classList.remove('off');
    containerTodo.classList.add('off');
    containerAlbum.classList.add('off');
}

CardView.prototype.showAlbumTablet = function () {
    var containerPost = document.getElementById('post');
    var containerAlbum = document.getElementById('album');
    var containerTodo = document.getElementById('todo');
    containerAlbum.classList.add('on');
    containerAlbum.classList.remove('off');
    containerTodo.classList.add('off');
    containerPost.classList.add('off');
}

CardView.prototype.showTodoTablet = function () {
    var containerPost = document.getElementById('post');
    var containerAlbum = document.getElementById('album');
    var containerTodo = document.getElementById('todo');
    containerTodo.classList.add('on');
    containerTodo.classList.remove('off');
    containerAlbum.classList.add('off');
    containerPost.classList.add('off');

}




CardView.prototype.back = function () {
    var containerPost = document.getElementById('post');
    var containerAlbum = document.getElementById('album');
    var containerTodo = document.getElementById('todo');

    this.container.classList.remove('off');
    containerPost.classList.remove('on');
    containerTodo.classList.remove('on');
    containerAlbum.classList.remove('on');

    this.header.innerHTML = "The Beehive";
}












