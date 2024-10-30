function mostrarInformacion(nombre, info, imagen) {
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('info').textContent = info;
    document.getElementById('modal-imagen').src = imagen;
    document.getElementById('modal').style.display = "block";
}

function cerrarModal() {
    document.getElementById('modal').style.display = "none";
}