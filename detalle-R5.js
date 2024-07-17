document.addEventListener('DOMContentLoaded', function() {
    const precioBase = 99.95;
    const cantidadInput = document.getElementById('cantidad');
    const totalSpan = document.getElementById('total');
    const addToCartButton = document.getElementById('addToCart');
    const colorOptions = document.querySelectorAll('.color-option');
    let selectedColor = 'Blanco';

    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            selectedColor = this.dataset.color;
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    cantidadInput.addEventListener('input', updateTotal);

    addToCartButton.addEventListener('click', function() {
        const cantidad = cantidadInput.value;
        const talla = document.getElementById('talla').value;
        const total = precioBase * cantidad;

        const producto = {
            nombre: 'Sueter 3', // Aquí deberías ajustar el nombre del producto según corresponda
            color: selectedColor,
            talla: talla,
            cantidad: cantidad,
            precioUnitario: precioBase,
            total: total
        };

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        window.location.href = 'carrito.html';
    });

    function updateTotal() {
        const cantidad = parseInt(cantidadInput.value);
        const total = precioBase * cantidad;
        totalSpan.textContent = total;
    }
});