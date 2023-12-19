import { Hero } from '@/components/Hero'
import HomeComponent from '@components/HomeComponent'
import Link from 'next/link'

const homeComponents = [
  {
    title: 'About Us',
    description: `National Network Services is home to a highly skilled team of professionals with extensive expertise in optical fiber and coaxial cable systems' operational and maintenance aspects. Our dedicated team provides comprehensive support for communication and computing systems, covering leased lines, terminal equipment, PCs, and custom-designed servers across diverse domains. With a strategic focus on key sectors such as Utilities, Banking, and Telecom, NNS Group not only delivers robust support for its core business but also extends services to offer professional consultancy. Leveraging our longstanding association with telecom services, our Utilities division collaborates globally to enhance customer service and operational efficiency. NNS's holistic solutions cover system design, installation, commissioning, and ongoing operation, ensuring a seamless experience for our esteemed clientele.`,
    img: '/assets/about2.jpg',
    link: 'about',
    bg: '#fff',
    rev: ''
  },
  {
    title: 'Our Services',
    description: `Discover a diverse spectrum of services meticulously crafted to align with your business requirements. Whether it's the intricacies of network design, the reliability of structured cabling, the security of data centers, or the efficiency of lease lines and internet connectivity, we offer comprehensive solutions. From safeguarding your communication with VPN networks to optimizing data transfer through MPLS solutions, facilitating seamless video conferencing, ensuring robust data recovery, and enhancing communication strategies with BULK SMS services – our array of offerings is designed to elevate your operational landscape. Committed to delivering excellence, our team prioritizes the security, scalability, and efficiency of your IT infrastructure, empowering your business for sustained success.`,
    img: '/assets/services_bg.avif',
    link: 'services',
    bg: 'var(--background-secondary)',
    rev: '-reverse'

  }
]


const Home = () => {
  return (
    <div>
      <Hero />
      {homeComponents.map(comp => (
        <HomeComponent key={comp.title} comp={comp}/>
      ))}
      <div className='w-full flex flex-col justify-center items-start px-12 h-72 lg:h-96 bg-cover bg-no-repeat gap-4' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/gallery_bg.jpg')" }}>
        <h1 className="text-6xl capitalize text-white font-extrabold">Get In Touch</h1>
        <h3 className="text-3xl capitalize text-slate-200 italic mt-4"> Reach Out and Let Your Inquiries Ignite Conversations.</h3>
        <Link 
         className="bg-white hover:bg-gray-400 border-none hover:scale-105 text-black font-bold flex justify-center items-center px-6 py-4 rounded-full border border-gray-300"
         href='/contact'>Contact Us</Link>
      </div>
    </div>
  )
}


export default Home