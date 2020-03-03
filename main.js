// sayings button instance
const sayingsButton = document.getElementById('sayingsButton');
const sayingsText = document.getElementById('sayingsText');

// counter
let counter = 0;

// array of sayings
const sayingsArr = [
    '"Time is money." - Benajmin Franklin',
    '"Time brings all things to pass." - Aeschylus',
    '"The future is uncertain but the end is always near." - Jim Morrison'
];

// sayings button onclick function
sayingsButton.onclick = function() {
    if (counter <= sayingsArr.length - 1) {
        sayingsText.innerHTML = sayingsArr[counter];
        counter++;
    } else {
        counter = 0;
        sayingsText.innerHTML = sayingsArr[counter];
        counter++;
    }
};
