//Elementos que serão utilizados !
let titulo = selector("#titulo");
let data = selector("#data");
let descricao = selector("#descricao");
let copyright = selector("#copyright");
let input = selector("#input-data");
let botao = selector("#botao-data");
let img = selector("#foto");
geraApode();

//Requisição!
function geraApode() {
  const req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://api.nasa.gov/planetary/apod?api_key=0eOsg2igOv6jw1K1cuNUOoXkPThdMba36oEIBN14"
  );
  req.onload = () => {
    if (req.status == 200) {
      const dados = JSON.parse(req.response);

      geradorDeFoto(dados);
    } else {
      console.log("Erro na requisição");
    }
  };
  req.send();
}
function geraApodeData() {
  const data = input.value;
  const reqData = new XMLHttpRequest();
  reqData.open(
    "get",
    `https://api.nasa.gov/planetary/apod?api_key=x8F9X3STEuI9ZuddX5uDz8Y0CGhyadWbmWQzZgQc&date=${data}`
  );
  reqData.onload = () => {
    if (reqData.status == 200) {
      const dadosData = JSON.parse(reqData.response);

      geradorDeFoto(dadosData);
    } else {
      console.log("Erro na requisição");
    }
  };
  reqData.send();
}

//Eventos !
botao.addEventListener("click", (event) => {
  event.preventDefault();
  geraApodeData();
});

//funções!
function selector(elemento) {
  return document.querySelector(elemento);
}

function geradorDeFoto(dados) {
  titulo.textContent = dados.title;
  data.textContent = dados.date;
  descricao.textContent = dados.explanation;
  img.src = dados.url;
}
