import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Contact Me</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;