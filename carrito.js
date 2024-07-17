document.addEventListener('DOMContentLoaded', function() {
    const carritoItemsContainer =
     document.getElementById('carrito-items');
    const carritoTotalSpan = 
    document.getElementById('carrito-total');
    const checkoutButton = 
    document.getElementById('checkout');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoTotal = 0;

    function actualizarCarrito() {
        carritoItemsContainer.innerHTML = '';
        carritoTotal = 0;
        carrito.forEach((producto, index) => {
            const item = document.createElement('div');
            item.classList.add('carrito-item');

            item.innerHTML = `
                <img src="img/${producto.nombre}.jpg" alt="${producto.nombre}">
                <div class="carrito-item-info">
                    <h4>${producto.nombre}</h4>
                    <p>Color: ${producto.color}</p>
                    <p>Talla: ${producto.talla}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Precio Unitario: $${producto.precioUnitario}</p>
                    <p>Total: $${producto.total}</p>
                    <button class="btn btn-danger eliminar-producto" data-index="${index}">Eliminar</button>
                </div>
            `;

            carritoItemsContainer.appendChild(item);
            carritoTotal += producto.total;
        });

        carritoTotalSpan.textContent = carritoTotal.toFixed(2);
    }

    carritoItemsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('eliminar-producto')) {
            const index = e.target.getAttribute('data-index');
            carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
        }
    });

    checkoutButton.addEventListener('click', function() {
        window.location.href = 'pago-envio.html';
    });

    actualizarCarrito();
});
