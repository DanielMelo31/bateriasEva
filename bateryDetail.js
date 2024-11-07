// Función para obtener los parámetros de la URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id')
    };
}

// Función para mostrar los detalles del elemento
function showDetails(data) {
    const params = getQueryParams();
    const item = data.find(d => d.id == params.id);
    if (item) {
        document.getElementById('detalle-titulo').textContent = item.nombre;
        document.getElementById('detalle-proposito').textContent = item.proposito;
        document.getElementById('detalle-instrumento').textContent = item.instrumento;
        document.getElementById('detalle-validacion').textContent = item.validacion;
        document.getElementById('detalle-referencias').textContent = item.referencias;
        var imageDetail = document.getElementById('detalle-imagen');
        imageDetail.src = item.imagen;
        imageDetail.alt = item.nombre;
    } else {
        document.getElementById('detalle-titulo').textContent = 'Elemento no encontrado';
        document.getElementById('detalle-tabla').style.display = 'none';
    }
}

// Cargar datos del archivo JSON
document.addEventListener('DOMContentLoaded', () => {
    fetch('escalas.json')
        .then(response => response.json())
        .then(data => showDetails(data))
        .catch(error => console.error('Error al cargar el JSON:', error));
});