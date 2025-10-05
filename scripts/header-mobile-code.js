const header = document.querySelector('header');
const toggle = document.getElementById('menu-toggle');
toggle.addEventListener('click', () => 
{
    header.classList.toggle('active');
});
