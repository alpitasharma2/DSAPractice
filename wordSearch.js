var exist = function(board, word) {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            // Start DFS if the first character matches
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }
    return false;

    function dfs(r, c, i) {
        // Base case: all characters matched
        if (i === word.length) return true;

        // Out of bounds or character mismatch
        if (r >= board.length || r < 0 || c >= board[0].length || c < 0 || board[r][c] !== word[i]) {
            return false;
        }

        // Mark the cell as visited
        const temp = board[r][c];
        board[r][c] = '#';

        // Explore all 4 possible directions
        const found = dfs(r + 1, c, i + 1) ||  // Down
                      dfs(r - 1, c, i + 1) ||  // Up
                      dfs(r, c + 1, i + 1) ||  // Right
                      dfs(r, c - 1, i + 1);    // Left

        // Restore the cell after exploring
        board[r][c] = temp;

        return found;
    }
};
