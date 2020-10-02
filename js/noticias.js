const listaDeNoticias = document.querySelector('#listaDeNoticias');

function printNoticias(noticias) {
  noticias.forEach(noticia => {
    console.log(noticia);

    let card = `
    <div class="col-3">
        <div class="card">
          <img src="${noticia.urlToImage}" class="card-img-top" alt="articleImage">
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p>
            <a href="${noticia.url}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
    `;

    listaDeNoticias.innerHTML += card;

  });
}

async function getNoticias() {
  let response = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=dad9238ef4ac4895a218dcdc0c8b89b2');
  let noticias = await response.json();
  printNoticias(noticias.articles);
}

getNoticias();