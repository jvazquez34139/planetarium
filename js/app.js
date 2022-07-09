
const planets = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
const planetNames = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
let currentPlanet = 0;
// on document load

const updateInfo = () => {
  $('#planet-name').text(`Planet ${planetNames[currentPlanet]}`);
  console.log($('#planet-name')[0])

}

flippage = (direction) => {
  if (direction === 'left') {
    currentPlanet--;
  } else {
    currentPlanet++;
  }


  if (currentPlanet < 0) {
    currentPlanet = planets.length - 1;
  }
  if (currentPlanet > planets.length - 1) {
    currentPlanet = 0;
  }
  $('#planet')[0].src = `../res/planet${planets[currentPlanet]}.jpg`;
  updateInfo();
}

const prevPlanet = () => {
  flippage('left');
}

const nextPlanet = () => {
  flippage('right');
}



$(document).ready(() => {
  // initialize the app
  $('.fa-chevron-left').on('click', prevPlanet);
  $('.fa-chevron-right').on('click', nextPlanet);
})
