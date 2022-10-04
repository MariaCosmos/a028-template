let senha = document.getElementById("password")

function escondeSenha(event){
  event.preventDefault()
  senha.setAttribute("type", "password")
}

function deixarEscuro(){
  const form = document.getElementById("light")

  form.classList.remove("light")
  form.classList.add("dark")
}

deixarEscuro()