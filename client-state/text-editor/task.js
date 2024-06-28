document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    if (localStorage.getItem('editorText')) {
        editor.value = localStorage.getItem('editorText');
    }
    editor.addEventListener('input', function() {
        localStorage.setItem('editorText', editor.value);
    });
});
