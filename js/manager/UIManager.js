function UIManager(appManager) {
    this.appManager = appManager;
    this.bees = null;
}

UIManager.prototype.showLoader = function () {
    console.log('showLoader');
}

UIManager.prototype.createBeesUI = function (user) {
    for(var i = 0; i<user.length; i++){
        this.bees = new BeesView(user[i]);
    }
    
};




