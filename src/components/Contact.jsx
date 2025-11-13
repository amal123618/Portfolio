import { useState } from 'react'

const RECIPIENT_EMAIL = 'amaljithtpy@gmail.com'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setSending(true)
    const subject = 'Portfolio Contact'
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSending(false)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="surface contact-grid">
          <h2 className="heading-xl">Get in touch</h2>
          <p className="lead muted-light">I usually respond within a day. Share a few details and I’ll get back to you.</p>
          <form className="form-stack" onSubmit={onSubmit}>
            <div className="row">
              <input className="input-light" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input className="input-light" placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <textarea className="input-light textarea-light" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <div>
              <button className="btn-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
