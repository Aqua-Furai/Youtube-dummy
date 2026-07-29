document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const hide = document.getElementById('hide')

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            hide.classList.toggle('collapsed');
        });
    }
});