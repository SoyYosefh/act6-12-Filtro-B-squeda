function filterList() {
    // Obtener el valor de búsqueda
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    // Obtener la lista de elementos
    var items = document.querySelectorAll('#itemList li');
    
    // Filtrar los elementos según el texto ingresado
    items.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
