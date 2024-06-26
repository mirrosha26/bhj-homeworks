document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();

            const existingTooltip = document.querySelector('.tooltip_active');
            if (existingTooltip) {
                existingTooltip.remove();
            }

            if (tooltip.nextSibling.classList && tooltip.nextSibling.classList.contains('tooltip_active')) {
                tooltip.nextSibling.remove(); 
                return;
            }

            const tooltipDiv = document.createElement('div');
            tooltipDiv.className = 'tooltip tooltip_active';
            tooltipDiv.textContent = tooltip.getAttribute('title');

            const tooltipPos = tooltip.getBoundingClientRect();
            tooltipDiv.style.left = `${tooltipPos.left}px`;
            tooltipDiv.style.top = `${tooltipPos.bottom + 5}px`;

            tooltip.parentNode.insertBefore(tooltipDiv, tooltip.nextSibling);
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('has-tooltip')) {
            const activeTooltips = document.querySelectorAll('.tooltip_active');
            activeTooltips.forEach(tooltip => tooltip.remove());
        }
    }, true);
});
