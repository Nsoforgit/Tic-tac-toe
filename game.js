// document.addEventListener('DOMContentLoaded', () => {
// 	const board = document.getElementById('board');
// 	const cells = document.querySelectorAll('.cell');
// 	const message = document.getElementById('message');
// 	const restartButton = document.getElementById('restartButton');
// 	const playerScoreElement = document.getElementById('playerScore');
// 	const computerScoreElement = document.getElementById('computerScore');
// 	const currentRoundElement = document.getElementById('currentRound');
// 	const totalRoundsElement = document.getElementById('totalRounds');

// 	let currentPlayer = 'X';
// 	let gameActive = true;
// 	let gameState = ['', '', '', '', '', '', '', '', ''];
// 	let playerScore = 0;
// 	let computerScore = 0;
// 	let currentRound = 0;
// 	let totalRounds = 1;

// 	const winningConditions = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6]
// 	];

// 	function handleCellPlayed(clickedCell, clickedCellIndex) {
// 		gameState[clickedCellIndex] = currentPlayer;
// 		clickedCell.innerHTML = currentPlayer;
// 	}

// 	function handleResultValidation() {
// 		let roundWon = false;
// 		for (let i = 0; i <= 7; i++) {
// 			const winCondition = winningConditions[i];
// 			let a = gameState[winCondition[0]];
// 			let b = gameState[winCondition[1]];
// 			let c = gameState[winCondition[2]];
// 			if (a === '' || b === '' || c === '') {
// 				continue;
// 			}
// 			if (a === b && b === c) {
// 				roundWon = true;
// 				break;
// 			}
// 		}

// 		if (roundWon) {
// 			message.innerHTML = currentPlayer === 'X' ? 'Player has won!' : 'Computer has won!';
// 			currentPlayer === 'X' ? playerScore++ : computerScore++;
// 			updateScore();
// 			gameActive = false;
// 			return;
// 		}

// 		let roundDraw = !gameState.includes('');
// 		if (roundDraw) {
// 			message.innerHTML = 'Game is a draw!';
// 			gameActive = false;
// 			return;
// 		}

// 		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// 		if (currentPlayer === 'O') {
// 			handleComputerMove();
// 		}
// 	}

// 	function handleCellClick(clickedCellEvent) {
// 		const clickedCell = clickedCellEvent.target;
// 		const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

// 		if (gameState[clickedCellIndex] !== '' || !gameActive) {
// 			return;
// 		}

// 		handleCellPlayed(clickedCell, clickedCellIndex);
// 		handleResultValidation();
// 	}

// 	function handleComputerMove() {
// 		let emptyCells = [];
// 		for (let i = 0; i < gameState.length; i++) {
// 			if (gameState[i] === '') {
// 				emptyCells.push(i);
// 			}
// 		}

// 		if (emptyCells.length > 0) {
// 			const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
// 			const computerCell = document.querySelector(`.cell[data-index='${randomIndex}']`);
// 			handleCellPlayed(computerCell, randomIndex);
// 			handleResultValidation();
// 		}
// 	}

// 	function handleRestartGame() {
// 		gameActive = true;
// 		currentPlayer = 'X';
// 		gameState = ['', '', '', '', '', '', '', '', ''];
// 		cells.forEach(cell => cell.innerHTML = '');
// 		message.innerHTML = '';
// 		currentRound++;
// 		if (currentRound > totalRounds) {
// 			alert('Game over! Player Score: ' + playerScore + ', Computer Score: ' + computerScore);
// 			playerScore = 0;
// 			computerScore = 0;
// 			currentRound = 1;
// 		}
// 		updateScore();
// 	}

// 	function updateScore() {
// 		playerScoreElement.innerHTML = playerScore;
// 		computerScoreElement.innerHTML = computerScore;
// 		currentRoundElement.innerHTML = currentRound;
// 		totalRoundsElement.innerHTML = totalRounds;
// 	}

// 	cells.forEach(cell => cell.addEventListener('click', handleCellClick));
// 	restartButton.addEventListener('click', handleRestartGame);

// 	// Initial setup
// 	totalRounds = prompt("Enter the number of rounds you want to play:", 1) || 1;
// 	updateScore();
// });



// old	updated

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const cells = document.querySelectorAll('.cell');
//     const message = document.getElementById('message');
//     const restartButton = document.getElementById('restartButton');
//     const playerScoreElement = document.getElementById('playerScore');
//     const computerScoreElement = document.getElementById('computerScore');
//     const currentRoundElement = document.getElementById('currentRound');
//     const totalRoundsElement = document.getElementById('totalRounds');

//     let currentPlayer = 'X';
//     let gameActive = true;
//     let gameState = ['', '', '', '', '', '', '', '', ''];
//     let playerScore = 0;
//     let computerScore = 0;
//     let currentRound = 0;
//     let totalRounds = 1;
//     let playerMoves = [];

//     const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     function handleCellPlayed(clickedCell, clickedCellIndex) {
//         gameState[clickedCellIndex] = currentPlayer;
//         clickedCell.innerHTML = currentPlayer;
//         playerMoves.push(clickedCellIndex);
//     }

