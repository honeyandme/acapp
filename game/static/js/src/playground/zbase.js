class AcGamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $('<div class="ac-game-playground"></div>');
        //this.hide();
        this.root.$ac_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this,this.width/2,this.height/2,this.height*0.05,"white",this.height*0.15,true));
        for(let i = 0;i<5;i++){
           this.players.push(new Player(this,this.width/2,this.height/2,this.height*0.05,"blue",this.height*0.15,false));
        }
        this.start();
    }
    start(){

    }
    show(){
        this.$playground.show();

        alert('说明:鼠标左键控制小球方向,按一下q准备释放小球，右键确定小球释放方向并释放');

    }
    hide(){
        this.$playground.hide();
    }
}
