//function that will add the GIF to the page using only the ID as argument

function showGif(giphyId) {
  const imgUrl = `https://media.giphy.com/media/${giphyId}/giphy.gif`
  document.write(`<img src="${imgUrl}" />`)
}

showGif('njYrp176NQsHS')
showGif('NCPcywASJGggw')

