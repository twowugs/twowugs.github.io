
/* HEHE! SEARCHBAR! */

//set all entries to visible on load
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class .log-entry-grid
    var elements = document.querySelectorAll('.log-entry-grid');

    // Loop through each element
    elements.forEach(function(element) {
        // Apply styles to each element
        element.style.visibility = 'visible';
        element.style.display = 'grid';
    });
});

// when the user hits enter, unfocus from the search box
document.addEventListener('DOMContentLoaded', (event) => {
    const logSearchInput = document.getElementById('logSearch');
    logSearchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchKeyword();
            logSearchInput.blur();
        }
    });
});

function searchKeyword() {
    //select keyword(s)
    let keyword = document.getElementById('logSearch').value.trim().toLowerCase();
    if (!keyword) {
        let logEntryElements = Array.from(document.getElementsByClassName('log-entry-grid'));
        for(var i = 0; i < logEntryElements.length; i++){
            logEntryElements[i].style.visibility = "visible"; 
            logEntryElements[i].style.display = "grid"; 
        }
        //alert('Please enter a keyword to search');
        alert('hmmm.. nothing. try again?');
        return;
    } else {

    // collect all log entries
    let logEntryElements = Array.from(document.getElementsByClassName('log-entry-grid'));
    console.log(logEntryElements);
    // find all entries that contain 'keyword'
    let keywordElements = document.getElementsByClassName(keyword);
    let searchArray = Array.from(keywordElements);

    // display search results
    if (searchArray.length === 0) {
        console.log('No elements found with the class name:', keyword);
        alert('hmmm.. nothing. try again?');
    } else {
        console.log('Search results:', searchArray);
        console.log('ALL ENTRIES:', logEntryElements);
        for(var i = 0; i < logEntryElements.length; i++){
            logEntryElements[i].style.display = "none"; 
        }
        for(var i = 0; i < searchArray.length; i++){
            searchArray[i].style.visibility = "visible"; 
            searchArray[i].style.display = "grid"; 
        }

    }

    }
}
