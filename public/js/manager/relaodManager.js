function Reload(appManager,index) {
    this.appManager = appManager;
    let users = this.appManager.dataManager.users;
    this.appManager.uiManager.createPostUI(users,index);
    this.appManager.uiManager.createAlbumUI(users,index);
    this.appManager.uiManager.createTodosUI(users,index);
}








