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
let modal = document.getElementById("modal");

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
    modal.classList.remove("hide");

}

const copy = (event) => {
    event.preventDefault();
    console.log("copy clicked")
}

const getParams = (event) => {
    event.preventDefault();
    let chosenLength = parseInt(params.length.value);
    let validateLength = document.getElementById("validate-length");
    let validateBoxes = document.getElementById("validate-boxes");
    if (isNaN(chosenLength) || chosenLength < 8 || chosenLength > 128) {
        validateLength.classList.remove("hide");
    } else if (!params.specials.checked && !params.nums.checked && !params.uppers.checked && !params.lowers.checked && !isNaN(chosenLength)) {
        validateBoxes.classList.remove("hide");
        validateLength.classList.add("hide");
    } else if (!params.specials.checked && !params.nums.checked && !params.uppers.checked && !params.lowers.checked) {
        validateBoxes.classList.remove("hide");
    } 
    
    else {
        modal.classList.add("hide");
    }
    console.log(params.specials.checked);
    console.log(params.length.value);
    generate();
}

const generate = () => {
    if (params.specials.checked === true) {
        random(specialCharArr);
        choicesArr.push(...specialCharArr);
    }

    if (params.nums.checked === true) {
        random(numbersArr);
        choicesArr.push(...numbersArr);
    }

    if (params.lowers.checked === true) {
        random(lowerCaseArr);
        choicesArr.push(...lowerCaseArr);
    }

    if (params.uppers.checked === true) {
        random(upperCaseArr);
        choicesArr.push(...upperCaseArr);
    }

    finishGeneration();
}

const random = (arr) => {
    let randomNum = Math.floor(Math.random() * arr.length);
    generatedArr.push(arr[randomNum])
    console.log(generatedArr)
}

const finishGeneration = () => {
    console.log(choicesArr)
    for(let i = generatedArr.length; i < params.length.value; i++) {
        random(choicesArr);
    }

    display();
}

const display = () => {
    document.getElementById("display").value = generatedArr.join("");
}

document.getElementById("generate").addEventListener("click", startChoices);
document.getElementById("copy").addEventListener("click", copy);
// document.getElementById("specials").addEventListener("change", function () {setValues(specials);});
// document.getElementById("nums").addEventListener("change", function () {setValues(nums);})
// document.getElementById("lowers").addEventListener("change", function () {setValues(lowers);})
// document.getElementById("uppers").addEventListener("change", function () {setValues(uppers);})

document.getElementById("save").addEventListener("click", getParams);