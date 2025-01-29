const organizacoes = [
    {
      nome: "ABGLT",
      descricao: "Associação Brasileira de Lésbicas, Gays, Bissexuais, Travestis, Transexuais e Intersexos",
      site: "https://www.abglt.org/",
      lat: -15.7801,
      lng: -47.9292,
    },
    {
      nome: "Grupo Dignidade",
      descricao: "Organização da sociedade civil que atua na promoção da cidadania LGBTI+",
      site: "https://www.grupodignidade.org.br/",
      lat: -25.4284,
      lng: -49.2733,
    },
    // Adicione mais organizações aqui
  ]
  
  function createOrgCard(org) {
    return `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">${org.nome}</h3>
            <p class="card-text">${org.descricao}</p>
            <a href="${org.site}" class="btn btn-primary" target="_blank">Visitar Site</a>
          </div>
        </div>
      </div>
    `
  }
  
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: -14.235, lng: -51.9253 }, // Centro do Brasil
    })
  
    organizacoes.forEach((org) => {
      new google.maps.Marker({
        position: { lat: org.lat, lng: org.lng },
        map: map,
        title: org.nome,
      })
    })
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const orgList = document.getElementById("org-list")
    organizacoes.forEach((org) => {
      orgList.innerHTML += createOrgCard(org)
    })
  })
  
  