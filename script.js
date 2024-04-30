
//gallery idea change src img
let galleryImages = document.querySelectorAll('#sectionbottom .card-img-top');
// Loop 
galleryImages.forEach(function(image) {
    image.addEventListener("mouseover", function() {
        image.src = "plv2390-Red-list.png";
        console.log('changed');
    });
});
// change img src by color
let img=document.querySelector('#showProduct div img');
let greenbtn=document.getElementById('green');
let blackbtn=document.getElementById('black');
let pinkbtn=document.getElementById('pink');
greenbtn.addEventListener('click', function(){
    img.src= "congreen.png";
    console.log('green changed');
});
blackbtn.addEventListener('click', function(){
    img.src= "conblack.png";
    console.log('black changed');
});
pinkbtn.addEventListener('click', function(){
    img.src= "conpink.png";
    console.log('pink changed');
});