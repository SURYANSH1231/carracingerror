class Player{
    constructor(){
        this.index = null;
        this.distance =0;
        this.name =null;
    }

    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
    database.ref('/').update({
        playerCount:count
    });
    }
    update(){
     var playerindex ="players/player"+this.index;
    database.ref(playerindex).set({
        name : this.name,
        distance: this.distance
    });
    }
    static getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
            allplayers =data.val();
        });
    }
}