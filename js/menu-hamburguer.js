const menu_hamburger = document.querySelector('.menu-hamburguer')

menu_hamburger.addEventListener('click', () => {

  let sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active')
})