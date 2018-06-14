$(document).ready(function(){
    $("input[name='btnModal']").click(lanzarModal);
});

function lanzarModal(event) {
    let boton = event.target;
    let botonJquery = $(boton);
    let botonAceptarModal = $("#enviar");
    botonAceptarModal.attr("data-idProductEnviar",botonJquery.attr("data-idProduct"));
    $("#myModal").modal();
}