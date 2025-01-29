const recursosOnline = [
  {
    nome: "ABGLT",
    descricao: "Associação Brasileira de Lésbicas, Gays, Bissexuais, Travestis, Transexuais e Intersexos",
    link: "https://www.abglt.org/",
  },
  {
    nome: "Grupo Dignidade",
    descricao: "Organização da sociedade civil que atua na promoção da cidadania LGBTI+",
    link: "https://www.grupodignidade.org.br/",
  },
  {
    nome: "Casa 1",
    descricao: "Centro de acolhida e cultura para LGBT+ em situação de vulnerabilidade",
    link: "https://www.casaum.org/",
  },
  {
    nome: "Mães pela Diversidade",
    descricao: "Associação de mães, pais e familiares em defesa da diversidade",
    link: "https://maespeladiversidade.org.br/",
  },
  {
    nome: "ANTRA",
    descricao: "Associação Nacional de Travestis e Transexuais",
    link: "https://antrabrasil.org/",
  },
  {
    nome: "Todxs",
    descricao: "Organização que promove a inclusão, diversidade e os direitos LGBTI+",
    link: "https://www.todxs.org/",
  },
]

const recursosConteudo = {
  "guia-de-inclusao-lgbtqia": "Conteúdo do guia de inclusão LGBTQIA+",
  "historia-do-movimento-lgbtqia": "Conteúdo da história do movimento LGBTQIA+",
  "cartilha-de-saude-lgbtqia": "Conteúdo da cartilha de saúde LGBTQIA+",
  "guia-de-aliados": "Conteúdo do guia de aliados",
  "diversidade-de-genero-entendendo-o-espectro": "Conteúdo sobre diversidade de gênero",
}

function createOnlineResourceCard(recurso) {
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">${recurso.nome}</h3>
          <p class="card-text">${recurso.descricao}</p>
          <a href="${recurso.link}" class="btn btn-primary" target="_blank">Visitar</a>
        </div>
      </div>
    </div>
  `
}

document.addEventListener("DOMContentLoaded", () => {
  const onlineResourceList = document.getElementById("online-resources")
  recursosOnline.forEach((recurso) => {
    onlineResourceList.innerHTML += createOnlineResourceCard(recurso)
  })
})

