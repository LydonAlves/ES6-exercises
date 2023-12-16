// Dado el siguiente javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
// console.log(streamers)

const inputFilter = document.querySelector(
  '[data-function="toFilterStreamers"]'
)

inputFilter.addEventListener('change', () => {
  const newValue = inputFilter.value
  // console.log(newValue)
  filterStreamers() //?this sends the value to this function
})

//!get user name
const filterStreamers = () => {
  const valueEntered = inputFilter.value
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.includes(valueEntered)
  )
  // console.log('----------')
  console.log(filteredStreamers)
}
