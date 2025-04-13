import { Product } from './product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Kék egyrészes fürdőruha',
    price: 7990,
    imageUrl: 'assets/img/kekegyben.jpg',
    description: 'Divatos és kényelmes egyrészes fürdőruha kék színben.',
    category: 'Női',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 2,
    name: 'Tarka bikini szett',
    price: 8990,
    imageUrl: 'assets/img/tarka.jpg',
    description: 'Két részes fürdőruha szett, nyárra tökéletes.',
    category: 'Női',
    sizes: ['S', 'M']
  },
  {
    id: 3,
    name: 'Férfi fürdőnadrág',
    price: 6990,
    imageUrl: 'assets/img/ferfinadrag.jpg',
    description: 'Kényelmes férfi fürdőnadrág többféle méretben.',
    category: 'Férfi',
    sizes: ['M', 'L', 'XL']
  }
];
