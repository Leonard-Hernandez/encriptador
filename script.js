const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function copiarTexto() {
    var textarea = document.getElementById("mensaje");
    textarea.select();    
    
    navigator.clipboard.writeText(textarea.value).then(function() {
      alert("El texto ha sido copiado al portapapeles");
    }, function() {
      alert("No se pudo copiar el texto al portapapeles");
    });
  }

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value ="";
    mensaje.style.backgroundImage = "none";
}

function btnDesncriptar() {
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value ="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptado.includes(matrizCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            
        }
        
    }

    return stringEncriptado

}

function desencriptar(stringEncriptado) {
    
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptado.includes(matrizCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            
        }
        
    }

    return stringEncriptado

}
