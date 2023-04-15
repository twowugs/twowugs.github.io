//all of the following code is for the gallery lightboxes
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    //scroll(0,0);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
//var span = document.getElementsByClassName("close")[0];

//span.onclick = function() {
  //modal.style.display = "none";
//}

//------------------------------------------------------------------------------------
//editing below to add arrows maybe??

// add click event listener
document.getElementById('next').addEventListener('click', () => {
  // convert nodelist to array
  const imageElements = [...images];
  // get index of current image
  const index = imageElements.map(element => element.src).indexOf(modalImg.src);
  // get new index, use ternary expression to loop back to 0 index if at end of list
  const newIndex = index === imageElements.length - 1 ? 0 : index + 1
  // set new image src
  modalImg.src = imageElements[newIndex].src;
});
// add click event listener
document.getElementById('prev').addEventListener('click', () => {
  // convert nodelist to array
  const imageElements = [...images];
  // get index of current image
  const index = imageElements.map(element => element.src).indexOf(modalImg.src);
  // get new index, use ternary expression to loop back to end if at 0 index
  const newIndex = index === 0 ? imageElements.length - 1 : index - 1
  // set new image src
  modalImg.src = imageElements[newIndex].src;
});