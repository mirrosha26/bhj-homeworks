document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = modal.querySelector('.modal__close');

    function isModalShown() {
        console.log("Current cookies:", document.cookie);
        return document.cookie.split(';').some((item) => item.trim().startsWith('modalShown=true'));
        
    }

    function setModalCookie() {
        document.cookie = "modalShown=true; max-age=31536000; path=/";
        console.log("Current cookies:", document.cookie);
    }    

    if (!isModalShown()) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', function() {
        modal.classList.remove('modal_active');
        setModalCookie();
    });
});
