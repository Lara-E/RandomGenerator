const specialCharArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let choicesArr = [];

let generatedArr = [];

let specials = document.getElementById("specials");
let nums = document.getElementById("nums");
let lowers = document.getElementById("lowers");
let uppers = document.getElementById("uppers");
let length = document.getElementById("length");

// let specialsVal = document.getElementById("specials").value;
// let numsVal = document.getElementById("nums").value;
// let lowersVal = document.getElementById("lowers").value;
// let uppersVal = document.getElementById("uppers").value;
// let lengthVal = document.getElementById("length").value;


let params = {
    length: length, 
    specials: specials, 
    nums: nums, 
    uppers: uppers, 
    lowers: lowers
}


const startChoices = (event) => {
    event.preventDefault();
    console.log("gen clicked");
    document.getElementById("modal").classList.remove("hide")

}

const copy = (event) => {
    event.preventDefault();
    console.log("copy clicked")
}

const getParams = (event) => {
    event.preventDefault();
    if (isNaN(parseInt(params.length.value))) {

    }
       
   
    
    // $("#modal").modal("hide")
    // console.log(params.specials.checked);
    // console.log(params.length.value)

}

const setValues = (el) => {
    console.log(el)
    params.el = el.checked;
    // if (el.checked) {
    // } else {
    //     params.el = f;
    // }
    console.log(el.checked)
}

document.getElementById("generate").addEventListener("click", startChoices);
document.getElementById("copy").addEventListener("click", copy);
document.getElementById("specials").addEventListener("change", function () {setValues(specials);});
document.getElementById("nums").addEventListener("change", function () {setValues(nums);})
document.getElementById("lowers").addEventListener("change", function () {setValues(lowers);})
document.getElementById("uppers").addEventListener("change", function () {setValues(uppers);})

document.getElementById("save").addEventListener("click", getParams);