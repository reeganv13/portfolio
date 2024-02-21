var menu=document.querySelector(".menu")
function showMenu(){
   menu.style.left="0%"
}
function closeMenu(){
    menu.style.left="-50%"
}

document.querySelector(".cv-btn").addEventListener("click", function() {
    // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
    var downloadLink = document.createElement("a");
    downloadLink.href = "REEGAN_J_Resume (7).pdf";
    downloadLink.download = "REEGAN_J_Resume (7).pdf";
    downloadLink.click();

});
var submit=document.querySelector(".Submit-btn")
var contactform=document.querySelector(".contact-form")
function submitbtn(){
 alert("form submited successfully")
 contactform.reset();

}