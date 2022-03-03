function valogin() {
    correo();
    
}
function correo() {
    let valorcorreo = document.getElementById("correo").value;
      if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valorcorreo)) ) {
          return alert("ingresa una direccion de correo valida");
      }
 }
 
 