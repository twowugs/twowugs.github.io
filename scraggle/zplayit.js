// Source - https://stackoverflow.com/a
// Posted by Yuri Khristich, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-29, License - CC BY-SA 4.0
/*
var csv_file = File('dictionary.csv');
csv_file.open('r');
csv_file.encoding = 'utf-8';
var data = csv_file.read().split('/\r\n|\n/'); // split by lines
csv_file.close();
for (var row in data) data[row].split(','); // split all lines by comas

alert(data); // here is your 2d array
*/

/*
const dictionary = new File(
    [content],          // array of data (string, Blob, etc.)
    "dictionary.csv",         // filename
    { type: "text/csv" } // MIME type
  );

  console.log(dictionary);
  
*/

/*
fetch("dict.csv") {}
  .then(response => response.text())
  .then(text => {
    // split by line OR commas
    const array = text
      .trim()
      .split(/[\r\n,]+/);

    console.log(array);
  });

  */
/*
  async function csvToArray(filePath) {
    try {
        const response = await fetch(filePath);
        const text = await response.text();

        // Split into rows
        const rows = text.split(/\r\n|\n/);

        // Split each row by comma and flatten to 1D array
        const array = rows
            .flatMap(row => row.split(',').map(item => item.trim()))
            .filter(item => item !== ''); // remove empty cells

        return array;
    } catch (err) {
        console.error('Error loading CSV:', err);
        return [];
    }
}

// Usage example:
csvToArray('words.csv').then(array => {
    console.log(array);
    // Example output: ["apple", "banana", "cherry", "date"]
});
*/
/*
const reader = new FileReader();
reader.onload = function(e) {
    const text = e.target.result;
    const rows = text.split('\n').map(row => row.split(','));
    console.log(rows);
};
reader.readAsText(file);
*/

/*
var csv_file = File('https://drive.google.com/file/d/1fEF60FWKQ3Jx-tX4Ajoi5l_wycBCdBpu/view?usp=sharing');
csv_file.open('r');
csv_file.encoding = 'utf-8';
var data = csv_file.read().split('/\r\n|\n/'); // split by lines
csv_file.close();
for (var row in data) data[row].split(','); // split all lines by comas

alert(data); // here is your 2d array
*/
/*
fetch('https://github.com/twowugs/twowugs.github.io/blob/main/dictionary.txt')
  .then(res => res.text())
  .then(text => {
    const arr = text.split('\n'); // 1 element per line
    console.log(arr);
  });
  */
