function StartConnection (){
    this.game = UnityLoader.instantiate("gameContainer", "Build/WebGL.json");
}
StartConnection();