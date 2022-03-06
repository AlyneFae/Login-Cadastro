//botao de login
function entrar(){

  //variaveis do input de email
  let email = document.querySelector('#email')
  let emailLabel = document.querySelector('#emailLabel')

  //variaveis do input de senha
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let listaUser = []
  
  let userValid = {
      
      usuario: '',
      email: '',
      senha: ''

  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {
      
      if(email.value == item.emailCad && senha.value == item.senhaCad){

          userValid = {

              usuario: item.usuarioCad,
              email: item.emailCad,
              senha: item.senhaCad

          }

      }

  })

  if(email.value == userValid.email && senha.value == userValid.senha){

    window.location.href = '/index/home.html'

  }else{

    Swal.fire({

      title: 'Erro!',
      text: 'E-mail ou senha incorretos',
      icon: 'error',

    })

  }

}

//para revelar a senha do login 
function senhaRevelada() {
    
  let s = document.getElementById("senha");

  if (s.type === "password") {

    s.type = "text";

  } else {

    s.type = "password";

  }

}