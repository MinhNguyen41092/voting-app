import daniel from './images/avatars/daniel.jpg';
import kristy from './images/avatars/kristy.png';
import veronika from './images/avatars/veronika.jpg';
import molly from './images/avatars/molly.png';
import aqua from './images/products/aqua.png';
import rose from './images/products/rose.png';
import steel from './images/products/steel.png';
import yellow from './images/products/yellow.png';

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
    submitterAvatarUrl: daniel,
    productImageUrl: aqua
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: kristy,
    productImageUrl: rose
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: veronika,
    productImageUrl: steel
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: molly,
    productImageUrl: yellow
  },
];

const Seed = {
  products: products
}

export default Seed;
