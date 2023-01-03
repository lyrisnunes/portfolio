 function abrirMenu(){
    let menuMobile = document.querySelector('.header-mobile')
        if(menuMobile.classList.contains('abrir')) {
            menuMobile.classList.remove('abrir');
        } else {
            menuMobile.classList.add('abrir');
        }
    }
 