document.addEventListener('DOMContentLoaded', (event) => {
    var popup = document.getElementById('legal-popup');
    var openBtn = document.getElementById('open-legal');
    var closeBtn = document.getElementById('close-popup');

    openBtn.onclick = function() {
        popup.style.display = 'block';
    }

    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});