let bill = document.getElementById('bill');
let people = document.getElementById('people');


let five = document.getElementById('five');
let ten = document.getElementById('ten');
let fifteen = document.getElementById('fifteen');
let twemtyFive = document.getElementById('twemty-five');
let fifty = document.getElementById('fifty');
let custom = document.getElementById('custom');

let tip = document.getElementById('tip')
let total = document.getElementById('total');


bill.value = 0
people.value = 0


total.innerHTML = (0).toFixed(2)
tip.innerHTML = (0).toFixed(2)

custom.addEventListener("click", (e) => {
    e.preventDefault();
        // Create an input element
        let customInput = document.createElement('input');
        customInput.type = 'text';
        customInput.className = 'custom-input';
    
    
        // Replace the custom button with the input element
        custom.replaceWith(customInput);
    
        // Focus the input field so the user can start typing immediately
        customInput.focus();
    
        // Add an event listener to handle when the user finishes typing
        customInput.addEventListener('blur', () => {
            // When the input loses focus, convert it back to a button with the entered value
            let customValue = customInput.value;

    
            custom.innerHTML = customValue + '%';
          
            customInput.replaceWith(custom);
        })
})