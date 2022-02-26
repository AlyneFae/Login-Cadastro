let usuario = document.querySelector('#id_usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let email = document.querySelector('#id_email')
let labelEmail = document.querySelector('#labelEmail')

let senha = document.querySelector('#id_senha')
let labelSenha = document.querySelector('#labelSenha')

let confirmarSenha = document.querySelector('#id_confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')


senha.addEventListener('keyup', () => {
  
  if(senha.value.length == 0 ){

    labelSenha.setAttribute('style', 'color: black')
    labelSenha.innerHTML = 'Senha:'

  } 
  else if(senha.value.length <= 7){

    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha: *insira no minimo 8 caracteres'

  }else{

    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha:'

  }

  const event = new Event('keyup')
  confirmarSenha.dispatchEvent(event)

})

confirmarSenha.addEventListener('keyup', () => {
  
  if(confirmarSenha.value.length == 0){

    labelConfirmarSenha.setAttribute('style', 'color: black')
    labelConfirmarSenha.innerHTML = 'Confirmar Senha:'

  }
  else if(confirmarSenha.value != senha.value){

    labelConfirmarSenha.setAttribute('style', 'color: red')
    labelConfirmarSenha.innerHTML = 'Confirmar Senha: *As senhas não conferem'

  }else{

    labelConfirmarSenha.setAttribute('style', 'color: green')
    labelConfirmarSenha.innerHTML = 'Confirmar Senha:'

  }

})

function cadastro(){



}

function senhaRevelada() {
  
    let s = document.getElementById("id_senha");
    let sc = document.getElementById("id_confirmarSenha");

    if (s.type === "password") {
      s.type = "text";
      sc.type ="text";
    } else {
      s.type = "password";
      sc.type = "password";
    }

}