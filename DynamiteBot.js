class Bot {
    
    makeMove(gamestate) {

        if(this.Dcount <= 100){
            
            if(gamestate.rounds.length === 0){
                this.score = 0;
                this.score+=1;
                this.Dcount = 0;
                return 'D';
            }
            if(gamestate.rounds[0].p2 !== 'W'){ // Dynamite can blow everything up except waterbomb
                this.Dcount += 1;
                return 'D';
            }
            else{
                return 'S'; // Cut the waterbomb with scissors
            }

//            if(gamestate.rounds[gamestate.rounds.length-1].p1 === 'D'){ //check player 1 last move to update dynamite counter
//            this.Dcount +=1 ;
//            console.log(this.Dcount);
            
        }else{
            
        }
        
    }
}
module.exports = new Bot();
