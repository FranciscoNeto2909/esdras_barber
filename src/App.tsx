import './App.css'
import Slider from './components/slider/Slider'
import { cuts } from './data/cuts'
import { lights } from './data/lights'

export default function App() {

  return (
    <>
      <header className='hidden  w-full h-12 px-4 items-end justify-between fixed top-0 z-20 bg-[#1F2526] md:visible md:flex'>
        <div>
          <img src="" alt="" />
        </div>
        <ul className='h-full flex items-end gap-6 mr-20 text-white'>
          <li className='pb-2 cursor-pointer border-b border-b-teal-600'>
            <a href="#home">Inicio</a>
          </li>
          <li className='pb-2 cursor-pointer border-b border-[#1F2526]'>
            <a href="#cuts">Cortes</a>
          </li>
          <li className='pb-2 cursor-pointer border-b border-[#1F2526]'>
            <a href="#lights">Luzes</a>
          </li>
        </ul>
      </header>
      <section id='home' className=' h-screen w-full text-white md:flex items-center justify-center flex-col mt-8'>
        <div className='p-4 flex flex-col items-center overflow-hidden lg:flex-row md:gap-8'>
          <div className='h-80 w-96 mx-auto relative mb-6 flex items-center justify-center animate-move'>
            <img src="https://media.istockphoto.com/id/640274128/pt/foto/barber-using-scissors-and-comb.jpg?s=612x612&w=0&k=20&c=83Oj99wpKeTKoIOgRJgIOEzu46Ar6MlIvkZUmann6Dc=" className=' absolute z-10 top-14 left-12 bg-white h-52 w-64 md:h-64 md:w-72' alt="" />
            <div className='border-8 border-teal-500 h-44 w-56 absolute right-11 top-6 z-0 md:top-7 md:right-4'></div>
            <div className='bg-teal-500 h-40 w-52 absolute left-7 top-32 z-0 md:top-44 md:left-6'></div>
          </div>
          <div className='max-w-xl pl-8 pr-4 md:p-0'>
            <h1 className='text-3xl mb-4' style={{ fontFamily: 'Lugrasimo, cursive' }}>Barber shop Esdras Santos</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, culpa sunt ratione tenetur a voluptates, nisi libero eum ducimus iste quam id! Commodi sapiente rem autem doloribus facere reiciendis eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus.</p>
            <div className='flex gap-1 py-2'>
              <p>Sucatinga, Ce</p>
              <img src="https://images.vexels.com/media/users/3/141915/isolated/preview/fa18fbc911311b5371870c880fa5f75a-pin-de-localizacao.png" className='h-5' alt="" />
            </div>
            <p className='text-lg mt-4'>Entre em contato:</p>
            <div className='mt-2 flex items-end justify-between'>
              <div>
                <a href='https://wa.me/5585999027436?text=Olá gostaria de agendar um corte' className='mr-4 inline-block'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" className='h-10' alt="whats" />
                </a>
                <a href='https://www.instagram.com/barbearia_esdrassantos/' className='inline-block'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" className='h-10' alt="insta" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='cuts' className='h-screen w-full text-white mt-8'>
        <h2 className='text-2xl w-max mb-12 pl-4' style={{ fontFamily: 'Lugrasimo, cursive' }}>Tipos de Cortes</h2>
        <Slider items={cuts} />
      </section>
      <section id='lights' className='h-screen w-full text-white'>
        <h2 className='text-2xl mb-12 w-max pl-4' style={{ fontFamily: 'Lugrasimo, cursive' }}>Tipos de luzes</h2>
        <Slider items={lights} />
      </section>
      <footer className='h-8 pt-1 bg-[#1F2526] w-full text-center text-white z-20 md:fixed md:bottom-0 md:h-14 md:pt-5'>
        <p className='text-sm font-bold text-gray-400 md:text-base'> &#169; BarberShop Esdras Santos | Desde 2019 &#169;</p>
      </footer>
    </>
  )
}