// variaveis de usuario
let usuario = document.querySelector('#id_usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

//variaveis de email
let email = document.querySelector('#id_email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

//variaveis de senha 
let senha = document.querySelector('#id_senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

//variaveis de confirmar senha 
let confirmarSenha = document.querySelector('#id_confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false

// validar o campo de usuario
usuario.addEventListener('keyup', () => {

  if(usuario.value.length == 0){

    validUsuario = false

  }else{

    validUsuario = true 

  }
  
})

// para validar o campo de email
email.addEventListener('keyup', () => {

  if(email.value.length == 0){

    validEmail = false

  }else{

    validEmail = true

  }
  
})

//para aceitar na senha no minimo 8 caracteres
senha.addEventListener('keyup', () => {
  
  if(senha.value.length == 0 ){

    labelSenha.setAttribute('style', 'color: black')
    labelSenha.innerHTML = 'Senha:'

  } 
  else if(senha.value.length <= 7){

    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha: *insira no minimo 8 caracteres'
    validSenha = false

  }else{

    labelSenha.setAttribute('style', 'color: black')
    labelSenha.innerHTML = 'Senha:'
    validSenha = true

  }

  const event = new Event('keyup')
  confirmarSenha.dispatchEvent(event)

})

//para verificar se as senhas são compativeis 
confirmarSenha.addEventListener('keyup', () => {
  
  if(confirmarSenha.value.length == 0){

    labelConfirmarSenha.setAttribute('style', 'color: black')
    labelConfirmarSenha.innerHTML = 'Confirmar Senha:'

  }
  else if(confirmarSenha.value != senha.value){

    labelConfirmarSenha.setAttribute('style', 'color: red')
    labelConfirmarSenha.innerHTML = 'Confirmar Senha: *As senhas não conferem'
    validConfirmarSenha = false

  }else{

    labelConfirmarSenha.setAttribute('style', 'color: black')
    labelConfirmarSenha.innerHTML = 'Confirmar Senha:'
    validConfirmarSenha = true 

  }

})

// Botão de cadastro !!
function cadastro(){

  if(validUsuario && validEmail && validSenha && validConfirmarSenha){

    //localstorage
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
      {
        usuarioCad: usuario.value,
        emailCad: email.value,
        senhaCad: senha.value
      }
    ) 

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    //modal sucesso
    Swal.fire({

      title: 'Sucesso!',
      text: 'Seu cadastro foi efetuado com sucesso',
      icon: 'success',

    })

  }else{

    //modal erro
    Swal.fire({

      title: 'Erro!',
      text: 'Preencha todos os campo corretamente',
      icon: 'error',

    })

  }

}

// para revelar a senha do cadastro
function senhaRevelada() {
  
  let s = document.getElementById("id_senha");
  let sc = document.getElementById("id_confirmarSenha");

  if (s.type === "password"){

    s.type = "text";
    sc.type ="text";

  } else {

    s.type = "password";
    sc.type = "password";

  }

}