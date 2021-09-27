function validarSoloNumeros(evt){
    let codigo = (evt.which) ? evt.which : evt.keycode;
    
    if(codigo==8) {
      return true;
    } 
    else if(codigo>=48 && codigo<=57) {
      return true;
    } 
    else{
      return false;
    }
}

function validarContraseña(){
    let contraseña = document.getElementById('pass');
    if(contraseña.value.length >=4){
        return true;
    }
    else{
        alert('La contraseña debe tener al menos 4 caracteres')
        return false;
    }
}

function usuarioYValidacion(){
  const usuario = document.getElementById('user');
  localStorage.setItem('usuario', usuario.value);
  return validarContraseña();
}

function obtenerNombreUser(){
  const valor = document.getElementById('usuario')
  valor.innerHTML = JSON.parse(localStorage.getItem('usuario'))
}
obtenerNombreUser();