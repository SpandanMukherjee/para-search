document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-btn").setAttribute("selected-engine", "https://search.brave.com/search");
});

document.querySelector(".selected-option").addEventListener("click", function() {
    document.querySelector(".dropdown").classList.toggle("active");
});

document.querySelectorAll(".options a").forEach(option => {
    
    option.addEventListener("click", function() {
        let sel_name = this.textContent.trim();
        let sel_url = this.getAttribute("data-url");
        let sel_logo = this.querySelector("img").src;

        document.getElementById("selected-name").textContent = sel_name;
        document.getElementById("selected-logo").src = sel_logo
        document.getElementById("search-btn").setAttribute("selected-engine", sel_url);
        document.querySelector(".dropdown").classList.remove("active");
    });
});

function search(event) {
    if (event.key === 'Enter' || event.type === "click") {
        let inputField = document.getElementById("input");
        let query = encodeURIComponent(inputField.value.trim());
        let engine = document.getElementById("search-btn").getAttribute("selected-engine") ||  "https://search.brave.com/search"

        if (query) {
            window.location.href = `${engine}?q=${query}`;
        }
    }
}

document.getElementById("input").addEventListener("keydown", search);
document.getElementById("search-btn").addEventListener("click", search);