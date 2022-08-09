class Bot {
    makeMove(gamestate) {
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
}

module.exports = new Bot();
