document.addEventListener('DOMContentLoaded', function() {
    const resumenCarrito = document.getElementById('resumen-carrito');
    const formularioPagoEnvio = document.getElementById('pago-envio-form');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoTotal = 0;
    const costoEnvio = 3;

    function actualizarResumenCarrito() {
        resumenCarrito.innerHTML = '';
        carritoTotal = 0;

        carrito.forEach(producto => {
            const item = document.createElement('div');
            item.classList.add('resumen-item');

            item.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>Color: ${producto.color}</p>
                <p>Talla: ${producto.talla}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio Unitario: $${producto.precioUnitario}</p>
                <p>Total: $${producto.total}</p>
            `;

            resumenCarrito.appendChild(item);
            carritoTotal += producto.total;
        });

        const envioElement = document.createElement('p');
        envioElement.innerHTML = `<strong>Envío: $${costoEnvio.toFixed(2)}</strong>`;
        resumenCarrito.appendChild(envioElement);

        const totalElement = document.createElement('p');
        totalElement.innerHTML = `<strong>Total del Carrito: $${(carritoTotal + costoEnvio).toFixed(2)}</strong>`;
        resumenCarrito.appendChild(totalElement);
    }

    formularioPagoEnvio.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const provincia = document.getElementById('provincia').value;
        const distrito = document.getElementById('distrito').value;
        const ciudad = document.getElementById('ciudad').value;
        const corregimiento = document.getElementById('corregimiento').value;
        const metodoPago = document.querySelector('input[name="metodo-pago"]:checked').value;

        alert(`Pedido realizado por ${nombre} ${apellido}\nMétodo de Pago: ${metodoPago}\nDirección de Envío: ${provincia}, ${distrito}, ${ciudad}, ${corregimiento}\nEmail: ${email}\nTeléfono: ${telefono}`);

        // Aquí podrías agregar lógica para procesar el pago y enviar la información al servidor
    });

    actualizarResumenCarrito();
});
