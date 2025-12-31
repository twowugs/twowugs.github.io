
let fileContent = ""; // Temporarily store file text
let wordBank = [];    // Final array of words

const iconStatus = document.getElementById('success-icon');
iconStatus.classList.add('hidden');
iconStatus.classList.remove('visible');

//DISCLAIMER I MADE THE ROOBOTS DO THIS AND I'LL EDIT IT LATER
//read the file then generate wordbank array
document.getElementById('inputfile').addEventListener('change', function () {
    const fr = new FileReader();
    fr.onload = function () {
        fileContent = fr.result; // store file content
        console.log("File uploaded, ready to generate wordBank");
        // generate wordbank
        wordBank = fileContent.split(/\r?\n/).map(w => w.trim()).filter(Boolean);
        console.log("Word bank generated:", wordBank);
        alert(`generated wordbank of ${wordBank.length} words`);
        // display successfulupload incicator
        iconStatus.classList.add('visible');
        iconStatus.classList.remove('hidden');
        };
    fr.readAsText(this.files[0]);
});


/*
// Generate wordBank when button is pressed
document.getElementById('generateBtn').addEventListener('click', function () {
    if (!fileContent) {
        alert("download 'dict.csv !");
        return;
    }
    // Split into words/lines
    wordBank = fileContent.split(/\r?\n/).map(w => w.trim()).filter(Boolean);
    console.log("Word bank generated:", wordBank);
    alert(`Word bank generated with ${wordBank.length} words`);
});
*/

/* // FOR TESTING PURPOSES ONLY
// SEARCH the wordbank
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
*/