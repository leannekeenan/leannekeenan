document.addEventListener('DOMContentLoaded', function () {
    // Personal Information Inputs
    const firstNameOrder = document.querySelector('#firstName-order');
    const lastNameOrder = document.querySelector('#lastName-order');
    const emailAddressOrder = document.querySelector('#email-order');
    const phoneNumberOrder = document.querySelector('#phoneNumber-order');

    // Order Review and Items
    const orderReview = document.querySelector('.order-review');
    const orderSubmit = document.querySelector('#order-submit');

    // Item Inputs (Changed to numbers for quantity input)
    const items = [
        { id: 'classic', name: 'Classic' },
        { id: 'chocolate', name: 'Chocolate' },
        { id: 'pumpkin', name: 'Pumpkin' },
        { id: 'cookies', name: 'Cookies' },
        { id: 'speculoos', name: 'Speculoos' },
        { id: 'nilla', name: 'Nilla' },
        { id: 'ginger', name: 'Ginger' },
        { id: 'strawberry', name: 'Strawberry' },
        { id: 'cherry', name: 'Cherry' },
        { id: 'raspberry', name: 'Raspberry' },
        { id: 'lemon', name: 'Lemon' },
        { id: 'apple', name: 'Apple' },
        { id: 'caramel', name: 'Caramel' },
        { id: 'white-chocolate', name: 'White Chocolate' },
        { id: 'dark-chocolate', name: 'Dark Chocolate' },
    ];

    // Function to update ordered items based on input values
    function updateOrderedItems() {
        const selectedItems = [];

        items.forEach(item => {
            const input = document.querySelector(`#${item.id}`);
            
            // Check if input element exists before accessing its value
            if (input) {
                const quantity = parseInt(input.value) || 0;

                if (quantity > 0) {
                    selectedItems.push({ name: item.name, quantity: quantity });
                }
            }
        });

        // Display the selected items in the order review
        displayReceipt(selectedItems);
    }

    // Display the order receipt in the order review section
    function displayReceipt(items) {
        orderReview.innerHTML = ''; // Clear previous content

        // Ensure the order review itself is styled (text color and font size)
        orderReview.style.color = "#FDF3E3"; // Light color for the review text
        orderReview.style.fontSize = '3rem'; // Larger font size for the review text

        if (items.length === 0) {
            orderReview.textContent = 'No items selected.';
        } else {
            let receiptHTML = `<h3>Order Review:</h3><ul>`;
            items.forEach(item => {
                receiptHTML += `<li>${item.name} (Quantity: ${item.quantity})</li>`;
            });
            receiptHTML += `</ul>`;
            orderReview.innerHTML = receiptHTML;
        }
    }

    // Add event listeners for item inputs (only add if the input exists)
    items.forEach(item => {
        const input = document.querySelector(`#${item.id}`);
        if (input) {
            input.addEventListener('input', updateOrderedItems);  // Update the order review when quantity is entered
        }
    });

    // Order Submission handler
    orderSubmit.addEventListener('click', function (e) {
        e.preventDefault();

        const orderDetails = {
            firstName: firstNameOrder.value,
            lastName: lastNameOrder.value,
            email: emailAddressOrder.value,
            phone: phoneNumberOrder.value,
            items: []
        };

        // Collect ordered items based on quantity
        items.forEach(item => {
            const input = document.querySelector(`#${item.id}`);
            const quantity = parseInt(input.value) || 0;
            if (quantity > 0) {
                orderDetails.items.push({ name: item.name, quantity: quantity });
            }
        });

        // You can replace this with an actual submission action (e.g., send to server)
        console.log('Order Submitted:', orderDetails);
    });

    // Example JavaScript code to dynamically insert items into the ordered-items div
const orderedItems = document.getElementById('ordered-items');

// Assuming items are stored in an array

items.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item; // Set text content
    orderedItems.appendChild(p); // Append it to the div
});

});
