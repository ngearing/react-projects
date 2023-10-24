import { useState } from "react";
import "./1-style.css";

// https://react.dev/learn/tutorial-tic-tac-toe

export default function TickTack() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;

	function handlePlay(squares) {
		const nextHistory = [...history.slice(0, currentMove + 1), squares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(move) {
		setCurrentMove(move);
	}

	return (
		<div className="game">
			<h1>Tick Tack Toe</h1>
			<Board
				xIsNext={xIsNext}
				squares={currentSquares}
				handlePlay={handlePlay}
			/>
			<BoardInfo history={history} jumpTo={jumpTo} />
		</div>
	);
}

function Board({ xIsNext, squares, handlePlay }) {
	const winner = calculateWinner(squares);
	let noTurns = squares.filter((a, c) => a === null).length === 0;
	let status = "Players turn: " + (xIsNext ? "X" : "O");
	if (winner) {
		status = `Player ${winner} wins!`;
	}
	if (noTurns && !winner) {
		status = "No Winner!";
	}

	function handleClick(i) {
		// check square for value & check for winner
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";
		handlePlay(nextSquares);
	}

	function resetBoard() {
		handlePlay(Array(9).fill(null));
	}

	return (
		<div className="board">
			<div className="status">
				{status}
				{(winner || noTurns) && (
					<button onClick={resetBoard}>Reset</button>
				)}
			</div>
			<div className="board-row">
				<Square
					value={squares[0]}
					onSquareClick={() => handleClick(0)}
				/>
				<Square
					value={squares[1]}
					onSquareClick={() => handleClick(1)}
				/>
				<Square
					value={squares[2]}
					onSquareClick={() => handleClick(2)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[3]}
					onSquareClick={() => handleClick(3)}
				/>
				<Square
					value={squares[4]}
					onSquareClick={() => handleClick(4)}
				/>
				<Square
					value={squares[5]}
					onSquareClick={() => handleClick(5)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[6]}
					onSquareClick={() => handleClick(6)}
				/>
				<Square
					value={squares[7]}
					onSquareClick={() => handleClick(7)}
				/>
				<Square
					value={squares[8]}
					onSquareClick={() => handleClick(8)}
				/>
			</div>
		</div>
	);
}

function BoardInfo({ history, jumpTo }) {
	return (
		<div className="info">
			<ol>
				{history.map((step, move) => (
					<li key={move}>
						<button onClick={() => jumpTo(move)}>
							{move !== 0
								? `Go to move #${move}`
								: "Go to game start"}
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}

function Square({ value, onSquareClick }) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}
