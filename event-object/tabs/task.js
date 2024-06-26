document.addEventListener('DOMContentLoaded', function() {
    const tabsContainers = document.querySelectorAll('.tabs');

    tabsContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(tab => tab.classList.remove('tab_active'));
                contents.forEach(content => content.classList.remove('tab__content_active'));

                tab.classList.add('tab_active');
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});