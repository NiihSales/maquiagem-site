function entrar(){

let usuario = document.getElementById("usuario").value;
let senha = document.getElementById("senha").value;

if(usuario == "admin" && senha == "123"){

localStorage.setItem("logado", "sim");

window.location.href = "index.html";

}else{

alert("Usuário ou senha incorretos");

}

}function darkMode(){

document.body.classList.toggle("dark");

}
