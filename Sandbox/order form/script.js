document.getElementById("orderForm").addEventListener("input", updateOrderSummary);

const prices = {
    classic: 20,
    strawberry: 5,
    // Add other items and their prices
};

function updateOrderSummary() {
    const orderedItems = document.getElementById("ordered-items");
    const totalPriceElement = document.getElementById("total-price");
    let total = 0;
    orderedItems.innerHTML = "";

    for (const item in prices) {
        const quantity = parseInt(document.getElementById(item)?.value || 0);
        if (quantity > 0) {
            const cost = quantity * prices[item];
            total += cost;
            const itemRow = document.createElement("p");
            itemRow.textContent = `${item}: ${quantity} x $${prices[item]} = $${cost}`;
            orderedItems.appendChild(itemRow);
        }
    }
    totalPriceElement.textContent = total.toFixed(2);
}

document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Order Submitted! Processing Payment...");
    // Implement payment processing and order confirmation logic
});
