$(document).ready(function($){
    $("#txt_docs").mask("999.999.999-99");
})

function getDocument(){
    console.log("Foi");
    let Documento;
    Documento = document.getElementById('txt_docs').value;
    console.log(Documento);
}
