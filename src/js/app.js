document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
    fixedNavigation();
});

function fixedNavigation() {

    const bar = document.querySelector('.header');
    //registrar Intersection Observer.
    const observer = new IntersectionObserver(function (entries) {
        if(entries[0].isIntersecting) {
           bar.classList.remove('fixed');
        } else {
            bar.classList.add('fixed');
        }
    })
    //Elemento a Observar.
    observer.observe(document.querySelector('.video'));
}

function scrollNav() {
    const links = document.querySelectorAll('.principal-navigation a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const seccion = document.querySelector(event.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        })
    });
}
