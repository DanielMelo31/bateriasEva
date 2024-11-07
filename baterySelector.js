function fillTable(data) {
    const tableBody = document.querySelector('#data-table tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const instrumentCell = document.createElement('td');

        // Crear enlace para el nombre
        const nameLink = document.createElement('a');
        nameLink.href = `detalle_bateria.html?id=${item.id}`;
        nameLink.textContent = item.nombre;

        nameCell.appendChild(nameLink);
        instrumentCell.textContent = item.instrumento;

        row.appendChild(nameCell);
        row.appendChild(instrumentCell);
        tableBody.appendChild(row);
    });
}

// Cargar datos del archivo JSON
document.addEventListener('DOMContentLoaded', () => {
    fetch('escalas.json')
        .then(response => response.json())
        .then(data => fillTable(data))
        .catch(error => console.error('Error al cargar el JSON:', error));
});