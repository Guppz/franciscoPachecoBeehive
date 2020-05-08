function AlbumComponent(album) {
   



    var container = document.getElementById('album');
    
    var albums = document.getElementById('albums');

    this.cardDiv = document.createElement('div');
    this.cardDiv.classList.add('album-card');





    this.albumTitle = document.createElement('h3');
    this.albumTitle.classList.add('card-text-album');
    this.albumTitle.innerHTML = album.title;

    container.appendChild(albums);
    albums.appendChild(this.cardDiv);
    this.cardDiv.appendChild(this.albumTitle);

    album.photos.forEach(element => {
        PhotoComponent(element,this.cardDiv);
    });
  

}