//     function handleResultValidation() {
//         let roundWon = false;
//         for (let i = 0; i <= 7; i++) {
//             const winCondition = winningConditions[i];
//             let a = gameState[winCondition[0]];
//             let b = gameState[winCondition[1]];
//             let c = gameState[winCondition[2]];
//             if (a === '' || b === '' || c === '') {
//                 continue;
//             }
//             if (a === b && b === c) {
//                 roundWon = true;
//                 break;
//             }
//         }

//         if (roundWon) {
//             message.innerHTML = currentPlayer === 'X' ? 'Player has won!' : 'Computer has won!';
//             currentPlayer === 'X' ? playerScore++ : computerScore++;
//             updateScore();
//             gameActive = false;
//             return;
//         }

//         let roundDraw = !gameState.includes('');
//         if (roundDraw) {
//             message.innerHTML = 'Game is a draw!';
//             gameActive = false;
//             return;
//         }

//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// 		if (currentPlayer === 'O') {
			
// 			handleComputerMove();
// 			analyzePlayerMoves();
//         }
//     }

//     function handleCellClick(clickedCellEvent) {
//         const clickedCell = clickedCellEvent.target;
//         const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

//         if (gameState[clickedCellIndex] !== '' || !gameActive) {
//             return;
//         }

//         handleCellPlayed(clickedCell, clickedCellIndex);
//         handleResultValidation();
//     }

//     function handleComputerMove() {
//         let emptyCells = [];
//         for (let i = 0; i < gameState.length; i++) {
//             if (gameState[i] === '') {
//                 emptyCells.push(i);
//             }
//         }

//         if (emptyCells.length > 0) {
//             const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//             const computerCell = document.querySelector(`.cell[data-index='${randomIndex}']`);
//             handleCellPlayed(computerCell, randomIndex);
//             handleResultValidation();
//         }
//     }

//     function handleRestartGame() {
//         gameActive = true;
//         currentPlayer = 'X';
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         cells.forEach(cell => cell.innerHTML = '');
//         message.innerHTML = '';
//         currentRound++;
//         if (currentRound > totalRounds) {
//             alert('Game over! Player Score: ' + playerScore + ', Computer Score: ' + computerScore);
//             playerScore = 0;
//             computerScore = 0;
//             currentRound = 1;
//         }
//         updateScore();
//         playerMoves = [];
//     }

//     function updateScore() {
//         playerScoreElement.innerHTML = playerScore;
//         computerScoreElement.innerHTML = computerScore;
//         currentRoundElement.innerHTML = currentRound;
//         totalRoundsElement.innerHTML = totalRounds;
//     }

//     cells.forEach(cell => cell.addEventListener('click', handleCellClick));
//     restartButton.addEventListener('click', handleRestartGame);

//     // Initial setup
//     totalRounds = prompt("Enter the number of rounds you want to play:", 1) || 1;
//     updateScore();
// });



// 	function analyzePlayerMoves() {
// 		let centerCount = 0;
// 		let cornerCount = 0;
// 		let edgeCount = 0;
	
// 		for (let i = 0; i < playerMoves.length; i++) {
// 			const move = playerMoves[i];
	
// 			if (move === 4) {
// 				centerCount++;
// 			} else if (move >= 0 && move <= 2) {
// 				cornerCount++;
// 			} else if (move >= 3 && move <= 5) {
// 				edgeCount++;
// 			}
// 		}
	
// 		if (centerCount === 1) {
// 			// Strategy based on having one center move
// 		} else if (cornerCount === 3) {
// 			// Strategy based on having three corner moves
// 		} else if (edgeCount === 3) {
// 			// Strategy based on having three edge moves
// 		}
// 		// Add more conditions based on your strategy
// 	}

// lastupdated

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const cells = document.querySelectorAll('.cell');
//     const message = document.getElementById('message');
//     const restartButton = document.getElementById('restartButton');
//     const playerScoreElement = document.getElementById('playerScore');
//     const computerScoreElement = document.getElementById('computerScore');
//     const currentRoundElement = document.getElementById('currentRound');
//     const totalRoundsElement = document.getElementById('totalRounds');

//     let currentPlayer = 'X';
//     let gameActive = true;
//     let gameState = ['', '', '', '', '', '', '', '', ''];
//     let playerScore = 0;
//     let computerScore = 0;
//     let currentRound = 0;
//     let totalRounds = 1;
//     let playerMoves = [];

//     const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     function handleCellPlayed(clickedCell, clickedCellIndex) {
//         gameState[clickedCellIndex] = currentPlayer;
//         clickedCell.innerHTML = currentPlayer;
//         if (currentPlayer === 'X') {
//             playerMoves.push(clickedCellIndex);
//         }
//     }

//     function handleResultValidation() {
//         let roundWon = false;
//         for (let i = 0; i < winningConditions.length; i++) {
//             const winCondition = winningConditions[i];
//             const a = gameState[winCondition[0]];
//             const b = gameState[winCondition[1]];
//             const c = gameState[winCondition[2]];

//             if (a === '' || b === '' || c === '') continue;

//             if (a === b && b === c) {
//                 roundWon = true;
//                 break;
//             }
//         }

//         if (roundWon) {
//             message.innerHTML = currentPlayer === 'X' ? 'Player has won!' : 'Computer has won!';
//             currentPlayer === 'X' ? playerScore++ : computerScore++;
//             updateScore();
//             gameActive = false;
//             return;
//         }

