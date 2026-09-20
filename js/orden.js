function cambiarModulo(idModulo, elementoClick) {
    // 1. Oculta todos los módulos quitando la clase active
    const modulos = document.querySelectorAll('.modulo-seccion');
    modulos.forEach(m => m.classList.remove('active'));
    
    // 2. Desmarca todas las pestañas de menú quitando active
    const links = document.querySelectorAll('.moqups-nav a');
    links.forEach(l => l.classList.remove('active'));
    
    // 3. Muestra solo la sección que seleccionaste
    document.getElementById(idModulo).classList.add('active');
    
    // 4. Marca la pestaña clickeada como seleccionada
    elementoClick.classList.add('active');
}