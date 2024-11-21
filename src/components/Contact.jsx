import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email via EmailJS
        emailjs.sendForm('gmail_harshal', 'template_z6rwajp', e.target, 'pHj200tvX-xtppn9r')
            .then(
                () => {
                    setStatus('Email sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                },
                (error) => {
                    setStatus('Error sending email. Please try again later.');
                    console.error('EmailJS error:', error.text); // Improved logging
                }
            );
    };

    return (
        <div className="bg-neutral-900 py-16 px-4">
            <h2 className="text-4xl font-light text-center text-white pb-8">Contact <span className="text-neutral-500">Me</span></h2>
            
            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-white block text-lg">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="text-white block text-lg">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="message" className="text-white block text-lg">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="6"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>

                    {status && (
                        <div className="mt-4 text-center text-white">
                            <p>{status}</p>
                        </div>
                    )}
                </form>
            </div>
          
        </div>
    );
};

export default Contact;
