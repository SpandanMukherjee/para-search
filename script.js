function search(event, ele) {
    
    if (event.key === 'Enter' || event.type === "click") {
        let query = encodeURIComponent(ele.value.trim());
        let engine = document.getElementById('search-engine').value;
        
        if (query) {
            window.location.href = `${engine}?q=${query}`;
        }
    }
}

let searchButton = document.getElementById("search-btn");
let inputField = document.getElementById("input");

inputField.addEventListener("keydown", function(event) {
    search(event, inputField);
});

searchButton.addEventListener("click", function(event) {
    search({type : "click"}, inputField);
});
