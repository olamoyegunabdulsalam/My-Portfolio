import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = ({ onWhatsAppClick }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Have questions about sizing, delivery, or availability? Reach out to
            us — we respond fast.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <span className="text-gray-700 font-medium">
                +234 XXX XXX XXXX
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span className="text-gray-700 font-medium">
                hello@stylehub.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-purple-600" />
              <span className="text-gray-700 font-medium">Nigeria</span>
            </div>
          </div>

          <button
            onClick={onWhatsAppClick}
            className="mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Start WhatsApp Chat
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
            ></textarea>
            <button
              type="button"
              onClick={onWhatsAppClick}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
