function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// set true to search subdirectories
const images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/));

function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
}

const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: images['avatars/daniel.jpg'],
    productImageUrl: images['products/aqua.png']
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: images['avatars/kristy.png'],
    productImageUrl: images['products/rose.png']
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: images['avatars/veronika.jpg'],
    productImageUrl: images['products/steel.png']
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: images['avatars/molly.png'],
    productImageUrl: images['products/yellow.png']
  },
];

const Seed = {
  products: products
}

export default Seed;
