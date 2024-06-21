document.getElementById('navbarToggle').addEventListener('click', function() {
    var menu = document.getElementById('navbarMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
