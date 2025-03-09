// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declarando  varialbes
let listaAmigosIngresados = [];
//Funcion para agreagar el nombre del amigo a la lista
function agregarAmigo() {
    //Obtenidendo el valor del amigo ingresado desde la caja de texto
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado == "") {
        alert("Ingrese un nombre porfavor");
    } else {
        listaAmigosIngresados.push(amigoIngresado);
        console.log(listaAmigosIngresados);
        document.getElementById("amigo").value = "";
    }
}
function mostrarAmigos() {
    let listaAmi=document.getElementById("listaAmigos");
    listaAmi.innerHTML="";
    for (let index = 0; index < listaAmigosIngresados.length; index++) {
        let elementoLista=document.createElement("li");
        elementoLista.textContent=listaAmigosIngresados[index]
        listaAmi.appendChild(elementoLista);
    }
}
