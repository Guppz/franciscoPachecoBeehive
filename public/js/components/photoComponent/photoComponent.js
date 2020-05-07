function PhotoComponent(image,container) {
   




    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('card-photo');
    

    this.photoTitle = document.createElement('h4');
    this.photoTitle.classList.add('card-text','card-photo-title');
    this.photoTitle.innerHTML = image.title;


    this.cardImg = document.createElement('img');
    this.cardImg.classList.add('thumbnail');
    this.cardImg.setAttribute('src', image.url);



    container.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.photoTitle);
    this.cardDiv.appendChild(this.cardImg);
    



}