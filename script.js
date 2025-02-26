// Search Function
function search(event) {
    if (event.key === 'Enter' || event.type === "click") {
        let inputField = document.getElementById("input");
        let query = encodeURIComponent(inputField.value.trim());
        let engine = document.getElementById("search-engine").value;

        if (query) {
            window.location.href = `${engine}?q=${query}`;
        }
    }
}

// Event Listeners
document.getElementById("input").addEventListener("keydown", search);
document.getElementById("search-btn").addEventListener("click", search);
