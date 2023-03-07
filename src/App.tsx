import  Union  from './assets/Union.svg'
import Star from './assets/Star.svg'
import House from './assets/House.jpg'
import Arrow from './assets/Arrow-up-right.svg'
import ComplexOne from './assets/Complex-1.svg'
import ComplexTwo from './assets/Complex-2.jpg'
import ComplexThree from './assets/Complex-3.jpg'
import ComplexFour from './assets/Complex-4.jpg'

import SingUp from './components/SingUp'
import GetStarted from './components/GetStarted'
import { Complex } from './components/Complex'

export default function App() {
  
  return (
    <div className='px-28 max-sm:px-0'>
      <header className='flex justify-between items-center gap-2 mt-6'>
     
      <div className='flex items-center gap-4 mr-12'>
        <img src={Union} alt="" />
        <h1 className="font-bold text-4xl">Indigo</h1>
      </div>
      <p className='hover:text-orange-500 transition cursor-pointer'>Product</p>
      <p className='hover:text-orange-500 transition cursor-pointer'>Why Us</p>
      <p className='hover:text-orange-500 transition cursor-pointer'>Pricing</p>
      <p className='hover:text-orange-500 transition cursor-pointer'>Review</p>
      <div className='flex items-center gap-7 ml-12'>
        <button className='hover:text-orange-500 transition '>Sing in</button>
        <SingUp />
      </div>
     
     </header>
     <main>
     <section className='flex justify-between items-center mt-12'>
     <div className='font-bold text-8xl font-serif'>
        <div className='flex items-center gap-3'>Make Your <img src={Star} alt="" /> </div>
         Modern House
      </div>
      <div className='flex flex-col gap-7'>
      <p className='text-gray-600'>simply dummy text the printing simply <br /> industry. Lorem of the printing text <br /> dummy text</p>
      <GetStarted />
      </div>
      </section>
      <section className='flex justify-between mt-20 mb-10'>
        <img className='w-10/12 rounded-md' src={House} alt="" />
        <div className='flex flex-col justify-between'>
          <div>
            <p className='text-6xl'>10+</p>
            <p>Year Of Experience</p>
          </div>
          <div>
            <p className='text-6xl'>200+</p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className='text-6xl'>60+</p>
            <p>Award Winning</p>
          </div>
        </div>
      </section>
      <section>
        <div className='mb-10 flex flex-col gap-9'>
          <h2 className='text-5xl text-gray-700'>Eplore Our Properties</h2>
          <div className='flex justify-between gap-2'>
            <Complex house={ComplexOne} icon={Arrow} />
            <Complex house={ComplexTwo} icon={Arrow} />
            <Complex house={ComplexThree} icon={Arrow} />
            <Complex house={ComplexFour} icon={Arrow} />
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}


