import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email, // Ensure this matches your EmailJS template
      message, // Ensure this matches your EmailJS template
    };

    console.log('Sending email with params:', templateParams); // Debug log

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setEmail('');
        setMessage('');
        setError('');
      }, (err) => {
        console.error('Failed to send the email. Error:', err);
        setError('There was an error sending your message. Please try again.');
      });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {submitted && (
        <p className="text-green-600 mb-4">Your message has been sent!</p>
      )}
      {error && (
        <p className="text-red-600 mb-4">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Describe your problem"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
