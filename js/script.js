const bontonEncriptar = document.getElementById("encriptar")
const bontonDesencriptar = document.querySelector(".desencriptador")
const contenedorMunieco = document.getElementById("munieco")
const contenedorh2 = document.getElementById("h2munieco")
const contenedorp = document.getElementById("pmunieco")
const botonCopiar = document.getElementById("copiar")
const resultado = document.getElementById("resultado")



bontonEncriptar.onclick = () =>{
    encriptar();
}

function encriptar(){
    ocultarContenedor()
    resultado.textContent = encriptarTexto(obtenerTexto())
}


function obtenerTexto(){
    let cajatexto = document.getElementById("cajatexto");
    return cajatexto.value;
}

function ocultarContenedor(){
    contenedorMunieco.classList.add("ocultar");
    contenedorh2.classList.add("ocultar");
    contenedorp.classList.add("ocultar");
    botonCopiar.classList.remove("ocultar")
    resultado.classList.remove("ocultar")
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";
    
    for(let i = 0; i < texto.length; i++){
        if(texto[i]== "a"){
            textoFinal = textoFinal + "ai"
        }else if(texto[i]== "e"){
            textoFinal = textoFinal + "enter"
        }else if(texto[i]== "i"){
            textoFinal = textoFinal + "imes"
        }else if(texto[i]== "o"){
            textoFinal = textoFinal + "ober"
        }else if(texto[i]== "u"){
            textoFinal = textoFinal + "ufat"
        }else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal
}

bontonDesencriptar.onclick = () =>{
    desencriptar()
}

function desencriptar(){
    ocultarContenedor()
    resultado.textContent = desencriptarTexto(obtenerTexto())
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";
    
    for(let i = 0; i < texto.length; i++){
        if(texto[i]== "a"){
            textoFinal = textoFinal + "a"
            i = i + 1
        }else if(texto[i]== "e"){
            textoFinal = textoFinal + "e"
            i = i + 4
        }else if(texto[i]== "i"){
            textoFinal = textoFinal + "i"
            i = i + 3
        }else if(texto[i]== "o"){
            textoFinal = textoFinal + "o"
            i = i + 3
        }else if(texto[i]== "u"){
            textoFinal = textoFinal + "u"
            i = i + 3
        }else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal
}

botonCopiar.onclick = () =>{
    copiar()
}

function copiar(){
    navigator.clipboard.writeText(resultado.innerHTML);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Copiado correctamente!',
        showConfirmButton: false,
        timer: 1500
      })
}