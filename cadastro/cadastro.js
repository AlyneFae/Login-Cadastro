let usuario = document.querySelector('#id_usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let email = document.querySelector('#id_email')
let labelEmail = document.querySelector('#labelEmail')

let senha = document.querySelector('#id_senha')
let labelSenha = document.querySelector('#labelSenha')

let confirmarSenha = document.querySelector('#id_confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')


senha.addEventListener('keyup', () => {
  if(senha.value.length <= 7){
    
  }
})






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