//         if (!gameState.includes('')) {
//             message.innerHTML = 'Game is a draw!';
//             gameActive = false;
//             return;
//         }

//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         if (currentPlayer === 'O') {
//             handleComputerMove();
//             analyzePlayerMoves();
//         }
//     }

//     function handleCellClick(event) {
//         const clickedCell = event.target;
//         const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

//         if (gameState[clickedCellIndex] !== '' || !gameActive) return;

//         handleCellPlayed(clickedCell, clickedCellIndex);
//         handleResultValidation();
//     }

//     function handleComputerMove() {
//         const emptyCells = gameState.reduce((acc, cell, index) => {
//             if (cell === '') acc.push(index);
//             return acc;
//         }, []);

//         if (emptyCells.length > 0) {
//             const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//             const computerCell = document.querySelector(`.cell[data-index='${randomIndex}']`);
//             handleCellPlayed(computerCell, randomIndex);
//             handleResultValidation();
//         }
//     }

//     function handleRestartGame() {
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         playerMoves = [];
//         cells.forEach(cell => (cell.innerHTML = ''));
//         message.innerHTML = '';
//         currentRound++;

//         if (currentRound > totalRounds) {
//             alert(`Game over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//             playerScore = 0;
//             computerScore = 0;
//             currentRound = 1;
//         }

//         updateScore();

//         if (currentRound % 2 === 0) {
//             currentPlayer = 'O';
//             handleComputerMove();
//         } else {
//             currentPlayer = 'X';
//         }
//     }

//     function updateScore() {
//         playerScoreElement.innerHTML = playerScore;
//         computerScoreElement.innerHTML = computerScore;
//         currentRoundElement.innerHTML = currentRound;
//         totalRoundsElement.innerHTML = totalRounds;
//     }

//     function analyzePlayerMoves() {
//         let centerCount = 0;
//         let cornerCount = 0;
//         let edgeCount = 0;

//         playerMoves.forEach(move => {
//             if (move === 4) centerCount++;
//             else if ([0, 2, 6, 8].includes(move)) cornerCount++;
//             else edgeCount++;
//         });

//         // Add strategies based on move counts here
//     }

//     cells.forEach(cell => cell.addEventListener('click', handleCellClick));
//     restartButton.addEventListener('click', handleRestartGame);

//     totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
//     updateScore();

//     if (currentRound % 2 === 0) {
//         currentPlayer = 'O';
//         handleComputerMove();
//     } else {
//         currentPlayer = 'X';
//     }
// });


// last

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const cells = document.querySelectorAll('.cell');
//     const message = document.getElementById('message');
//     const restartButton = document.getElementById('restartButton');
//     const nextRoundButton = document.createElement('button');
//     nextRoundButton.id = 'nextRoundButton';
//     nextRoundButton.textContent = 'Next Round';
//     document.body.appendChild(nextRoundButton);
//     nextRoundButton.style.display = 'none';

//     const playerScoreElement = document.getElementById('playerScore');
//     const computerScoreElement = document.getElementById('computerScore');
//     const currentRoundElement = document.getElementById('currentRound');
//     const totalRoundsElement = document.getElementById('totalRounds');

//     let currentPlayer = 'X';
//     let gameActive = true;
//     let gameState = ['', '', '', '', '', '', '', '', ''];
//     let playerScore = 0;
//     let computerScore = 0;
//     let currentRound = 1;
//     let totalRounds = 1;
//     let playerMoves = [];
//     let playerMoveHistory = [];

//     const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     function handleCellPlayed(clickedCell, clickedCellIndex) {
//         gameState[clickedCellIndex] = currentPlayer;
//         clickedCell.innerHTML = currentPlayer;
//         if (currentPlayer === 'X') {
//             playerMoves.push(clickedCellIndex);
//         }
//     }

//     function handleResultValidation() {
//         let roundWon = false;
//         for (let i = 0; i < winningConditions.length; i++) {
//             const winCondition = winningConditions[i];
//             const a = gameState[winCondition[0]];
//             const b = gameState[winCondition[1]];
//             const c = gameState[winCondition[2]];

//             if (a === '' || b === '' || c === '') continue;

//             if (a === b && b === c) {
//                 roundWon = true;
//                 break;
//             }
//         }

//         if (roundWon) {
//             message.innerHTML = currentPlayer === 'X' ? 'Player has won!' : 'Computer has won!';
//             currentPlayer === 'X' ? playerScore++ : computerScore++;
//             updateScore();
//             gameActive = false;
//             return;
//         }

//         if (!gameState.includes('')) {
//             message.innerHTML = 'Game is a draw!';
//             gameActive = false;
//             return;
//         }

//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         if (currentPlayer === 'O') {
//             handleComputerMove();
//             analyzePlayerMoves();
//         }
//     }

//     function handleCellClick(event) {
//         const clickedCell = event.target;
//         const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

//         if (gameState[clickedCellIndex] !== '' || !gameActive) return;

//         handleCellPlayed(clickedCell, clickedCellIndex);
//         handleResultValidation();
//     }

//     function handleComputerMove() {
//         const emptyCells = gameState.reduce((acc, cell, index) => {
//             if (cell === '') acc.push(index);
//             return acc;
//         }, []);

