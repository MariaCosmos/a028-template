function addLista (event){
  let lista = document.getElementById("lista")
  let input = document.getElementById("meu-input").value

  let newLi = document.createElement("li")
  newLi.innerHTML = input
  lista.insertAdjacentElement('beforeend', newLi)
}