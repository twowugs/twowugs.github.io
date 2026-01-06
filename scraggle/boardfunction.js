
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
          console.log([row, col]);
        }
      });

      gameboardSpaces.appendChild(square);
    }
  }

  // ----- DRAG EVENTS FOR TILE -----
  const tile = document.getElementById('tile');
  document.addEventListener('dragstart', (e) => {
    const tile = e.target.closest('.tile');
    if (!tile) return;
  
    e.dataTransfer.setData('text/plain', tile.id);
    setTimeout(() => (tile.style.visibility = 'hidden'), 0);
  });
  
  document.addEventListener('dragend', (e) => {
    const tile = e.target.closest('.tile');
    if (!tile) return;
  
    tile.style.visibility = 'visible';
  });
  


  // TILE RACK
  const MAX_RACK_TILES = 7;
  const tileRack = document.getElementById('tile-rack');
  
  // letters you currently have PNGs for
  const availableTiles = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  function drawTiles() {
    while (
      tileRack.children.length < MAX_RACK_TILES &&
      lettersbank.length > 0
    ) {
      const index = Math.floor(Math.random() * lettersbank.length);
      const letter = lettersbank[index];
  
      // Skip letters without images
      if (!availableTiles.includes(letter)) continue;
  
      lettersbank.splice(index, 1);
  
      const tile = document.createElement('div');
      tile.classList.add('gamespace', 'tile');
      tile.draggable = true;
      tile.id = `tile-${letter}-${crypto.randomUUID()}`;
      tile.dataset.letter = letter;
  
      const img = document.createElement('img');
      img.src = `visuals/tiles/${letter}.png`;
      img.alt = letter;
      img.draggable = false;
  
      tile.appendChild(img);
      tileRack.appendChild(tile);
    }
  }
  
  // Initial draw
  drawTiles();
  