//         let chosenIndex;

//         // Analyze player history to make an informed move
//         chosenIndex = makeInformedMove(emptyCells);

//         if (chosenIndex === undefined && emptyCells.length > 0) {
//             // If no informed move is found, pick a random move
//             chosenIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//         }

//         const computerCell = document.querySelector(`.cell[data-index='${chosenIndex}']`);
//         handleCellPlayed(computerCell, chosenIndex);
//         handleResultValidation();
//     }

//     function handleNextRound() {
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         playerMoveHistory.push([...playerMoves]); // Store the moves from this round
//         playerMoves = [];
//         cells.forEach(cell => (cell.innerHTML = ''));
//         message.innerHTML = '';
//         currentRound++;

//         if (currentRound > totalRounds) {
//             alert(`Game over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//             playerScore = 0;
//             computerScore = 0;
//             currentRound = 1;
//             playerMoveHistory = []; // Reset player history for a new game series
//         }

//         updateScore();

//         if (currentRound % 2 === 0) {
//             currentPlayer = 'O';
//             handleComputerMove();
//         } else {
//             currentPlayer = 'X';
//         }
//     }

//     function handleRestartGame() {
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         playerMoveHistory = []; // Reset player history
//         playerMoves = [];
//         cells.forEach(cell => (cell.innerHTML = ''));
//         message.innerHTML = '';
//         currentRound = 1;
//         playerScore = 0;
//         computerScore = 0;
//         updateScore();

//         if (currentRound % 2 === 0) {
//             currentPlayer = 'O';
//             handleComputerMove();
//         } else {
//             currentPlayer = 'X';
//         }
//     }

//     function updateScore() {
//         playerScoreElement.innerHTML = playerScore;
//         computerScoreElement.innerHTML = computerScore;
//         currentRoundElement.innerHTML = currentRound;
//         totalRoundsElement.innerHTML = totalRounds;

//         if (totalRounds > 1) {
//             nextRoundButton.style.display = 'inline-block';
//         } else {
//             nextRoundButton.style.display = 'none';
//         }
//     }

//     function analyzePlayerMoves() {
//         // Analyze the player's moves
//         let centerCount = 0;
//         let cornerCount = 0;
//         let edgeCount = 0;

//         playerMoves.forEach(move => {
//             if (move === 4) centerCount++;
//             else if ([0, 2, 6, 8].includes(move)) cornerCount++;
//             else edgeCount++;
//         });

//         // Add strategies based on move counts here
//     }

//     function makeInformedMove(emptyCells) {
//         // Analyze playerMoveHistory to find patterns
//         // Basic example: avoid moves the player frequently chooses next
//         const playerFavoredMoves = new Map();

//         playerMoveHistory.forEach(roundMoves => {
//             roundMoves.forEach(move => {
//                 if (playerFavoredMoves.has(move)) {
//                     playerFavoredMoves.set(move, playerFavoredMoves.get(move) + 1);
//                 } else {
//                     playerFavoredMoves.set(move, 1);
//                 }
//             });
//         });

//         // Find an empty cell that's least favored by the player
//         let leastFavoredMove;
//         let minFavoredCount = Infinity;

//         emptyCells.forEach(cell => {
//             const favoredCount = playerFavoredMoves.get(cell) || 0;
//             if (favoredCount < minFavoredCount) {
//                 minFavoredCount = favoredCount;
//                 leastFavoredMove = cell;
//             }
//         });

//         return leastFavoredMove;
//     }

//     cells.forEach(cell => cell.addEventListener('click', handleCellClick));
//     restartButton.addEventListener('click', handleRestartGame);
//     nextRoundButton.addEventListener('click', handleNextRound);

//     totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
//     updateScore();

//     if (currentRound % 2 === 0) {
//         currentPlayer = 'O';
//         handleComputerMove();
//     } else {
//         currentPlayer = 'X';
//     }
// });



// sorry

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const cells = document.querySelectorAll('.cell');
//     const message = document.getElementById('message');
//     const restartButton = document.getElementById('restartButton');
//     const nextRoundButton = document.createElement('button');
//     nextRoundButton.id = 'nextRoundButton';
//     nextRoundButton.textContent = 'Next Round';
//     document.body.appendChild(nextRoundButton);
//     nextRoundButton.style.display = 'none';

//     const playerScoreElement = document.getElementById('playerScore');
//     const computerScoreElement = document.getElementById('computerScore');
//     const currentRoundElement = document.getElementById('currentRound');
//     const totalRoundsElement = document.getElementById('totalRounds');

//     let currentPlayer = 'X';
//     let gameActive = true;
//     let gameState = ['', '', '', '', '', '', '', '', ''];
//     let playerScore = 0;
//     let computerScore = 0;
//     let currentRound = 1;
//     let totalRounds = 1;
//     let playerMoves = [];
//     let playerMoveHistory = [];

//     const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     function handleCellPlayed(clickedCell, clickedCellIndex) {
//         gameState[clickedCellIndex] = currentPlayer;
//         clickedCell.innerHTML = currentPlayer;
//         if (currentPlayer === 'X') {
//             playerMoves.push(clickedCellIndex);
//         }
//     }

