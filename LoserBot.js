class Bot {
    
    makeMove(gamestate) {
        if(gamestate.rounds.length === 0){
            this.score = 0;
            this.score+=1;
            return 'W';
        }else{
            if(gamestate.rounds[0].p2 !== 'D'){
                return 'W';
            }else{
                return 'R';
            }
        
        }
    }
}
module.exports = new Bot();
