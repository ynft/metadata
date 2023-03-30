const fs = require('fs');




fs.mkdirSync('./build', { recursive: true });


main();


async function main() {
  // make metadata
  const contractJson = {
    "name": "TEST NFT",
    "description": "TEST NFT Collection",
    "image": "https://ynft.github.io/images/logo.jpg",
    "external_link": "https://ynft.github.io/",
    "seller_fee_basis_points": 700, // TODO
    "fee_recipient": "0x3ecb3f07da57fe7de2c685833bf85015b5219769", // TODO
  };
  fs.writeFileSync(
    './build/contract.json',
    JSON.stringify(contractJson, null, 2)
  );

  const notrevealedJson = {
    "name": "TEST NFT Unrevealed Card",
    "description": "TEST NFT Unrevealed Card",
    "image": "https://ynft.github.io/images/logo.jpg",// TODO
    "external_url": "https://ynft.github.io/",
    "attributes": [],
  };
  fs.writeFileSync(
    './build/unrevealed.json',
    JSON.stringify(notrevealedJson, null, 2)
  );


  // fake metadata
  const all = [];
  let i = 1;
  while (i <= 10000) {
    const obj = makeFakeMetadata(i);
    all.push(obj);
    fs.writeFileSync(
      `./build/${i}.json`,
      JSON.stringify(obj, null, 2)
    );
    i++;
  }

  fs.writeFileSync(
    './build/all.json',
    JSON.stringify(all, null, 2)
  );
}


function makeFakeMetadata(tokenId) {
  const Backgrounds = ['Color #1', 'Color #2', 'Color #3', 'Color #4', 'Color #5'];
  const Faces = ['Face #1', 'Face #2', 'Face #3', 'Face #4', 'Face #5', 'Face #6',];
  const Hairs = ['Hair #1', 'Hair #2', 'Hair #3', 'Hair #4', 'Hair #5', 'Hair #6', 'Hair #7',];
  const Hats = ['Hat #1', 'Hat #2', 'Hat #3', 'Hat #4', 'Hat #5', 'Hat #6', 'Hat #7', 'Hat #8',];
  const Necklace = ['Necklace #1', 'Necklace #2', 'Necklace #3', 'Necklace #4', 'Necklace #5', 'Necklace #6', 'Necklace #7', 'Necklace #8', 'Necklace #9',];
  const Earrings = ['Earring #1', 'Earring #2', 'Earring #3', 'Earring #4', 'Earring #5', 'Earring #6', 'Earring #7', 'Earring #8', 'Earring #9', 'Earring #10',];

  const obj = {
    tokenId,
    name: `TEST NFT #${tokenId}`,
    description: `TEST NFT #${tokenId}`,
    image: `https://ynft.github.io/images/logo.jpg`,
    external_url: "https://ynft.github.io/",
    attributes: [
      {
        "trait_type": "LEVEL".toUpperCase(),
        "value": getRandomInt(5),
      },
      {
        "trait_type": "Background".toUpperCase(),
        "value": Backgrounds[getRandomInt(Backgrounds.length)],
      },
      {
        "trait_type": "Face".toUpperCase(),
        "value": Faces[getRandomInt(Faces.length)],
      },
      {
        "trait_type": "Hair".toUpperCase(),
        "value": Hairs[getRandomInt(Hairs.length)],
      },
      {
        "trait_type": "Hat".toUpperCase(),
        "value": Hats[getRandomInt(Hats.length)],
      },
      {
        "trait_type": "Necklace".toUpperCase(),
        "value": Necklace[getRandomInt(Necklace.length)],
      },
      {
        "trait_type": "Earrings".toUpperCase(),
        "value": Earrings[getRandomInt(Earrings.length)],
      },
    ],
  };

  return obj;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
