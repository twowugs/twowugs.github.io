
// it's a text loop. it loops the text.
// oh, yeem?

var loopElements = document.getElementsByClassName("loop-these");
// collect up the lines of text we want displayed

async function loopText() {
    var loopElementsArray = Array.from(loopElements);
    // put those lines of text into an array
    console.log(loopElementsArray);
    // check array contents

    for (let i = 0; i < loopElementsArray.length; i++) {
        // loop through array contents and toggle visibility for each
        await new Promise(resolve => {
            setTimeout(() => {
                loopElementsArray[i].classList.add("visible");
                console.log("Index:", i, "Current text:", loopElementsArray[i].textContent);
                // log visible text content
                if (i - 1 >= 0) {
                    loopElementsArray[i - 1].classList.remove("visible");
                    // hide previous element text
                } else {
                    loopElementsArray[loopElementsArray.length - 1].classList.remove("visible");
                    // hide text while accounting for length of the array
                }
                resolve();
            }, 2000);
            // wait 2 seconds before displaying the next text element
        });
    }
        /*delay before restarting the loop otherwise 
        we get a "too much recursion" error*/
        /* lovely stuff, right? */
        await new Promise(resolve => setTimeout(resolve, 2000));
        // restart the loop
        loopText();
}

loopText(); 
// call loopText function
