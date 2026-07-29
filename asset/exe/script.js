document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
});