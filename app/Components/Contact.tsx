
import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_y0nijes', 'template_jtjyeor', form.current, {
          publicKey: 'MUXjzeCdmMoXuGzXw',
        })
        .then(
          () => {
            setSuccessMessage('Message sent successfully!');
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSuccessMessage(null); // Clear success message on error
          },
        );
    }
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 max-w-2xl w-full">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            We specialize in crafting responsive and dynamic web experiences. 
            Whether you need a revamp or a new interface, our skilled developers 
            are ready to bring your vision to life!
          </p>
        </div>

        {/* Display success message */}
        {successMessage && (
          <div className="text-green-500 text-center mb-4">
            {successMessage}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="user_name" 
              required 
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="user_email" 
              required 
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea 
              name="message" 
              required 
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
              rows={4}
            />
          </div>
          <input 
            type="submit" 
            value="Send" 
            className="w-full py-3 mt-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200 cursor-pointer shadow-lg"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