//     function handleResultValidation() {
//         let roundWon = false;
//         for (let i = 0; i < winningConditions.length; i++) {
//             const winCondition = winningConditions[i];
//             const a = gameState[winCondition[0]];
//             const b = gameState[winCondition[1]];
//             const c = gameState[winCondition[2]];

//             if (a === '' || b === '' || c === '') continue;

//             if (a === b && b === c) {
//                 roundWon = true;
//                 break;
//             }
//         }

//         if (roundWon) {
//             message.innerHTML = currentPlayer === 'X' ? 'Player has won!' : 'Computer has won!';
//             currentPlayer === 'X' ? playerScore++ : computerScore++;
//             updateScore();
//             gameActive = false;
//             return;
//         }

//         if (!gameState.includes('')) {
//             message.innerHTML = 'Game is a draw!';
//             gameActive = false;
//             return;
//         }

//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         if (currentPlayer === 'O') {
//             handleComputerMove();
//             analyzePlayerMoves();
//         }
//     }

//     function handleCellClick(event) {
//         const clickedCell = event.target;
//         const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

//         if (gameState[clickedCellIndex] !== '' || !gameActive) return;

//         handleCellPlayed(clickedCell, clickedCellIndex);
//         handleResultValidation();
//     }

//     function handleComputerMove() {
//         const emptyCells = gameState.reduce((acc, cell, index) => {
//             if (cell === '') acc.push(index);
//             return acc;
//         }, []);

//         let chosenIndex;

//         // Analyze player history to make an informed move
//         chosenIndex = makeInformedMove(emptyCells);

//         if (chosenIndex === undefined && emptyCells.length > 0) {
//             // If no informed move is found, pick a random move
//             chosenIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//         }

//         const computerCell = document.querySelector(`.cell[data-index='${chosenIndex}']`);
//         handleCellPlayed(computerCell, chosenIndex);
//         handleResultValidation();
//     }

//     function handleNextRound() {
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         playerMoveHistory.push([...playerMoves]); // Store the moves from this round
//         playerMoves = [];
//         cells.forEach(cell => (cell.innerHTML = ''));
//         message.innerHTML = '';
//         currentRound++;

//         if (currentRound > totalRounds) {
//             alert(`Game over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//             const changeRounds = confirm("Would you like to change the number of rounds?");
//             if (changeRounds) {
//                 totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
//             }
//             playerScore = 0;
//             computerScore = 0;
//             currentRound = 1;
//             playerMoveHistory = []; // Reset player history for a new game series
//         }

//         updateScore();

//         if (currentRound % 2 === 0) {
//             currentPlayer = 'O';
//             handleComputerMove();
//         } else {
//             currentPlayer = 'X';
//         }
//     }

//     function handleRestartGame() {
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         playerMoveHistory = []; // Reset player history
//         playerMoves = [];
//         cells.forEach(cell => (cell.innerHTML = ''));
//         message.innerHTML = '';
//         currentRound = 1;
//         playerScore = 0;
//         computerScore = 0;
//         updateScore();

//         if (currentRound % 2 === 0) {
//             currentPlayer = 'O';
//             handleComputerMove();
//         } else {
//             currentPlayer = 'X';
//         }
//     }

//     function updateScore() {
//         playerScoreElement.innerHTML = playerScore;
//         computerScoreElement.innerHTML = computerScore;
//         currentRoundElement.innerHTML = currentRound;
//         totalRoundsElement.innerHTML = totalRounds;

//         if (totalRounds > 1) {
//             nextRoundButton.style.display = 'inline-block';
//         } else {
//             nextRoundButton.style.display = 'none';
//         }
//     }

//     function analyzePlayerMoves() {
//         // Analyze the player's moves
//         let centerCount = 0;
//         let cornerCount = 0;
//         let edgeCount = 0;

//         playerMoves.forEach(move => {
//             if (move === 4) centerCount++;
//             else if ([0, 2, 6, 8].includes(move)) cornerCount++;
//             else edgeCount++;
//         });

//         // Add strategies based on move counts here
//     }

//     function makeInformedMove(emptyCells) {
//         // Analyze playerMoveHistory to find patterns
//         // Basic example: avoid moves the player frequently chooses next
//         const playerFavoredMoves = new Map();

//         playerMoveHistory.forEach(roundMoves => {
//             roundMoves.forEach(move => {
//                 if (playerFavoredMoves.has(move)) {
//                     playerFavoredMoves.set(move, playerFavoredMoves.get(move) + 1);
//                 } else {
//                     playerFavoredMoves.set(move, 1);
//                 }
//             });
//         });

//         // Find an empty cell that's least favored by the player
//         let leastFavoredMove;
//         let minFavoredCount = Infinity;

//         emptyCells.forEach(cell => {
//             const favoredCount = playerFavoredMoves.get(cell) || 0;
//             if (favoredCount < minFavoredCount) {
//                 minFavoredCount = favoredCount;
//                 leastFavoredMove = cell;
//             }
//         });

//         return leastFavoredMove;
//     }

//     cells.forEach(cell => cell.addEventListener('click', handleCellClick));
//     restartButton.addEventListener('click', handleRestartGame);
//     nextRoundButton.addEventListener('click', handleNextRound);

//     totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
//     updateScore();

//     if (currentRound % 2 === 0) {
//         currentPlayer = 'O';
//         handleComputerMove();
//     } else {
//         currentPlayer = 'X';
//     }
// });





