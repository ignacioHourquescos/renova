
function agarrarContraseña(){  
    var password=document.getElementById("password").value
    if (password!=""){
        document.getElementById("formularioLogin").action="./ofertas.html";
    }else{
        alert("Contraseña incorrecta");
        return false;
    }
}


  