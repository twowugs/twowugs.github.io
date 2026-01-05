
//generate an empty 15x15 array
const gameboard = Array.from({ length: 15 }, () =>
  Array(15).fill(null)
);
console.log(gameboard);

let lettersbank = [];
//generate a letters array, no blanks just yet
lettersbank.push(
  ...Array(9).fill("A"),
  ...Array(2).fill("B"),
  ...Array(2).fill("C"),
  ...Array(4).fill("D"),
  ...Array(12).fill("E"),
  ...Array(2).fill("F"),
  ...Array(3).fill("G"),
  ...Array(2).fill("H"),
  ...Array(9).fill("I"),
  "J",
  "K",
  ...Array(4).fill("L"),
  ...Array(2).fill("M"),
  ...Array(6).fill("N"),
  ...Array(8).fill("O"),
  ...Array(2).fill("P"),
  "Q",
  ...Array(6).fill("R"),
  ...Array(4).fill("S"),
  ...Array(6).fill("T"),
  ...Array(4).fill("U"),
  ...Array(2).fill("V"),
  ...Array(2).fill("W"),
  "X",
  ...Array(2).fill("Y"),
  "Z"
);
console.log(lettersbank);

// fill example
//board[7][7] = "A";
