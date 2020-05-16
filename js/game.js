class Game {
    constucter(){}
    getState(){
    var gamestateref = database.ref('gameState');
    gamestateref.on("value",function(data){
        gameState =data.val();
    })
    }
    update(State){
        database.ref('/').update({
            gameState: State
        });
    }
     async start(){
    if(gameState==0){
        player =new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form =new Form();
        form.display();
    }
    car1=createSprite(100,200);
    car2 =createSprite(300,200);
    car3=createSprite(500,200);
    car4 =createSprite(700,200);
    cars = [car1,car2,car3,car4];
    }
    play(){
    form.hide();
    Player.getPlayerInfo();
    if(allplayers !==undefined){
    var index =0;
    var x =0;
    var y;
    for(var plr in allplayers)
    {
        index = index+1;
        x = x+200;
        y =displayHeight-allplayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index ==player.index){
            cars[index-1].shapeColor = "red";
           
        }
    }
    }
    if(keyIsdown(UP_ARROW)&&player.index!==null){
       player.distance=player.distance+10;
       player.update();
    }
    drawsprites();
    }  
}