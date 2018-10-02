
$(".enviar").click(function(e) {
	e.preventDefault();
	var nombre = $("#nombre").val(),
	apellido = $("#apellido").val(),
	edad = $("#edad").val(),

	//"nombre del parámetro POST":valor
	//(el cual es el objeto guardado en las variables de arriba)

	datos = {"nombre":nombre, "apellido":apellido,"edad":edad};

	$.ajax({
		url: "datos.php",
		type: "POST",
		data: datos
	}).done(function(respuesta){
		if (respuesta.estado === "ok") {
			console.log(JSON.stringify(respuesta));

			var nombre = respuesta.nombre,
			apellido = respuesta.apellido,
			edad = respuesta.edad;

			$(".respuesta").html("Servidor:<br><pre>"+JSON.stringify(respuesta, null, 2)+"</pre>");
		}
	});
});