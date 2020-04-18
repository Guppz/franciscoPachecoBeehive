

function DataManager(appManager) {
    this.appManager = appManager;
    this.users = [];
}

DataManager.prototype.startDownload = function () {
    const fetchUser = fetch('https://beehive-270a2.firebaseio.com/data/users.json');
    const fetchTodos = fetch('https://beehive-270a2.firebaseio.com/data/todos.json');
    const fetchPhotos = fetch('https://beehive-270a2.firebaseio.com/data/photos.json');
    const fetchAlbums = fetch('https://beehive-270a2.firebaseio.com/data/albums.json');
    const fetchComents = fetch('https://beehive-270a2.firebaseio.com/data/comments.json');
    const fetchPost = fetch('https://beehive-270a2.firebaseio.com/data/posts.json');

    Promise.all([fetchUser,fetchTodos,fetchPhotos,fetchAlbums,fetchComents,fetchPost]).then(values =>{
        return  Promise.all(values.map(r => r.json()));

    }).then(values =>{
       console.log(values);
       this.appManager.uiManager.createBeesUI(values[0]);
    });
}


