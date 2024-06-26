document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.font-size');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(event) {
            event.preventDefault();
            fontSizeControls.forEach(control => control.classList.remove('font-size_active'));
            this.classList.add('font-size_active');
            const fontSize = this.dataset.size;
            book.classList.remove('book_fs-small', 'book_fs-big');
            if (fontSize) {
                book.classList.add(`book_fs-${fontSize}`);
            }
        });
    });
});
