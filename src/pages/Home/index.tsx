import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'

import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'teste',
    image: resident,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  },
  {
    id: 2,
    category: 'Ação',
    description: 'teste',
    image: zelda,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  },
  {
    id: 3,
    category: 'Ação',
    description: 'teste',
    image: star_wars,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  },
  {
    id: 4,
    category: 'Ação',
    description: 'teste',
    image: diablo,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'teste',
    image: diablo,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  },
  {
    id: 6,
    category: 'Ação',
    description: 'teste',
    image: star_wars,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  },
  {
    id: 7,
    category: 'Ação',
    description: 'teste',
    image: zelda,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  },
  {
    id: 8,
    category: 'Ação',
    description: 'teste',
    image: resident,
    infos: ['-10%', 'R$150'],
    system: 'Windows',
    title: 'Nome do jogo'
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em Breve" background="black" />
  </>
)
export default Home
