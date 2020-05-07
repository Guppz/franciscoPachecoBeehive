

function DataManager(appManager) {
    this.appManager = appManager;
    this.users = [];
    this.albums = [];
    this.posts = [];
    this.todos = [];

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
       
       
       values[1].forEach(todos => {
           var todos = new Todos(todos.id,todos.userId,todos.completed,todos.title);
           this.todos.push(todos);
       });

       values[3].forEach(album => {
           var photoArray = [];
        values[2].forEach(photo => {
            if(album.id === photo.albumId){
                photo = new Photos(photo.id,album.id,photo.thumbnailUrl,photo.title,photo.url);
                photoArray.push(photo);
            }
        });
        album = new Album(album.id,album.title,album.userId,photoArray);
        this.albums.push(album);
    });
    
        values[5].forEach(post => {
            var commentsArray = [];

        if(values[4] != null){
            values[4].forEach(comments => {
                if(post.id === comments.id){
                    comments = new Comments(comments.id,comments.email,comments.name,comments.body,post.id);
                    commentsArray.push(comments);
                }
            });

        }
        posts = new Posts(post.id,post.body,post.title,post.userId,commentsArray);
        this.posts.push(posts);
        });

        values[0].forEach(user => {
            let albumsArray = [];
            let postsArray = [];
            let todosArray = [];
    
            this.albums.forEach(album => {
                if(album.userID === user.id){
                    albumsArray.push(album);    
                }
            });
    
            this.posts.forEach(post => {
                if(post.userId === user.id){
                    postsArray.push(post);    
                }
                
            });
    
            this.todos.forEach(todo => {
                if(todo.userId === user.id){
                    todosArray.push(todo);    
                }
            });
    
            user = new User(user.id,user.name,user.phone,user.username,user.email,todosArray,albumsArray,postsArray);
            this.users.push(user);
    
    
         });

         this.appManager.uiManager.createBeesUI(this.users);
         this.appManager.uiManager.createPostUI(this.users,0);
         this.appManager.uiManager.createAlbumUI(this.users,0);
         this.appManager.uiManager.createTodosUI(this.users,0);
    
    });
}


