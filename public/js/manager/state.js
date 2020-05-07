function StateType() {
    this.width = window.innerWidth;
     this.type = 0
    if(this.width >= 768 && this.width <= 1280){
        this.type = 1;
    }else{
        this.type = 2;
    }
}











