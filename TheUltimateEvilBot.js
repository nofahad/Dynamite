class Bot {
    Dcount = 0   
    makeMove(gamestate) {
        
        if(this.Dcount < 100){
            
            if(gamestate.rounds.length === 0){
                this.score = 0;
                this.score+=1;
                this.Dcount += 1;
                return 'D';
            }
            if(gamestate.rounds[0].p2 !== 'W'){ // Dynamite can blow everything up except waterbomb
                this.Dcount += 1;
                return 'D';
            }
            else{
                return 'S'; // Cut the waterbomb with scissors
            }
            
        }else if (this.Dcount === 100){
            this.previousMoves = []
            for (let i = 0; i < 100; i++){
               this.previousMoves.push(gamestate.rounds[i].p2)
            }
            function mostCommon(arr){
                return arr.sort((a,b) =>
                      arr.filter(v => v===a).length
                    - arr.filter(v => v===b).length
                ).pop();
            }
            if (mostCommon(this.previousMoves) === "S"){
            return "R"
            } if (mostCommon(this.previousMoves) === "P"){
            return "S"
            } if (mostCommon(this.previousMoves) === "R"){
            return "P"
            } if (mostCommon(this.previousMoves) === "D"){
            return "W"
            } else{
             const move = Math.floor(Math.random()*3);
                switch(move){
                  case 2:
                        return 'R';
                        break;
                    case 1:
                        return 'P';
                        break;
                    case 0:
                        return 'S';
                        break;
                }
            }

        // }else if (gamestate.rounds.length >= 101){
            
        // }
        
    }
    
}
}

module.exports = new Bot ();
