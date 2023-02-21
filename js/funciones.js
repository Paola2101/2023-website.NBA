const botones = document.queryselectorAll(".abrir,.cerrar");
const navegacion = document.queryselector(".hamb");


  for(var i = 0; i < botones.length; i++){
     botones[i].addEventListener("click", function(){
	 navegacion.classlist.toggle("desplegado");
});
}

botones.forEach(boton => {
	boton.addEventListener("click", function(){
		navegacion.classlist.toggle("desplegado");
		bird.classlist.toggle("blur")
	});

});		


