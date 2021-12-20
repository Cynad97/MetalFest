document.addEventListener('DOMContentLoaded', function () {
    createGallery();
});

function createGallery() {
    const gallery = document.querySelector('.gallery-images');

    for (let i = 1; i <= 12; i++) {
        const image = document.createElement('IMG');
        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.imageId = i;

        image.onclick = showImage;

        const list = document.createElement('LI');
        list.appendChild(image);

        gallery.appendChild(list);

    }
}

function showImage(event) {
    const id = parseInt(event.target.dataset.imageId);

    //Generar la imagen.
    const image = document.createElement('IMG');
    image.src = `build/img/big/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    //Cuando se da click, cerrar la imagen.
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove('pinup-body');
    }
    
    //Boton para cerrar la imagen.

    const closeImage = document.createElement('P');
    closeImage.textContent = 'X';
    closeImage.classList.add('btn-close');

    //Cuando se presiona, se cierra la imagen.
    closeImage.onclick = function () {
        overlay.remove();
        body.classList.remove('pinup-body');
    }

    overlay.appendChild(closeImage);

    //Mostrar en HTML.
    const body = document.querySelector('body');
    body.appendChild(overlay); //ApendChild es para agregas las variables dentro del codigo HTML.
    body.classList.add('pinup-body');

    console.log(image);

}