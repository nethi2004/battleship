document.addEventListener('DOMContentLoaded', function() {
    const userBoard = document.getElementById('user-board');
    const pcBoard = document.getElementById('pc-board');
    const message = document.getElementById('message');
    const hitsCount = document.getElementById('hits-count');
    const missesCount = document.getElementById('misses-count');
    const newGameBtn = document.getElementById('new-game-btn');

    let userHits = 0;
    let userMisses = 0;

    // Initialize game boards
    initializeBoard(userBoard);
    initializeBoard(pcBoard);

    // Add event listeners for user's board
    userBoard.addEventListener('click', handleUserClick);

    // Function to initialize game board
    function initializeBoard(board) {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            board.appendChild(cell);
        }
    }

    // Function to handle user click
    function handleUserClick(event) {
        const cell = event.target;
        if (!cell.classList.contains('cell')) return;

        // Example logic for hit/miss
        const isHit = Math.random() < 0.5; // Random hit or miss
        if (isHit) {
            cell.classList.add('hit');
            userHits++;
            hitsCount.textContent = userHits;
            message.textContent = 'It\'s a hit!';
        } else {
            cell.classList.add('miss');
            userMisses++;
            missesCount.textContent = userMisses;
            message.textContent = 'It\'s a miss!';
        }

        // Check for game over
        if (userHits === 17) { // Assuming 17 hits sink all ships
            message.textContent = 'You win!';
            disableUserBoard();
        }

        // Example logic to prevent further bombing after game over
        if (userHits === 17) {
            pcBoard.removeEventListener('click', handlePcClick);
        }
    }

    // Function to disable user board after game over
    function disableUserBoard() {
        userBoard.removeEventListener('click', handleUserClick);
    }

    // Example logic for PC's turn
    function handlePcClick() {
        // Example: PC randomly selects a cell and triggers a click event
        const randomCell = pcBoard.children[Math.floor(Math.random() * pcBoard.children.length)];
        randomCell.click();
    }

    // Event listener for new game button
    newGameBtn.addEventListener('click', function() {
        resetGame();
        message.textContent = 'New game started!';
    });

    // Function to reset the game
    function resetGame() {
        userHits = 0;
        userMisses = 0;
        hitsCount.textContent = userHits;
        missesCount.textContent = userMisses;
        message.textContent = '';
        enableUserBoard();
    }

    // Function to enable user board
    function enableUserBoard() {
        userBoard.addEventListener('click', handleUserClick);
    }
});

//pc does not work
//new game should clear all battle ships 
//it is randomized so slay
//sound effects??
// prettier back
//