document.addEventListener('DOMContentLoaded', function() {
    const dropdownValues = document.querySelectorAll('.dropdown__value');
    dropdownValues.forEach(dropdownValue => {
        dropdownValue.addEventListener('click', function() {
            const dropdownList = this.nextElementSibling;
            dropdownList.classList.toggle('dropdown__list_active');
        });
    });

    const dropdownLinks = document.querySelectorAll('.dropdown__link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownItem = this.closest('.dropdown__item');
            const dropdown = dropdownItem.closest('.dropdown');
            const dropdownValue = dropdown.querySelector('.dropdown__value');

            dropdownValue.textContent = this.textContent;
            dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        });
    });
});