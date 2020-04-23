function AlbumComponent(album) {
   



    var container = document.getElementById('album');

    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('album-card');
    

    this.albumTitle = document.createElement('h3');
    this.albumTitle.classList.add('card-text');
    this.albumTitle.innerHTML = album.title;


  



    container.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.albumTitle);

    album.photos.forEach(element => {
        PhotoComponent(element,this.cardDiv);
    });
  

}