// BEFORE

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const cells = document.querySelectorAll('.cell');
//     const message = document.getElementById('message');
//     const restartButton = document.getElementById('restartButton');
//     const nextRoundButton = document.createElement('button');
//     nextRoundButton.id = 'nextRoundButton';
//     nextRoundButton.textContent = 'Next Round';
//     document.body.appendChild(nextRoundButton);
//     nextRoundButton.style.display = 'none';

//     const quitButton = document.createElement('button');
//     quitButton.id = 'quitButton';
//     quitButton.textContent = 'Quit Game';
//     document.body.appendChild(quitButton);

//     const playerScoreElement = document.getElementById('playerScore');
//     const computerScoreElement = document.getElementById('computerScore');
//     const currentRoundElement = document.getElementById('currentRound');
//     const totalRoundsElement = document.getElementById('totalRounds');

//     let currentPlayer = 'X';
//     let gameActive = true;
//     let gameState = ['', '', '', '', '', '', '', '', ''];
//     let playerScore = 0;
//     let computerScore = 0;
//     let currentRound = 1;
//     let totalRounds = 1;
//     let playerMoves = [];
//     let playerMoveHistory = [];

//     const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     function handleCellPlayed(clickedCell, clickedCellIndex) {
//         gameState[clickedCellIndex] = currentPlayer;
//         clickedCell.innerHTML = currentPlayer;
//         if (currentPlayer === 'X') {
//             playerMoves.push(clickedCellIndex);
//         }
//     }

//     function handleResultValidation() {
//         let roundWon = false;
//         for (let i = 0; i < winningConditions.length; i++) {
//             const winCondition = winningConditions[i];
//             const a = gameState[winCondition[0]];
//             const b = gameState[winCondition[1]];
//             const c = gameState[winCondition[2]];

//             if (a === '' || b === '' || c === '') continue;

//             if (a === b && b === c) {
//                 roundWon = true;
//                 break;
//             }
//         }

//         if (roundWon) {
//             message.innerHTML = currentPlayer === 'X' ? 'Player has won!' : 'Computer has won!';
//             currentPlayer === 'X' ? playerScore++ : computerScore++;
//             updateScore();
//             gameActive = false;
//             return;
//         }

//         if (!gameState.includes('')) {
//             message.innerHTML = 'Game is a draw!';
//             gameActive = false;
//             return;
//         }

//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         if (currentPlayer === 'O') {
//             handleComputerMove();
//             analyzePlayerMoves();
//         }
//     }

//     function handleCellClick(event) {
//         const clickedCell = event.target;
//         const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

//         if (gameState[clickedCellIndex] !== '' || !gameActive) return;

//         handleCellPlayed(clickedCell, clickedCellIndex);
//         handleResultValidation();
//     }

//     function handleComputerMove() {
//         const emptyCells = gameState.reduce((acc, cell, index) => {
//             if (cell === '') acc.push(index);
//             return acc;
//         }, []);

//         let chosenIndex;

//         // Analyze player history to make an informed move
//         chosenIndex = makeInformedMove(emptyCells);

//         if (chosenIndex === undefined && emptyCells.length > 0) {
//             // If no informed move is found, pick a random move
//             chosenIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//         }

//         const computerCell = document.querySelector(`.cell[data-index='${chosenIndex}']`);
//         handleCellPlayed(computerCell, chosenIndex);
//         handleResultValidation();
//     }

//     function handleNextRound() {
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         playerMoveHistory.push([...playerMoves]); // Store the moves from this round
//         playerMoves = [];
//         cells.forEach(cell => (cell.innerHTML = ''));
//         message.innerHTML = '';
//         currentRound++;

//         if (currentRound > totalRounds) {
//             alert(`Game over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//             const changeRounds = confirm("Would you like to change the number of rounds?");
//             if (changeRounds) {
//                 totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
//             }
//             playerScore = 0;
//             computerScore = 0;
//             currentRound = 1;
//             playerMoveHistory = []; // Reset player history for a new game series
//         }

//         updateScore();

//         if (currentRound % 2 === 0) {
//             currentPlayer = 'O';
//             handleComputerMove();
//         } else {
//             currentPlayer = 'X';
//         }
//     }

//     function handleRestartGame() {
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         playerMoveHistory = []; // Reset player history
//         playerMoves = [];
//         cells.forEach(cell => (cell.innerHTML = ''));
//         message.innerHTML = '';
//         currentRound = 1;
//         playerScore = 0;
//         computerScore = 0;
//         updateScore();

//         if (currentRound % 2 === 0) {
//             currentPlayer = 'O';
//             handleComputerMove();
//         } else {
//             currentPlayer = 'X';
//         }
//     }

//     function handleQuitGame() {
//         gameActive = false;
//         message.innerHTML = 'Game has been quit.';
//         alert(`Game over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//         playerScoreElement.innerHTML = 0;
//         computerScoreElement.innerHTML = 0;
//         currentRoundElement.innerHTML = 0;
//         totalRoundsElement.innerHTML = 0;
//         playerScore = 0;
//         computerScore = 0;
//         currentRound = 0;
//         totalRounds = 0;
//         cells.forEach(cell => (cell.innerHTML = ''));
//         playerMoveHistory = [];
//         playerMoves = [];
//     }

