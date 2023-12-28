import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faLink, faServer, faSatelliteDish, faWifi, faShieldAlt, faLayerGroup, faVideo, faDatabase, faSms } from '@fortawesome/free-solid-svg-icons';

const servicesList = [
    {
      title: 'Network Design & Installation',
      description: 'Our expert team designs and implements robust network solutions tailored to meet your specific requirements. From planning to installation, we ensure a seamless and efficient network infrastructure.',
      icon: faNetworkWired,
    },
    {
      title: 'Structured Cable',
      description: 'We provide structured cabling solutions to optimize communication within your organization. Our cable installations follow industry standards, enhancing reliability and scalability.',
      icon: faLink,
    },
    {
      title: 'Data Center',
      description: 'Create a secure and scalable data center with our comprehensive services. From design and installation to maintenance, we ensure your data center meets the highest standards of efficiency and security.',
      icon: faServer,
    },
    {
      title: 'Lease Line',
      description: 'Our Lease Line services guarantee dedicated and high-speed internet access for businesses. Experience stability and consistent performance with our tailored solutions.',
      icon: faSatelliteDish,
    },
    {
      title: 'Internet Lease Line',
      description: 'Enjoy reliable and high-speed internet connectivity with our Internet Lease Line services. Tailored for homes and businesses, our solutions prioritize stability and ease of use.',
      icon: faWifi,
    },
    {
      title: 'VPN Network',
      description: 'Secure your communication and data with our VPN Network services. We provide robust virtual private network solutions to ensure privacy and confidentiality.',
      icon: faShieldAlt,
    },
    {
      title: 'MPLS Network',
      description: 'Optimize your network with our MPLS Network solutions. Our services ensure efficient data transfer and communication, enhancing the overall performance of your business network.',
      icon: faLayerGroup,
    },
    {
      title: 'Videoconferencing',
      description: 'Facilitate seamless communication with our Videoconferencing services. Experience high-quality video calls and conferences, enhancing collaboration within your organization.',
      icon: faVideo,
    },
    {
      title: 'Data Recovery',
      description: 'Secure your valuable data with our Data Recovery services. Our experts employ advanced techniques to recover lost or damaged data, ensuring minimal disruption to your operations.',
      icon: faDatabase,
    },
    {
      title: 'BULK SMS Services',
      description: 'Enhance your communication strategy with our BULK SMS Services. Reach your audience effectively and efficiently through our reliable and scalable SMS solutions.',
      icon: faSms,
    },
  ];
  
const Services = () => {

  return (
    <div className='h-full w-full flex flex-col'>
      <div className='w-full flex flex-col justify-center items-center h-72 lg:h-96 bg-cover bg-no-repeat' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/services_bg.avif')", backgroundPosition: 'center' }}>
        <h1 className="text-4xl lg:text-8xl capitalize text-white font-extrabold">Our Services</h1>
        <h3 className="text-sm p-4 lg:text-4xl capitalize text-slate-200 italic mt-4">Explore Our Comprehensive Services</h3>

      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12'>
        {servicesList.map((service, index) => (
          <div className="bg-white p-6 mt-4 rounded-lg shadow-lg flex flex-col items-center" key={index}>
            <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4 w-10 text-gray-700" />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
