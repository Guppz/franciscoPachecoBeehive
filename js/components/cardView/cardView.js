function CardView(user,appManager) {
    this.user = user;
    this.appManager = appManager;
    var container = document.getElementById('bees');
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
}

CardView.prototype.changeUser = function () {
    this.appManager.uiManager.beesID =  this.user.id -1;
    let reload = new Reload(this.appManager,this.user.id -1);
}






