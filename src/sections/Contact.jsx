import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import useContact from '../hooks/useContact.js';

const Contact = () => {
  const formRef = useRef();
  const { mutate, isLoading, error } = useContact();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '', phone: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;
    mutate({ name, email, phone, message });
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen object-cover" />
    
        <div className="contact-container w-full max-w-lg mx-auto">
          <h3 className="head-text text-2xl md:text-3xl">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">Contact Me for Job Opportunities</p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input w-full p-2 border border-gray-300 rounded-md"
                placeholder="ex., John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Phone Number</span>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="field-input w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input w-full p-2 border border-gray-300 rounded-md"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input w-full p-2 border border-gray-300 rounded-md"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="field-btn w-full py-2 bg-blue-500 text-white rounded-md"
              type="submit"
              onClick={handleSubmit}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow inline-block ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
