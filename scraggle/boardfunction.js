
//generate an empty 15x15 array
const gameboard = Array.from({ length: 15 }, () =>
  Array(15).fill(null)
);
console.log(gameboard);

let lettersbank = [];
//generate a letters array, no blanks just yet
//let's put some letters into that array...
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

const gameboardSpaces = document.querySelector('.grid-container');
/*
for (let i = 0; i < 225; i++) {
  const square = document.createElement('div');
  square.classList.add('gamespace');
  gameboardSpaces.appendChild(square);
}*/

  // ----- GENERATE GRID -----
  for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 15; col++) {
      const square = document.createElement('div');
      square.classList.add('grid-cell');
      square.dataset.row = row;
      square.dataset.col = col;

      // Allow drop
      square.addEventListener('dragover', (e) => e.preventDefault());

      square.addEventListener('drop', (e) => {
        e.preventDefault();
        const tileId = e.dataTransfer.getData('text');
        const tile = document.getElementById(tileId);

        // Only drop if cell is empty
        if (square.children.length === 0) {
          square.appendChild(tile);
          tile.style.position = 'static';

          // Update your gameboard array
          gameboard[row][col] = tile.textContent;
          console.log(`Placed ${tile.textContent} at [${row}, ${col}]`);
        }
      });

      gameboardSpaces.appendChild(square);
    }
  }

  // ----- DRAG EVENTS FOR TILE -----
  const tile = document.getElementById('tile');

  tile.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
    setTimeout(() => (e.target.style.visibility = 'hidden'), 0);
  });

  tile.addEventListener('dragend', (e) => {
    e.target.style.visibility = 'visible';
  });

