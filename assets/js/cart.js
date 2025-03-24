document.addEventListener("DOMContentLoaded", function () {
    const toggleSummary = document.querySelector(".toggle-summary");
    const orderSummary = document.querySelector(".order-summary");

    toggleSummary.addEventListener("click", function () {
        orderSummary.classList.toggle("active");
    });
});
