function CardView(user) {
   
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







    cardDiv.appendChild(this.cardImg);

    container.appendChild(this.cardDiv);

    cardDiv.appendChild(this.card);

  


    card.appendChild(this.cardName);
    card.appendChild(this.cardUsername);
    card.appendChild(this.cardPhone);
    card.appendChild(this.cardEmail);



    this.cardName.innerHTML = user.name;
    this.cardUsername.innerHTML = user.username;
    this.cardPhone.innerHTML = user.phone;
    this.cardEmail.innerHTML = user.email;

    this.btnDiv = document.createElement('div');
    this.btnDiv.classList.add('btn-seaction','none');
    card.appendChild(this.btnDiv);

    
    this.btnPost = document.createElement('a');
    this.btnPost.classList.add('button4');
    this.btnPost.innerHTML = "Post";

    this.btnAlbum = document.createElement('a');
    this.btnAlbum.classList.add('button4');
    this.btnAlbum.innerHTML = "Album";

    this.btnTodo = document.createElement('a');
    this.btnTodo.classList.add('button4');
    this.btnTodo.innerHTML = "Todo";


    btnDiv.appendChild(this.btnPost);
    btnDiv.appendChild(this.btnAlbum);
    btnDiv.appendChild(this.btnTodo);




}






