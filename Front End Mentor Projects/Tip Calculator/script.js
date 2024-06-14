document.addEventListener('DOMContentLoaded', () => {
    let bill = document.getElementById('bill').value;

    let five = document.getElementById('five');
    let ten = document.getElementById('ten');
    let fifteen = document.getElementById('fifteen');
    let twemtyFive = document.getElementById('twemty-five');
    let fifty = document.getElementById('fifty');
    let custom = document.getElementById('custom');
    let percentage = document.querySelectorAll(".percentage");

    let people = document.getElementById('people');

    let tip = (bill * percentage.value) / people;
    let total = (bill / people) + tip;


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

});
