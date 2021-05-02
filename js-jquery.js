//Requisição da foto do dia.
$.ajax({
  url:
    "https://api.nasa.gov/planetary/apod?api_key=0eOsg2igOv6jw1K1cuNUOoXkPThdMba36oEIBN14",
  success: function (dados) {
    $(".imagem").html(`
            <img id= 'foto'class="img-nasa" src="${dados.url}" alt="foto">`);
    $(".informacoes").html(`
            <h1 class="titulo" id="titulo">${dados.title}</h1>
            <h2 class="data" id="data">${dados.date}</h2>
            <p class="descricao" id=descricao>${dados.explanation}</p>`);
  },
});

//Requisição da foto da data.
$("form").submit(false);
$("#botao-data").on("click", function () {
  $.ajax({
    url:
      `https://api.nasa.gov/planetary/apod?api_key=x8F9X3STEuI9ZuddX5uDz8Y0CGhyadWbmWQzZgQc&date=` +
      $("#input-data")[0].value,
    success: function (dadosData) {
      $(".imagem").html(`
            <img id= 'foto'class="img-nasa" src="${dadosData.url}" alt="foto">`);
      $(".informacoes").html(`
            <h1 class="titulo" id="titulo">${dadosData.title}</h1>
            <h2 class="data" id="data">${dadosData.date}</h2>
            <p class="descricao" id=descricao>${dadosData.explanation}</p>`);
    },
  });
});
