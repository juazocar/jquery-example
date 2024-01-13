$("#regionesSelect").change(function(){
  
    var region = $("#regionesSelect").val();

    if(region != "0"){
        console.log("La región seleccionada es: "+region);
    }
   
});


$("#formulario").submit(function(){
    event.preventDefault();

    console.log('Llamado al evento submit del formulario');

    var correo = $("#exampleInputEmail1").val();
    var password = $("#exampleInputPassword1").val();

    console.log(correo);
    console.log(password);

    if(correo == ''){
        alert("El email no puede ir vacío");
    } else {
        $('#myModal').modal('show');
    }

   
})