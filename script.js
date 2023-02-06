let loaded = 0;
const darkModeCheck = (localStorage.getItem("dark") !== null);
const hideModeCheck = (localStorage.getItem("hide") !== null);

if (darkModeCheck == false) {
    localStorage.setItem("dark", 0);
}

if (hideModeCheck == false) {
    localStorage.setItem("hide", 0);
}

let darkModeStatus = localStorage.getItem("dark");
let hideModeStatus = localStorage.getItem("hide");

if (darkModeStatus == 1) {
    dark();
}

if (hideModeStatus == 1) {
    hide();
}


changeColor();

loaded++;



function updateAnimation() {
    const expand = parseInt(document.querySelector("#expand").value, 10);
    const contract = parseInt(document.querySelector("#contract").value, 10);
    const hold = parseInt(document.querySelector("#hold").value, 10);
    const total = expand + contract + hold;
    const animation = document.querySelector(".animation");

    animation.style.setProperty("--expand-duration", `${expand}s`);
    animation.style.setProperty("--contract-duration", `${contract}s`);
    animation.style.setProperty("--hold-duration", `${hold}s`);
    animation.style.setProperty("--total-duration", `${total}s`);

    const expandP = (expand / total) * 100;
    const holdP = ((hold / total) * 100) + expandP;
    const contractP = ((contract / total) * 100) + holdP;
    const keyframes = `@keyframes breath {
  0% {
    background-color: var(--primary-color);
    width: var(--small);
    height: var(--small);
    border-radius: calc(var(--small) / 2);
  }
  ${expandP}% {
    background-color: var(--secondary-color);
    width: var(--large);
    height: var(--large);
    border-radius: calc(var(--large) / 2);
    animation-timing-function: ease-in;
    animation-duration: var(--expand-duration);
  }
  ${holdP}% {
    background-color: var(--hold-color);
    width: var(--large);
    height: var(--large);
    border-radius: calc(var(--large) / 2);
    animation-timing-function: ease-out;
    animation-duration: var(--hold-duration);
  }
  ${contractP}% {
    background-color: var(--primary-color);
    width: var(--small);
    height: var(--small);
    border-radius: calc(var(--small) / 2);
    animation-timing-function: ease-out;
    animation-duration: var(--contract-duration);
  }
  
}`;

    const style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);

}

function easy() {
    document.querySelector("#expand").value = "3";
    document.querySelector("#contract").value = "3";
    document.querySelector("#hold").value = "3";
    updateAnimation();
}

function unwind() {
    document.querySelector("#expand").value = "4";
    document.querySelector("#contract").value = "5";
    document.querySelector("#hold").value = "8";
    updateAnimation();
}

function calm() {
    document.querySelector("#expand").value = "4";
    document.querySelector("#contract").value = "6";
    document.querySelector("#hold").value = "0";
    updateAnimation();
}

function calmplus() {
    document.querySelector("#expand").value = "4";
    document.querySelector("#contract").value = "6";
    document.querySelector("#hold").value = "2";
    updateAnimation();
}

document.querySelector("#expand").addEventListener("input", updateAnimation);
document.querySelector("#contract").addEventListener("input", updateAnimation);
document.querySelector("#hold").addEventListener("input", updateAnimation);

function hide() {
    let buttons = document.querySelector(".button-container");
    let inputs = document.querySelector(".inputs");
    let inputsId = document.getElementById("inputsId");
    let div = document.getElementById('click');
    let buttons2 = document.querySelector(".button-containter-right");
    let animation = document.querySelector(".animation");
    let main = document.querySelector(".main");
    let menuPhone = document.querySelector(".menu-phone");  

    if (inputsId.style.display == "none") {
        buttons.style.display = "block";
        buttons2.style.display = "block";
        inputsId.style.display = "";
        menuPhone.style.display = "";
        document.getElementById('click').removeEventListener('click', hide);
        animation.style.setProperty("--large", `200px`);
        main.style.setProperty("--main-large", `300px`);
        localStorage.setItem("hide", 0);

    } else {
        buttons.style.display = "none";
        buttons2.style.display = "none";
        inputsId.style.display = "none";
        menuPhone.style.display = "none";
        document.getElementById('click').addEventListener('click', hide);
        animation.style.setProperty("--large", `400px`);
        main.style.setProperty("--main-large", `500px`);
        
        localStorage.setItem("hide", 1);
    }

}   

function dark() {
    document.body.classList.toggle('dark-mode');
    darkModeStatus = localStorage.getItem("dark");

    if (loaded == 0) {

    } else if (darkModeStatus == 1) {
        localStorage.setItem("dark", 0);
    } else {
        localStorage.setItem("dark", 1);
    }
}


function changeColor() {
    const savedColorcheck = (localStorage.getItem("color") !== null);

    if (savedColorcheck == false) {
        localStorage.setItem("color", 0);
    }

    let savedColor = localStorage.getItem("color");

    let buttons = document.querySelector(".button-container");
    let inputs = document.querySelector(".inputs");
    let inputsId = document.getElementById("inputsId");
    let div = document.getElementById('click');
    let buttons2 = document.querySelector(".button-containter-right");
    let animation = document.querySelector(".animation");
    let main = document.querySelector(".main");
    let body = document.querySelector(".bodyselector");
    let dropdownmenu = document.querySelector(".dropdown-menu");
    let arraylength = colors.length;
    let colorSelect = 0;

    if (loaded == 0) {
        colorSelect = savedColor;
        console.log("ran 1");
    } else if ((arraylength - 1) <= savedColor) {
        colorSelect = 0;
        localStorage.setItem("color", colorSelect);
        console.log("ran 2");
    } else {
        colorSelect = savedColor;
        colorSelect++;
        localStorage.setItem("color", colorSelect);
        console.log("ran 3");
    }


    const [, primaryColor, secondaryColor, holdColor, buttonColor, buttonBorderColor, borderColor, textColor] = colors[colorSelect];

    animation.style.setProperty("--primary-color", primaryColor);
    animation.style.setProperty("--secondary-color", secondaryColor);
    animation.style.setProperty("--hold-color", holdColor);
    buttons.style.setProperty("--button-color", buttonColor);
    buttons.style.setProperty("--button-border-color", buttonBorderColor);
    buttons2.style.setProperty("--button-color", buttonColor);
    buttons2.style.setProperty("--button-border-color", buttonBorderColor);
    inputs.style.setProperty("--border-color", borderColor);
    body.style.setProperty("--text-color", textColor);
    dropdownmenu.style.setProperty("--button-color", buttonColor);
    dropdownmenu.style.setProperty("--button-border-color", buttonBorderColor);

}   


