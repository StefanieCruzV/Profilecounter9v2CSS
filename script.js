console.log("page loaded...");
var profilename = document.querySelector('#profileName');

function changeName(element){
    //console.log(element);
    //console.log(profilename);
    profilename.innerText= "Stefanie A"
}


var liErase1 = document.querySelector('#li1');
var liErase2 = document.querySelector('#li2');
var number = document.querySelector('#number');
var contconection=2;

//console.log(liErase);

function erase1( element){
 //console.log(element);
  liErase1.remove();
}
function erase2( element){
    //console.log(element);
    liErase2.remove();
}

function increasenum(element){
    contconection ++;
    number.innerText = contconection + " ";
}

function decreasenum(element){

    contconection --;
    number.innerText = contconection + " ";
}