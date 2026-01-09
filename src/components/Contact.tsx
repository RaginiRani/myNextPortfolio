'use client'

import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

    useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])


  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        )


      alert('Message sent successfully!')
      formRef.current?.reset()
    } catch (error) {
      alert('Something went wrong 😢')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-[#f8faf5] px-6 py-24 md:px-16"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-[#617a39]">
          Contact Me
        </h2>
        <div className="mt-2 h-1 w-16 bg-[#617a39]" />

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-10 space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full rounded-md border px-4 py-3 outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border px-4 py-3 outline-none"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full rounded-md border px-4 py-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-md bg-[#617a39] px-6 py-3 text-white transition-colors hover:bg-[#50632b]"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
