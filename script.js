const mensaje1 = document.querySelector(".mensaje1");
const mensaje2 = document.querySelector(".mensaje2");
const copia = document.querySelector("#btn_copiar");
const text = document.querySelector(".texto");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".mensaje1").value;
    let validador = textoEscrito.match(/^[a-z- ]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btn_encriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(mensaje1.value)
        mensaje2.value = textoEncriptado
        mensaje2.style.backgroundImage = "none"
        mensaje1.value = "";
        copia.style.display = "block"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btn_desencriptar(){
    const textoEncriptado = desencriptar(mensaje1.value)
    mensaje2.value = textoEncriptado
    mensaje2.style.backgroundImage = "none"
    mensaje1.value = "";
    copia.style.display = "block"
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copiar(){
    mensaje2.select();
    navigator.clipboard.writeText(mensaje2.value)
    mensaje2.value = "";
    alert("Texto Copiado")
}