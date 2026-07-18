"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

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

    window.location.href = `mailto:brightbridgehubs@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  const whatsappLink =
    "https://wa.me/601126285388?text=" +
    encodeURIComponent(
      "Hello! I would like to know more about Amazing Minds programs and how I can get involved."
    );

  const facebookLink =
    "https://www.facebook.com/share/1HsJe3rycH/";

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>

          <h2 className="text-5xl font-semibold text-[#4B2D8F]">
            {t.contact.title}
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            {t.contact.description}
          </p>

          <div className="mt-10 space-y-5 text-gray-700">

            {/* Email */}
            <a
              href="mailto:brightbridgehubs@gmail.com"
              className="flex items-center gap-3 hover:text-[#4B2D8F] transition"
            >
              📧
              <span>
                {t.contact.email}: brightbridgehubs@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+601126285388"
              className="flex items-center gap-3 hover:text-[#4B2D8F] transition"
            >
              📞
              <span>
                {t.contact.phone}: +60 11-262 85388
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#4B2D8F] transition"
            >
              💬
              <span>{t.contact.whatsapp}</span>
            </a>

            {/* Facebook */}
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#1877F2] transition"
            >
              📘
              <span>{t.contact.facebook}</span>
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FAF8FF] p-10 rounded-3xl shadow-lg space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder={t.contact.name}
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.contact.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
            required
          />

          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
          >

            <option value="Buy Artworks">
              {t.contact.buyArtworks}
            </option>


            <option value="Volunteering">
              {t.contact.volunteer}
            </option>

            <option value="Donating">
              {t.contact.donate}
            </option>

            <option value="Learn more about events">
              {t.contact.events}
            </option>

            <option value="Others">
              {t.contact.others}
            </option>

          </select>

          <textarea
            name="message"
            placeholder={t.contact.message}
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4B2D8F]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#4B2D8F] text-white py-4 rounded-xl hover:bg-[#3B2273] transition font-medium"
          >
            {t.contact.send}
          </button>

        </form>

      </div>
    </section>
  );
}