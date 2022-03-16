window.onload = function() {
    verificarLogin()
}

function verificarLogin () {
    if(!localStorage.getItem('auth')) {
        alert('Você precisa estar logado para acessar esta página.')
        window.location.href = '/login/login.html'
    }
}