import { Hero } from '@/components/Hero'
import HomeComponent from '@components/HomeComponent'
import {homeComponents} from '@constants/home.js';
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Hero />
      {homeComponents.map(comp => (
        <HomeComponent key={comp.title} comp={comp}/>
      ))}
      <div className='w-full flex flex-col justify-center items-start px-12 h-72 lg:h-96 bg-cover bg-no-repeat gap-4' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/gallery_bg.jpg')" }}>
        <h1 className="text-3xl md:text-6xl capitalize text-white font-extrabold">Get In Touch</h1>
        <h3 className="text-xl md:text-3xl capitalize text-slate-200 italic mt-4"> Reach Out and Let Your Inquiries Ignite Conversations.</h3>
        <Link 
         className="bg-white hover:bg-gray-400 border-none hover:scale-105 text-black font-bold flex justify-center items-center px-6 py-4 rounded-full border border-gray-300"
         href='/contact'>Contact Us</Link>
      </div>
    </div>
  )
}


export default Home