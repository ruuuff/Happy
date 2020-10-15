const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}


// Localização [-27,222633, -49,6455874]
// Create map
var map = L.map('mapid', options).setView([51.505, -0.09], 13)


// Create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


// Create and add marker
L.marker([51.5, -0.09], { icon })
.addTo(map)




// Image gallery
function selectImage(event) {
  const button = event.currentTarget
  
  // Remover todas as classes .active
  const buttons = document.querySelectorAll('.images button')
  buttons.forEach(removeActiveClass)
  
  function removeActiveClass(button) {
    button.classList.remove("active")
  }
  
  // Selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  
  // Atualizar o container de imagem
  imageContainer.src = image.src
  
  // Adicionar a classe .active para o botão que foi clicado
  button.classList.add("active")
}