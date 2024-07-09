

const key = "5cb5fb59dd0fd061c9b87335a1f7559a"


function colocarDadosNaTela(dados){

  document.querySelector (".city-search").innerHTML = "Tempo em " + dados.name;
  document.querySelector (".temp").innerHTML = Math.floor  (dados.main.temp) + "'C";
  document.querySelector (".text-prevision").innerHTML = dados.weather[0].description;
  document.querySelector (".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
  document.querySelector (".sky").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

  console.log(dados)
}



async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())


    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value
  
    buscarCidade(cidade)
}