
let Boton=document.getElementById("Boton");
Boton.onclick=globos;

function globos(){

	function eliminarIcono(elemento){
		elemento.remove();
	}

	function InsertarIcono(){

		Boton.classList.add("display");

		const icono=document.createElement("div");

		icono.classList.add("icono");

		icono.innerHTML="🎈";

		icono.style.left= Math.random()*100+"vw";

		icono.style.animationDuration= Math.random()*2+3+"s";

		document.body.appendChild(icono);

		setTimeout(eliminarIcono,3800,icono);
					
	}

	setInterval(InsertarIcono,1000);
}



