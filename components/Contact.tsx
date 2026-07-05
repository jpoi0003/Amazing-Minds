"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Volunteering",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `New Enquiry from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}
Interest: ${form.interest}

Message:
${form.message}
    `;

    window.location.href = `mailto:Brightbridgehubs@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  const whatsappLink =
    "https://wa.me/60127278076?text=" +
    encodeURIComponent(
      "Hello! I would like to know more about Amazing Minds programs and how I can get involved."
    );

  const facebookLink = "https://www.facebook.com/share/1HsJe3rycH/";

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="text-5xl font-semibold text-[#4B2D8F]">
            Contact Us
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We would love to hear from you. Reach out via email, phone,
            WhatsApp, Facebook, or send us a message using the form.
          </p>

          {/* CONTACT LINKS */}
          <div className="mt-10 space-y-5 text-gray-700">

            {/* EMAIL */}
            <a
              href="mailto:Brightbridgehubs@gmail.com"
              className="flex items-center gap-3 hover:text-[#4B2D8F] transition"
            >
              📧 <span>Email: Brightbridgehubs@gmail.com</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+60127278076"
              className="flex items-center gap-3 hover:text-[#4B2D8F] transition"
            >
              📞 <span>Phone: +60 12-727 8076</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#4B2D8F] transition"
            >
              💬 <span>WhatsApp: Chat with us</span>
            </a>

            {/* FACEBOOK */}
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#1877F2] transition"
            >
              📘 <span>Facebook: Visit our page</span>
            </a>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FAF8FF] p-10 rounded-3xl shadow-lg space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
            required
          />

          {/* INTEREST */}
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
          >
            <option>Volunteering</option>
            <option>Donating</option>
            <option>Learn more about events</option>
            <option>Others</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
            required
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-[#4B2D8F] text-white py-4 rounded-xl hover:bg-[#3B2273] transition font-medium"
          >
            Send Message ✉️
          </button>
        </form>

      </div>
    </section>
  );
}