//     function updateScore() {
//         playerScoreElement.innerHTML = playerScore;
//         computerScoreElement.innerHTML = computerScore;
//         currentRoundElement.innerHTML = currentRound;
//         totalRoundsElement.innerHTML = totalRounds;

//         if (totalRounds > 1) {
//             nextRoundButton.style.display = 'inline-block';
//         } else {
//             nextRoundButton.style.display = 'none';
//         }
//     }

//     function analyzePlayerMoves() {
//         // Analyze the player's moves
//         let centerCount = 0;
//         let cornerCount = 0;
//         let edgeCount = 0;

//         playerMoves.forEach(move => {
//             if (move === 4) centerCount++;
//             else if ([0, 2, 6, 8].includes(move)) cornerCount++;
//             else edgeCount++;
//         });

//         // Add strategies based on move counts here
//     }

//     function makeInformedMove(emptyCells) {
//         // Analyze playerMoveHistory to find patterns
//         // Basic example: avoid moves the player frequently chooses next
//         const playerFavoredMoves = new Map();

//         playerMoveHistory.forEach(roundMoves => {
//             roundMoves.forEach(move => {
//                 if (playerFavoredMoves.has(move)) {
//                     playerFavoredMoves.set(move, playerFavoredMoves.get(move) + 1);
//                 } else {
//                     playerFavoredMoves.set(move, 1);
//                 }
//             });
//         });

//         // Find an empty cell that's least favored by the player
//         let leastFavoredMove;
//         let minFavoredCount = Infinity;

//         emptyCells.forEach(cell => {
//             const favoredCount = playerFavoredMoves.get(cell) || 0;
//             if (favoredCount < minFavoredCount) {
//                 minFavoredCount = favoredCount;
//                 leastFavoredMove = cell;
//             }
//         });

//         return leastFavoredMove;
//     }

//     cells.forEach(cell => cell.addEventListener('click', handleCellClick));
//     restartButton.addEventListener('click', handleRestartGame);
//     nextRoundButton.addEventListener('click', handleNextRound);
//     quitButton.addEventListener('click', handleQuitGame);

//     totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
//     updateScore();

//     if (currentRound % 2 === 0) {
//         currentPlayer = 'O';
//         handleComputerMove();
//     } else {
//         currentPlayer = 'X';
//     }
// });




















document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    const gameContainer = document.querySelector('.game-container');

    const restartButton = document.getElementById('restartButton');
    const nextRoundButton = document.createElement('button');
    nextRoundButton.id = 'nextRoundButton';
    nextRoundButton.textContent = 'Next Round';
    gameContainer.appendChild(nextRoundButton);
    nextRoundButton.style.display = 'none';

    const quitButton = document.createElement('button');
    quitButton.id = 'quitButton';
    quitButton.textContent = 'Quit Game';
    gameContainer.appendChild(quitButton);

    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    const currentRoundElement = document.getElementById('currentRound');
    const totalRoundsElement = document.getElementById('totalRounds');
    const currentPlayerIndicator = document.getElementById('currentPlayerIndicator');

    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 1;
    let totalRounds = 1;
    let playerMoves = [];
    let playerMoveHistory = [];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellPlayed(clickedCell, clickedCellIndex) {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
        if (currentPlayer === 'X') {
            playerMoves.push(clickedCellIndex);
        }
    }

    // Load sound files
