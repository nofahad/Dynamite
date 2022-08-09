
class Bot {
    
    makeMove(gamestate) {
        if(gamestate.rounds.length === 0){
            this.score = 0;
            this.score+=1;
            return 'W';
        }else{
            if(gamestate.rounds[0].p2 === 'S'){
                return 'R';
            }else if(gamestate.rounds[0].p2 === 'P'){
                return 'S';
            }else if(gamestate.rounds[0].p2 === 'R'){
                return 'P';
            }else if(gamestate.rounds[0].p2 === 'D'){
                return 'W';
            }else{
                return 'D';
            }
        
        }
    }
}
module.exports = new Bot();
