function search(event, ele) {

    if (event.key === 'Enter') {
        let query = encodeURIComponent(ele.value.trim());
        let engine = document.getElementById('search-engine').value;
        
        if (query) {
            window.location.href = `${engine}?q=${query}`;
        }
    }
}
