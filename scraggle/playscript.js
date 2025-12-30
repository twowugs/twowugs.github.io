
let fileContent = ""; // Temporarily store file text
let wordBank = [];    // Final array of words

//DISCLAIMER I MADE THE ROOBOTS DO THIS AND I'LL EDIT IT LATER
// Step 1: Read the file but don't generate wordBank yet
document.getElementById('inputfile').addEventListener('change', function () {
    const fr = new FileReader();
    fr.onload = function () {
        fileContent = fr.result; // store file content
        console.log("File loaded, ready to generate wordBank");
    };
    fr.readAsText(this.files[0]);
});

// Step 2: Generate wordBank when button is pressed
document.getElementById('generateBtn').addEventListener('click', function () {
    if (!fileContent) {
        alert("Please select a file first!");
        return;
    }
    // Split into words/lines
    wordBank = fileContent.split(/\r?\n/).map(w => w.trim()).filter(Boolean);
    console.log("Word bank generated:", wordBank);
    alert(`Word bank generated with ${wordBank.length} words`);
});

// Step 3: Search the wordBank
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

searchBtn.addEventListener("click", () => {
    const query = searchBox.value.trim().toLowerCase();
    const matches = wordBank.filter(word => word.toLowerCase().includes(query));
    results.innerHTML = matches.length
        ? matches.map(w => `<li>${w}</li>`).join('')
        : "<li>No matches found</li>";
});