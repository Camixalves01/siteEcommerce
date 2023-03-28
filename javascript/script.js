var valor = document.getElementById("valor_real").value;
var linkTabela = document.getElementById('link_tabela').innerHTML = "<a href='tabela.html'>Ver tabela de valores</a>";

function calculaFrete() {
  const info_frete = document.getElementById("input_frete").value;
  //

  // const teste = valor.substr(2);
  const valor_com_frete = null;


  if (info_frete.length == 8) {
    const cinco_Digitos = info_frete.slice(0, -3);
    var texto = null;
    var frete = 25.0;
    var prazo;

    //região mogiana
    if (cinco_Digitos >= 08700 && cinco_Digitos <= 08899) {
      prazo = "5 dias";
      frete = 0.0;
      var texto = console.log(
        "Seu frete é gratuito por morar na melhor cidade de todas, vulgo Mogi das Cruzes\nO prazo de entrega do seu produto é de " +
        prazo
      );
      document.getElementById("text_frete").innerHTML = `Frete gratuito`;

      return texto;
    }

    //região metropolitana
    if (cinco_Digitos >= 06000 && cinco_Digitos <= 09999) {
      frete = (frete*45)/100;
      var prazo = "10 dias";
      texto = console.log(
        "Você é da região metropolitana de sp, logo, seu frete é de R$" +
        frete +
        "\nO prazo de entrega do seu produto é de " +
        prazo
      );
      document.getElementById("text_frete").innerHTML = `Frete de: R$${frete}`;
      return texto;
    }

    //região litorânea
    if (cinco_Digitos >= 11000 && cinco_Digitos <= 11999) {
      frete = (frete * 40) / 100;
      var prazo = "15 dias";
      texto = console.log(
        "Você é da região litorânea de sp, logo, seu frete é de R$" +
        frete +
        "\nO prazo de entrega do seu produto é de" +
        prazo
      );
      document.getElementById("text_frete").innerHTML = `Frete de: R$${frete}`;

      return texto;
    }

    //nordeste do país
    if (cinco_Digitos >= 40000 && cinco_Digitos <= 65999) {
      frete = (frete * 50) / 100;
      var prazo = "15 dias";
      texto = console.log(
        "Freete para o nordeste do país: R$" +
        frete +
        "\nO prazo de entrega do seu produto é de " +
        prazo
      );
      document.getElementById("text_frete").innerHTML = `Frete de: R$${frete} `;
      return texto;
    }

    //região do norte do país
    if (cinco_Digitos >= 66000 && cinco_Digitos <= 69999 || cinco_Digitos >= 76800 && cinco_Digitos <= 77999) {
      frete = frete * 0.7;
      var prazo = "18 dias";
      texto = console.log(
        "Frete para o norte do país: R$" +
        frete +
        "\nO prazo de entrega do seu produto é de " +
        prazo
      );
      document.getElementById("text_frete").innerHTML = `Frete de: R$${frete} `;
      return texto;
    }

    //região do centro-oeste do país
    if (cinco_Digitos >= 70000 && cinco_Digitos <= 76799 || cinco_Digitos >= 78000 && cinco_Digitos <= 79999) {
      frete = frete * 0.15;
      var prazo = "18 dias";
      texto = console.log(
        "Frete para o centro-oeste do país: R$" +
        frete +
        "\nO prazo de entrega do seu produto é de " +
        prazo
      );
      document.getElementById("text_frete").innerHTML = `Frete de: R$${frete} `;
      return texto;
    }

    //sul do país
    if (cinco_Digitos >= 80000 && cinco_Digitos <= 99999) {
      var prazo = "18 dias";
      texto = console.log(
        "Frete para o sul do país: R$" +
        frete +
        "\nO prazo de entrega do seu produto é de" +
        prazo
      );
      return texto;
    }
  } else {
    alert("CEP inválido por quantidade de caracteres incorreta");
    document.getElementById("text_frete").innerHTML = '';
    console.log("CEP inválido por quantidade de caracteres incorreta");
  }
}

///////////////////////////// TROCA DE IMAGEM - PÁGINA DE PRODUTO ESPECÍFICO /////////////////////////////
function escolhaOnload() {
  btn1.src = 'imagens/icons8-círculo-preenchido-16.png'
}

var btn1 = document.getElementById("btnEscolha1");
var btn2 = document.getElementById("btnEscolha2");
var imagemPequena1 = document.getElementById("imgOpcao1");
var imagemPequena2 = document.getElementById("imgOpcao2");
var imagem = document.getElementById("imagemInicial_especifica");

var imagem1 = "imagens/loki-marvel.webp";
var imagem2 = "imagens/loki_caixinha.png";

btn2.addEventListener("click", function () {
  imagem.src = imagem2;
  btn2.src = 'imagens/icons8-círculo-preenchido-16.png'
  btn1.src = 'imagens/icons8-círculo-16.png'
});

btn1.addEventListener("click", function () {
  imagem.src = imagem1;
  btn1.src = 'imagens/icons8-círculo-preenchido-16.png'
  btn2.src = 'imagens/icons8-círculo-16.png'
  imagemPequena1.style.borderColor = "black"
});

///////////////////////////////////DÓLAR///////////////////////////////
fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
  .then((response) => {
    return response.json();
  })
  .then((economia) => {
    console.log(economia);
    dolar_api = economia.USDBRL.bid;

    dolar_html = document.getElementsByClassName("valor_dolar")[0].innerHTML;

    const valor_conversao = dolar_html.substr(2);

    let conversao = dolar_api * valor_conversao;

    console.log("Conversão = " + conversao.toFixed(2));
    document.getElementById("valor_real").innerHTML = "R$" + conversao.toFixed(2);
    valor = conversao.toFixed(2)
  });

//for(var escolha = 0; escolha < 5; escolha++){
//quando clicar no botão rodar a array para mudar a info (tem que usar json??)
//}


/////////////////////////// PÁGINA CATÁLOGO PRODUTOS ///////////////////////////
function alerta_produtoNoCarrinho() {
  Swal.fire(
    'Produto adicionado ao carrinho!',
    '',
    'success'
  )
}