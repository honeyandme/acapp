class FireBall extends AcGameObject{
    constructor(playground,player,x,y,radius,vx,vy,color,speed,move_length,damage)
    {
        super();
        this.playground = playground;
        this.player = player;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.move_length = move_length;
        this.eps = 0.1;
        this.damage = damage;
    }
    start(){

    }
    update(){
        if(this.move_length<this.eps){
            this.destroy();
            return false;
        }
        let moved = Math.min(this.move_length,this.speed*this.timedelta/1000);
        this.x+=this.vx*moved;
        this.y+=this.vy*moved;
        this.move_length-=moved;
        for(let i = 0;i<this.playground.players.length;i++){
            let player = this.playground.players[i];
            if(this.player !==player && this.is_collision(player)){
                this.attack(player);
            }
        }
        this.render();
    }
    get_dist(x1,y1,x2,y2){
        let dx = x1-x2;
        let dy = y1-y2;
        return Math.sqrt(dx*dx+dy*dy);
    }
    is_collision(player ){
        this.friction = 0.9;
        let dis = this.get_dist(this.x,this.y,player.x,player.y);
        if(dis < this.radius+player.radius)
            return true;
        return false;
    }
    attack(player){
        let angle = Math.atan2(player.y-this.y,player.x-this.x);
        let xx = this.playground;
       if( player.is_attacked(angle,this.damage)){
            this.playground.players.push(new Player(xx,xx.width/2,xx.height/2,xx.height*0.05,"blue",xx.height*0.15,false));
       }
        this.destroy();
    }
    render(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

    }
}
