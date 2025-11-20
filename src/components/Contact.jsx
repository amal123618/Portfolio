import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors in the form.' });
      return;
    }
    
    setSending(true);
    setStatus({ type: '', message: '' });
    
    try {
      // EmailJS configuration
      const serviceId = 'service_ffwt54u';
      const templateId = 'template_al17f4q';
      const publicKey = '3z0hrsvw7q-WANQzE';
      
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Amaljith',
        message: message,
        reply_to: email
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({ 
        type: 'success', 
        message: 'Your message has been sent successfully! I\'ll get back to you soon.' 
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later or contact me at amaljithtpy@gmail.com' 
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="surface contact-grid">
          <div className="contact-layout">
            <div className="contact-info">
              <h2 className="heading-xl">Get in touch</h2>
              <p className="lead muted-light">I usually respond within a day. Share a few details and I'll get back to you.</p>
              <div className="contact-details">
                <p>Email: <a href="mailto:amaljithkuvakkatt@gmail.com">amaljithkuvakkatt@gmail.com</a></p>
                <p>Phone: <a href="tel:+917994773594">+91 79947 73594</a></p>
                <p>WhatsApp: <a href="https://wa.me/917994773594" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
              </div>
            </div>
            <div className="contact-form">
              <form className="form-stack" onSubmit={onSubmit} ref={formRef}>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  className={`input-light ${errors.name ? 'error' : ''}`}
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({...errors, name: ''});
                  }}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  className={`input-light ${errors.email ? 'error' : ''}`}
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: ''});
                  }}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <textarea
                  className={`input-light ${errors.message ? 'error' : ''}`}
                  placeholder="Your message"
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors({...errors, message: ''});
                  }}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
            </div>
            
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.type === 'success' ? (
                  <FiCheckCircle className="status-icon" />
                ) : (
                  <FiAlertCircle className="status-icon" />
                )}
                <span>{status.message}</span>
              </div>
            )}
            
            <button
              className={`btn btn-primary ${sending ? 'btn-loading' : ''}`}
              type="submit"
              disabled={sending}
            >
              {sending ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="icon" />
                  Send Message
                </>
              )}
            </button>
          </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
