document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const genre = document.getElementById('searchGenre').value.toLowerCase();
    
    const books = Array.from(document.querySelectorAll('.card'));
    books.forEach(book => {
        const bookGenres = book.querySelector('.genre').textContent.toLowerCase();
        
        if (bookGenres.includes(genre)) {
            book.parentElement.style.display = 'block';
        } else {
            book.parentElement.style.display = 'none';
        }
    });
});