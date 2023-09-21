// Número de flores que deseas en el campo
const numeroDeFlores = 20; // Puedes ajustar este valor

// Función para crear una flor
function crearFlor() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    const center = document.createElement('div');
    center.className = 'center';
    const circle = document.createElement('div');
    circle.className = 'circle';
    const stem = document.createElement('div');
    stem.className = 'stem';

    // Crear pétalos
    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.transform = `rotate(${45 * i}deg)`;
        center.appendChild(petal);
    }

    center.appendChild(circle);
    flower.appendChild(center);
    flower.appendChild(stem);

    return flower;
}

// Agregar las flores al campo
const field = document.getElementById('field');
for (let i = 0; i < numeroDeFlores; i++) {
    const flower = crearFlor();
    field.appendChild(flower);
}
