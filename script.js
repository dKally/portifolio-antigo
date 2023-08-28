
const btnDarkWeb = document.querySelector(".divDarkWeb");
const btnWhiteWeb = document.querySelector(".divWhiteWeb");
const btnLang = document.querySelector(".lang");

btnDarkWeb.addEventListener('click', ()=>{
    clickDarkWeb();
})
btnWhiteWeb.addEventListener('click', ()=>{
    clickWhiteWeb();
})
btnLang.addEventListener('click', ()=>{
    clickLang();
})

function clickDarkWeb(){
    document.querySelector('.navbar').classList.add('navWhite');
    document.querySelector('.box').classList.add('boxWhite');
    document.querySelector('.about').classList.add('linkWhite');
    document.querySelector('.projects').classList.add('linkWhite');
    document.querySelector('.contacts').classList.add('linkWhite');
    btnDarkWeb.classList.add('divDarkWebHide');
    btnWhiteWeb.classList.remove('divWhiteWebHide');
}

function clickWhiteWeb(){
    document.querySelector('.navbar').classList.remove('navWhite');
    document.querySelector('.box').classList.remove('boxWhite');
    document.querySelector('.about').classList.remove('linkWhite');
    document.querySelector('.projects').classList.remove('linkWhite');
    document.querySelector('.contacts').classList.remove('linkWhite');
    btnDarkWeb.classList.remove('divDarkWebHide');
    btnWhiteWeb.classList.add('divWhiteWebHide');
}

function clickLang(){
    document.querySelector('.langItem').classList.toggle('langItemHide');
}
