//Requisição da foto do dia.
$.ajax({
  url:
    "https://api.nasa.gov/planetary/apod?api_key=0eOsg2igOv6jw1K1cuNUOoXkPThdMba36oEIBN14",
  success: function (dados) {
    if (dados.media_type == "image") {
      $(".video").addClass("oculto");
      $(".imagem").html(`
      <img id= 'foto'class="img-nasa" src="${dados.url}" alt="foto">`);
    } else {
      console.log("caiu");
      $(".imagem").addClass("oculto");
      $("#video").html(
        `<iframe id='video' class='img-nasa' 'src="${dados.url}" frameborder="0"></iframe>`
      );
    }

    $(".informacoes").html(`
            <h1 class="titulo" id="titulo">${dados.title}</h1>
            <h2 class="data" id="data">${dados.date}</h2>
            <p class="descricao" id=descricao>${dados.explanation}</p>`);
  },
  error: function (dados) {
    $(".imagem").addClass("oculto");
    $(".form-info").addClass("oculto");
    $(".erro").removeClass("oculto");
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
      if (dadosData.media_type == "image") {
        $(".video").addClass("oculto");
        $(".imagem").html(`
        <img id= 'foto'class="img-nasa" src="${dadosData.url}" alt="foto">`);
      } else {
        $(".imagem").addClass("oculto");
        $(".video").removeClass("oculto");

        $(".video").html(
          `<iframe width="560" height="315"  class='img-nasa' id='video'  src="${dadosData.url}" frameborder="0"></iframe>`
        );
      }
      $(".informacoes").html(`
            <h1 class="titulo" id="titulo">${dadosData.title}</h1>
            <h2 class="data" id="data">${dadosData.date}</h2>
            <p class="descricao" id=descricao>${dadosData.explanation}</p>`);
      //homenagem hihi
      if (dadosData.date == "1996-07-11") {
        console.log("caiu");
        $(".video").addClass("oculto");
        $(".imagem").html(`
                <img id= 'foto'class="img-nasa" src="./images/vic.jpeg" alt="foto">`);

        $(".informacoes").html(`
                    <h1 class="titulo" id="titulo">Vic Marques</h1>
                    <h2 class="data" id="data">${dadosData.date}</h2>
                    <p class="descricao" id='descricao'>Talvez o maior presente que já existiu para alguém, essa homenagem é para mostrar para você que você é como uma foto espacial que admiramos achando que é ficção
                    obrigado por tudo,te amo. </p>`);
      }
    },
    error: function (dados) {
      $(".imagem").addClass("oculto");
      $(".form-info").addClass("oculto");
      $(".erro").removeClass("oculto");
    },
  });
});

//Evento erro.
$(".botao-erro").on("click", () => {
  $(".imagem").removeClass("oculto");
  $(".form-info").removeClass("oculto");
  $(".erro").addClass("oculto");
  $(".video").addClass("oculto");
});
