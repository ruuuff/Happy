// Create map
var map = L.map('mapid').setView([51.505, -0.09], 13)


// Create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})


let marker;

// Create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  
  // Pegando a latitude e a lingutude
  document.querySelector('[name=lat]')
  .value = lat;
  document.querySelector('[name=lng]')
  .value = lng;

  
  // Remove previous icon
  marker && map.removeLayer(marker)
  
  // Add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})



// Adicionar o campo de fotos
function addPhotoField() {
  // Pegar o container de fotos #images
  const container = document.querySelector('#images')
  
  // Pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload')
  
  // Realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) // Com true ele clona o elemento completo, incluindo seus filhos.
  
  
  // Verificar se o campo está vazio. Se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0]
  if (input.value == "") {
    return
  }
  
  // Limpar o campo antes de adicionar
  input.value = ""
  
  // Adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget
  
  const fieldsContainer = document.querySelectorAll('.new-upload')
  
  if (fieldsContainer.length < 2) {
    // Limpar o valor do campo
    span.parentNode.children[0].value = ""
    
    return
  }

  // Deletar o campo
  span.parentNode.remove();
}


// Selecionar "sim" ou "não"
function toggleSelect(event) {
  // Pegar o botão clicado
  
  
  // Retirar a classe .active (dos botões)
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))
  
  // Adicionar a classe .active no botão clicado
  const button = event.currentTarget
  button.classList.add('active')
  
  
  // Atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  
  
  // Verificar se sim ou não
  input.value = button.dataset.value
}