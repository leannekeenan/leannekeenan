document.addEventListener('DOMContentLoaded', () => {
    let bill = document.getElementById('bill');
    let five = document.getElementById('five');
    let ten = document.getElementById('ten');
    let fifteen = document.getElementById('fifteen');
    let twentyFive = document.getElementById('twenty-five'); // Fixed typo here
    let fifty = document.getElementById('fifty');
    let custom = document.getElementById('custom');
    let percentageButtons = [five, ten, fifteen, twentyFive, fifty]; // Renamed variable for clarity

    let people = document.getElementById('people');
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');

    // Initialize values to 0
    bill.value = (0).toFixed(2);
    people.value = (0);
    tip.innerHTML = (0).toFixed(2);
    total.innerHTML = (0).toFixed(2);

  

    // Custom percentage input handling remains unchanged
    custom.addEventListener("click", (e) => {
        e.preventDefault();
        let customInput = document.createElement('input');
        customInput.type = 'text';
        customInput.className = 'custom-input';

        custom.replaceWith(customInput);
        customInput.focus();

        customInput.addEventListener('blur', () => {
            let customValue = customInput.value;
            custom.innerHTML = customValue + '%';
            calculateTipAndTotal(); // Recalculate after setting custom percentage
        });
    });
});


