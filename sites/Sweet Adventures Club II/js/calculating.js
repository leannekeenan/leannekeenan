document.getElementById('calculate-order').addEventListener('click', function() {
    // Define prices per dozen
    const prices = {
        classic: 25,
        chocolate: 30,
        pumpkin: 28,
        'classic-cookies-cream': 32,
        'speculoos-cookies-cream': 32,
        'nilla-cookies-cream': 32,
        ginger: 27,
        strawberry: 5,
        cherry: 5,
        raspberry: 6,
        lemon: 5,
        apple: 5,
        caramel: 5,
        'white-chocolate': 7,
        'dark-chocolate': 7
    };

    // Initialize total price
    let total = 0;

    // Iterate through each flavor and topping and calculate total
    Object.keys(prices).forEach(item => {
        const quantity = document.getElementById(item) ? document.getElementById(item).value : 0;
        if (quantity > 0) {
            total += prices[item] * quantity;
        }
    });

    // Display total price
    document.getElementById('order-total').innerHTML = `Total: $${total.toFixed(2)}`;
});
