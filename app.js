// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declarando  varialbes
let listaAmigosIngresados = [];
//Funcion para agreagar el nombre del amigo a la lista
function agregarAmigo() {
    //Obtenidendo el valor del amigo ingresado desde la caja de texto
    let amigoIngresado = document.getElementById("amigo").value;
    //Validando que se haya escritto algo en la caja de texto
    if (amigoIngresado == "") {
        alert("Ingrese un nombre porfavor");//Si esta vacio moastrar alerta
    } else {
        //Si no esta vacio entonces cargue el nombre a la lista
        listaAmigosIngresados.push(amigoIngresado);
        document.getElementById("amigo").value = "";//Vaciendo la caja de texto luego de ingresasr el texto
    }
}
//FUncion para maostrar los nombres ingresados en la lista en forma de itmes de lista
function mostrarAmigos() {
    //Identificando el obgeto lista en donde se escribira
    let listaAmi=document.getElementById("listaAmigos");
    //Limpiando la lista actual
    listaAmi.innerHTML="";
    //Recorriendo la lista y escribiendo los elementos
    for (let index = 0; index < listaAmigosIngresados.length; index++) {
        let elementoLista=document.createElement("li");//Creando elemnto lista li
        elementoLista.textContent=listaAmigosIngresados[index];//Cargando nombre del arreglo en la lista
        listaAmi.appendChild(elementoLista);//Escribiendo la lista
    }
}
//FUncon para sortear un nombre entre todos los nombres de la lista
function sortearAmigo(){
    let indiceSortedo=Math.floor(Math.random()*listaAmigosIngresados.length);// Selecciona un indice desde el cero hasta el tamaño de la lista -1
    document.getElementById("listaAmigos").innerHTML="";//Vaciendo la lista para que solo aparesca el resultado del sorteo
    document.getElementById("resultado").innerHTML=listaAmigosIngresados[indiceSortedo];// escribe el nombre sorteado en la ul resultado
}