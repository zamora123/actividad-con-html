function validar() {
   camponame();
   lastname();
   correo();
   contrasena();
}
function camponame() {
    let valorname = document.getElementById("nombre").value;
    if (valorname == null || valorname.length == 0 || /^\s+$/.test(valorname) ) {
       return alert(" Fill name field"); 
    }
    if (valorname.length > 60) {
        return alert("límite de caracteres alcanzado(60).");
    }
    

}
function lastname() {
    let valorlastname = document.getElementById("lastname").value;
    if (valorlastname == null || valorlastname.length == 0 || /^\s+$/.test(valorlastname) ) {
        return alert(" fill Last name field"); 
     }
     if (valorlastname.length > 60) {
         return alert("límite de caracteres alcanzado(60).")
     }
}

function correo() {
   let valorcorreo = document.getElementById("correo").value;
     if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valorcorreo)) ) {
         return alert("ingresa una direccion de correo valida");
     }
}

function contrasena() {
    let valorcontra = document.getElementById("contrasena").value;
    let valorcontra2 = document.getElementById("contrasena2").value;
    if (valorcontra != valorcontra2) {
        return alert ("Las contraseñas son diferentes") 
    }
}