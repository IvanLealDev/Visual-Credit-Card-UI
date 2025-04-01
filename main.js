const cardNumber = document.querySelector("#card-ui_front-number");
const cardNumberInput = document.querySelector("#card-number-input");

const cardHolder = document.querySelector("#card-ui_front-holder-name");
const cardHolderInput = document.querySelector("#card-holder-input");

const expMonth = document.querySelector("#card-ui_front-exp-month");
const expMonthInput = document.querySelector("#month-input");

const expYear = document.querySelector("#card-ui_front-exp-year");
const expYearInput = document.querySelector("#year-input");

const cvv = document.querySelector("#card-ui_back-cvv");
const cvvInput = document.querySelector("#card-cvv-input");
const cvvFront = document.querySelector("#card-ui_front");
const cvvBack = document.querySelector("#card-ui_back");

cardNumberInput.addEventListener("keyup", (e) => {
    let inputValue = e.target.value;
    if (!inputValue) {
        cardNumber.innerHTML = "1234 5678 9101 1112";
        return;
    }

    inputValue = Array.from(inputValue).reduce((acc, t, i) => {
        if (i > 0 && i % 4 === 0) acc += " ";
        acc += t;
        return acc;
    }, "");

    cardNumber.innerHTML = inputValue;
});

cardHolderInput.addEventListener("keyup", (e) => {
    let inputValue = e.target.value;
    cardHolder.innerHTML = inputValue || "Full Name";
});

expMonthInput.addEventListener("keyup", (e) => {
    let inputValue = e.target.value;
    expMonth.innerHTML = inputValue || "MM";
});

expYearInput.addEventListener("keyup", (e) => {
    let inputValue = e.target.value;
    expYear.innerHTML = inputValue || "YY";
});

cvvInput.addEventListener("focus", () => {
    cvvFront.style.transform = "perspective(1000px) rotateY(-180deg)";
    cvvBack.style.transform = "perspective(1000px) rotateY(0deg)";
});

cvvInput.addEventListener("blur", () => {
    cvvFront.style.transform = "perspective(1000px) rotateY(0deg)";
    cvvBack.style.transform = "perspective(1000px) rotateY(180deg)";
});

cvvInput.addEventListener("keyup", (e) => {
    cvv.innerHTML = e.target.value;
});