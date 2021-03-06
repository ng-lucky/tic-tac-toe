var gameModel = GameModel();
/**
     * This arrow function validates whether or not a move is legal before allowing
     * player to proceed to make a move. This is to ensure a grid is not clicked twice
     * It also checks if there is a tie in the game
     */
    validateMoveOnClick = square => {
        if (typeof gameModel.board[square.target.id] == 'number') {
            makeMove(square.target.id, gameModel.playerOne);
            if (!checkTie()) makeMove(bestSpot(), gameModel.playerTwo);
        }
    }
    /**
     * gameModel.board is updated with the current move made.
     * Claims the grid clicked and update grid with player's symbol (player) on the board.
     * It also checks if a game is won and then finishes the game to allow board to be cleared
     */
    makeMove = (square, player) => {
        gameModel.board[square] = player;
        $ ('#' + square).text(player);
        var done = isGameWon(gameModel.board, player);
        if (done) gameOver(done);
    }