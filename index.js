const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuClose = document.querySelector('.burger-menu-close');
const burgerMenuLink = document.querySelectorAll('.burger-menu-link');

burgerIcon.addEventListener('click', function (e) {
    openBurgerMenu();
});

burgerMenuClose.addEventListener('click', function (e) {
    closeBurgerMenu();
});

burgerMenuLink.forEach(el => el.addEventListener('click', () => {
    closeBurgerMenu();
}));

document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('burger-icon') && !e.target.classList.contains('burger-item')) {
        closeBurgerMenu();
    }
});

function openBurgerMenu() {
    document.body.classList.add("lock")
    burgerMenu.classList.add('burger-menu-active');
}

function closeBurgerMenu() {
    document.body.classList.remove("lock")
    burgerMenu.classList.remove('burger-menu-active');
}

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('close_pop_up');
const popUp = document.getElementById('login_pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    
    })
closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
})

const openSignPopUp = document.getElementById('open_sign_pop_up');
const closeSignPopUp = document.getElementById('close_sign_pop_up');
const signPopUp = document.getElementById('sign_in_pop_up');
const closeSignPopUpOpenPopUp = document.getElementById('close_sign_pop_up_open_pop_up')

openSignPopUp.addEventListener('click', function(e){
    e.preventDefault();
    signPopUp.classList.add('active');
    popUp.classList.remove('active');
    })

closeSignPopUp.addEventListener('click', () => {
    signPopUp.classList.remove('active');
    })

closeSignPopUpOpenPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    signPopUp.classList.remove('active');
    popUp.classList.add('active');
    })

