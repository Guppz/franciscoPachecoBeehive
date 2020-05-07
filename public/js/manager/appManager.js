class AppManager {
    constructor() {
        this.state  = new StateType();
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this,this.state);
        this.dataManager.startDownload();
        console.log(this.state );
    }
}