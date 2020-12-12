function validarEdad() {
    confirm = confirm("¿Usted mayor de 18 años?")
    if (!confirm) {
        var notification = new Notification("Tiene que ser mayor de edad para poder hacer parte de nuestra comunidad")

    }
}

function validarBusqueda() {
    licencia = document.getElementsByName("licencia")[0].value;
    imagen = document.getElementsByName("barra-busqueda")[0].value;
    if (imagen.length <= 3) {
        alert("Busqueda demasiado corta");
        return;
    }
    if (licencia == "0") {
        alert("buscando en imagenes exclusivas");
    }
    if (licencia == "1") {
        alert("buscando en imagenes gratis");
    }

}
