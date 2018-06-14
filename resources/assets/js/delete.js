$(function () {
    $('#enviar').on("click", deleteProduct);
    $('button[name="btnModal"]').on("click",mostrarModal);
});

function deleteProduct() {
    let id =  $('#enviar').attr("data-idProductEnviar");
    axios.delete('/products/'+id)
        .then(function (response) {
            console.log(response);
            $("#product"+id).remove();
            $("#myModal").modal("hide");
        })
        .catch(function (error) {
            console.log(error);
            $("#myModal").modal("hide");
        }).then(function(){
        $('#enviar').attr("data-idProductEnviar","");
    });
}

function mostrarModal(e) {
    let botonPulsado = e.target;
    let idProduct = $(botonPulsado).attr("data-idProduct");
    $('#enviar').attr("data-idProductEnviar",idProduct);
    $("#myModal").modal();
}