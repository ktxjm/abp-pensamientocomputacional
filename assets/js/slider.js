
     // Inicializa el slider de citas usando Swiper
     var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 4000, // Cambia cada 4 segundos (ajusta según lo necesites)
        },
        // Agrega la navegación por botones
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Ajusta la configuración para mostrar una diapositiva a la vez
        slidesPerView: 1, // Muestra solo una diapositiva a la vez
    });

