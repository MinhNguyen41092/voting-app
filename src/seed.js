import daniel from './images/avatars/daniel.jpg';
import aqua from './images/products/aqua.png';

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
  }
];

const Seed = {
  products: products
}

export default Seed;
