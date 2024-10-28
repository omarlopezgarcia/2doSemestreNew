(function () {


    // Crear el botón "Volver arriba"
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '⬆ Volver Arriba';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none'; // Ocultar inicialmente
    backToTopButton.style.padding = '10px';
    backToTopButton.style.background = '#1b3231';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '1';
    document.body.appendChild(backToTopButton);

    // Mostrar/ocultar el botón al hacer scroll
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Volver al inicio al hacer click en el botón
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

})();