const winSound = new Audio('win.mp3');
const failSound = new Audio('fail.mp3');

    function handleResultValidation() {
        let roundWon = false;
        let winningCells = [];
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            const a = gameState[winCondition[0]];
            const b = gameState[winCondition[1]];
            const c = gameState[winCondition[2]];

            if (a === '' || b === '' || c === '') continue;

            if (a === b && b === c) {
                roundWon = true;
                winningCells = winCondition;
                break;
            }
        }

        if (roundWon) {
            message.innerHTML = currentPlayer === 'X' ? 'Player has won!' : 'Computer has won!';
            currentPlayer === 'X' ? playerScore++ : computerScore++;
            updateScore();
            gameActive = false;

            winningCells.forEach(index => {
                const winningCell = document.querySelector(`.cell[data-index='${index}']`);
                winningCell.classList.add(currentPlayer === 'X' ? 'player-win' : 'computer-win');


                 // Blinking effect
                 const blinkInterval = setInterval(() => {
                    winningCell.classList.toggle('highlight');
                }, 500);

                setTimeout(() => {
                    clearInterval(blinkInterval);
                    winningCell.classList.remove('highlight');
                }, 7000); // Blink for 3 seconds
            });

              // Play sound based on winner
             if (currentPlayer === 'X') {
            winSound.play(); // Player wins
            } else {
            failSound.play(); // Computer wins
             }

 
    
            return; 
            
        }
            

        if (!gameState.includes('')) {
            message.innerHTML = 'Game is a draw!';
            gameActive = false;

             // Play fail sound (or any sound for a draw)
             failSound.play();
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        currentPlayerIndicator.innerHTML = `Current Player: ${currentPlayer}`;
        if (currentPlayer === 'O') {
            handleComputerMove();
            analyzePlayerMoves();
        }
    }

    function handleCellClick(event) {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) return;

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }

    function handleComputerMove() {
        const emptyCells = gameState.reduce((acc, cell, index) => {
            if (cell === '') acc.push(index);
            return acc;
        }, []);

        let chosenIndex;

        // Analyze player history to make an informed move
        chosenIndex = makeInformedMove(emptyCells);

        if (chosenIndex === undefined && emptyCells.length > 0) {
            // If no informed move is found, pick a random move
            chosenIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        }

        const computerCell = document.querySelector(`.cell[data-index='${chosenIndex}']`);
        handleCellPlayed(computerCell, chosenIndex);
        handleResultValidation();
    }

    function handleNextRound() {
        gameActive = true;
        gameState = ['', '', '', '', '', '', '', '', ''];
        playerMoveHistory.push([...playerMoves]); // Store the moves from this round
        playerMoves = [];
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.classList.remove('player-win', 'computer-win'); // Reset cell colors

         });
        cell.classList.remove('player-win', 'computer-win'); // Reset cell colors
        message.innerHTML = '';
        currentRound++;

        if (currentRound > totalRounds) {
            alert(`Game over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
            const changeRounds = confirm("Would you like to change the number of rounds?");
            if (changeRounds) {
                totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
            }
            playerScore = 0;
            computerScore = 0;
            currentRound = 1;
            playerMoveHistory = []; // Reset player history for a new game series
        }

        updateScore();

        if (currentRound % 2 === 0) {
            currentPlayer = 'O';
            handleComputerMove();
        } else {
            currentPlayer = 'X';
        }
        currentPlayerIndicator.innerHTML = `Current Player: ${currentPlayer}`;
    }

    function handleRestartGame() {
        gameActive = true;
        gameState = ['', '', '', '', '', '', '', '', ''];
        playerMoveHistory = []; // Reset player history
        playerMoves = [];
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.classList.remove('player-win', 'computer-win'); // Reset cell colors
        }
        
        );
        cell.classList.remove('player-win', 'computer-win'); // Reset cell colors
        message.innerHTML = '';
        currentRound = 1;
        playerScore = 0;
        computerScore = 0;
        updateScore();

        if (currentRound % 2 === 0) {
            currentPlayer = 'O';
            handleComputerMove();
        } else {
            currentPlayer = 'X';
        }
        currentPlayerIndicator.innerHTML = `Current Player: ${currentPlayer}`;
    }

    function handleQuitGame() {
        gameActive = false;
        message.innerHTML = 'Game has been quit.';
        alert(`Game over! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        playerScoreElement.innerHTML = 0;
        computerScoreElement.innerHTML = 0;
        currentRoundElement.innerHTML = 0;
        totalRoundsElement.innerHTML = 0;
        playerScore = 0;
        computerScore = 0;
        currentRound = 0;
        totalRounds = 0;
        cells.forEach(cell => (cell.innerHTML = ''));
        playerMoveHistory = [];
        playerMoves = [];
    }

    function updateScore() {
        playerScoreElement.innerHTML = playerScore;
        computerScoreElement.innerHTML = computerScore;
        currentRoundElement.innerHTML = currentRound;
        totalRoundsElement.innerHTML = totalRounds;

        if (totalRounds > 1) {
            nextRoundButton.style.display = 'inline-block';
        } else {
            nextRoundButton.style.display = 'none';
        }
        currentPlayerIndicator.innerHTML = `Current Player: ${currentPlayer}`;
    }

    function analyzePlayerMoves() {
        // Analyze the player's moves
        let centerCount = 0;
        let cornerCount = 0;
        let edgeCount = 0;

        playerMoves.forEach(move => {
            if (move === 4) centerCount++;
            else if ([0, 2, 6, 8].includes(move)) cornerCount++;
            else edgeCount++;
        });

        // Add strategies based on move counts here
    }

	function makeInformedMove(emptyCells) {
        // Analyze playerMoveHistory to find patterns
        const playerFavoredMoves = new Map();

        playerMoveHistory.forEach(roundMoves => {
            roundMoves.forEach(move => {
                if (playerFavoredMoves.has(move)) {
                    playerFavoredMoves.set(move, playerFavoredMoves.get(move) + 1);
                } else {
                    playerFavoredMoves.set(move, 1);
                }
            });
        });

        // Find an empty cell that's least favored by the player
        let leastFavoredMove;
        let minFavoredCount = Infinity;

        emptyCells.forEach(cell => {
            const favoredCount = playerFavoredMoves.get(cell) || 0;
            if (favoredCount < minFavoredCount) {
                minFavoredCount = favoredCount;
                leastFavoredMove = cell;
            }
        });

        return leastFavoredMove;
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartButton.addEventListener('click', handleRestartGame);
    nextRoundButton.addEventListener('click', handleNextRound);
    quitButton.addEventListener('click', handleQuitGame);

    totalRounds = parseInt(prompt('Enter the number of rounds you want to play:', 1)) || 1;
    updateScore();

    if (currentRound % 2 === 0) {
        currentPlayer = 'O';
        handleComputerMove();
    } else {
        currentPlayer = 'X';
    }

    function handleQuitGame() {
        gameActive = false;
        alert(`Thanks for playing!`);
        window.location.href = 'login.html'; // Redirect to the login page
    }2
});
















