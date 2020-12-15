var fetch = require('node-fetch');
var fs = require('fs');

let cards = fs.readFileSync('public/data/MtgoVintageCube.txt', {encoding:'utf8'}).split('\n').filter(card=>card)

let result = {}

async function main() {
  while(cards.length) {
    let card = cards.shift()
    let res = await fetch(`https://api.scryfall.com/cards/search?order=name&q=game%3Apaper+%21"${encodeURIComponent(card)}"`)
    let scryfall = (await res.json()).data[0]
    console.log(card)
    result[card] = scryfall
    // let imagePath = (scryfall.card_faces && scryfall.card_faces[0].image_uris) ? scryfall.card_faces[0].image_uris.normal : scryfall.image_uris.normal
    // let imgRes = await fetch(imagePath)
    // let img = await imgRes.buffer()
    // let cardNameBase64 = Buffer.from(card).toString('base64')
    // fs.writeFileSync(`public/img/${cardNameBase64}.png`, img)
  }

  fs.writeFileSync('public/data/cube.json', JSON.stringify(result))
}

main()
