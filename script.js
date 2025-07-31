const buttons = document.querySelectorAll('.empowering-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => {
            btn.classList.remove('active-empowering-button');
        });
        this.classList.add('active-empowering-button');
    });
});
const solutionsButtons = document.querySelectorAll('.solutions-button');
solutionsButtons.forEach(button => {
    button.addEventListener('click', function() {
        solutionsButtons.forEach(btn => {
            btn.classList.remove('active-solutions-button');
        });
        this.classList.add('active-solutions-button');
    });
});
window.addEventListener('load', () => {
    const loader = document.querySelector('.loadingspinner');
    const container = document.querySelector('.container');
    setTimeout(() => {
        loader.style.opacity = '0';
        container.style.opacity = '1';
    }, 2000); // 2 секунди
});