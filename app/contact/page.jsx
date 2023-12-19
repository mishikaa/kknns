"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      address: '',
      email: '',
      phone: '',
      message: ''
  }) 
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {

      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID  ||  '';
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY  || '';

      setisLoading(true)
      const response = await emailjs.send(serviceId, templateId, formData, publicKey)
      
      if (response) {
        alert('Thanks for contacting us, we will get back to you soon!');
        // Resetting the form after submission
        setFormData({
          name: '',
          address: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit the form, try again later?");
    } finally {
        setisLoading(false)
    }
  };

  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      {/* Left Column - Card */}
      <div className="lg:w-1/2 bg-cover bg-no-repeat" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/contact_bg.avif')", backgroundPosition: 'center' }}></div>

      {/* Right Column - Form */}
      <div className="lg:w-1/2 px-8 md:px-16 lg:px-32 py-12 flex flex-col items-center">
        <h1 className="text-6xl capitalize mb-8 font-extrabold">Contact Us</h1>
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-600">
            Feel free to reach out to us for any inquiries or information. We are here to assist you.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Location</h2>
          <p className="text-gray-600 mb-4">
            National Network Services<br />
            338, 3rd Floor, Prince Complex,<br />
            Hazratganj, Lucknow, India
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-8 text-gray-800">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            E-mail: <a href="mailto:balendoojaiswal@gmail.com" className="text-blue-500">balendoo.jaiswal@gmail.com</a>
          </p>

          <form className="mt-8">
            <label className="block text-gray-800 text-lg mb-2" htmlFor="name">Full Name<span className="text-red-500"> *</span>:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              id="name" 
              className="w-full border border-gray-300 p-2 rounded-md mb-4" 
              required 
            />

            <label className="block text-gray-800 text-lg mb-2" htmlFor="address">Address:</label>
            <input 
              type="text" 
              name="address" 
              id="address" 
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4" />

            <label className="block text-gray-800 text-lg mb-2" htmlFor="email">Email<span className="text-red-500"> *</span>:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              autoComplete={true}
              className="w-full border border-gray-300 p-2 rounded-md mb-4" required />

            <label className="block text-gray-800 text-lg mb-2" htmlFor="phone">Contact No:</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4" />

            <label className="block text-gray-800 text-lg mb-2" htmlFor="message">Message<span className="text-red-500"> *</span>:</label>
            <textarea 
              name="message" 
              id="message" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-6" required></textarea>

            <button 
              onClick={handleSubmit} 
              type="submit" 
              disabled={isLoading}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
