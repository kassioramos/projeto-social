const recursos = [
    {
      titulo: "Guia de Inclusão LGBTQIA+",
      descricao: "Um guia completo sobre como promover a inclusão no ambiente de trabalho e na sociedade.",
      link: "#",
    },
    {
      titulo: "História do Movimento LGBTQIA+",
      descricao: "Uma linha do tempo interativa sobre a história do movimento LGBTQIA+ no Brasil e no mundo.",
      link: "#",
    },
    {
      titulo: "Cartilha de Saúde LGBTQIA+",
      descricao: "Informações importantes sobre saúde física e mental para a comunidade LGBTQIA+.",
      link: "#",
    },
    // Adicione mais recursos aqui
  ]
  
  const glossario = [
    {
      termo: "LGBTQIA+",
      definicao:
        "Sigla que representa Lésbicas, Gays, Bissexuais, Transgêneros, Queer, Intersexo, Assexuais e outras identidades de gênero e orientações sexuais.",
    },
    {
      termo: "Cisgênero",
      definicao: "Pessoa cuja identidade de gênero corresponde ao sexo atribuído no nascimento.",
    },
    {
      termo: "Transgênero",
      definicao: "Pessoa cuja identidade de gênero difere do sexo atribuído no nascimento.",
    },
    // Adicione mais termos aqui
  ]
  
  function createResourceCard(recurso) {
    return `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">${recurso.titulo}</h3>
            <p class="card-text">${recurso.descricao}</p>
            <a href="${recurso.link}" class="btn btn-primary" target="_blank">Acessar</a>
          </div>
        </div>
      </div>
    `
  }
  
  function createGlossaryItem(item) {
    return `
      <div class="mb-4">
        <h3 class="h5">${item.termo}</h3>
        <p>${item.definicao}</p>
      </div>
    `
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const resourceList = document.getElementById("resource-list")
    recursos.forEach((recurso) => {
      resourceList.innerHTML += createResourceCard(recurso)
    })
  
    const glossaryList = document.getElementById("glossary")
    glossario.forEach((item) => {
      glossaryList.innerHTML += createGlossaryItem(item)
    })
  })
  
  