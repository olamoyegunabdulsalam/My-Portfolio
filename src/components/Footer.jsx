import React from "react";
import { Shield, Truck, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">StyleHub</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Trendy and affordable fashion delivered fast across Nigeria. All
            orders are processed directly via WhatsApp for a smooth shopping
            experience.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Shop</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#products" className="hover:text-white transition">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-green-400" />
              Secure & Trusted Orders
            </li>
            <li className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-blue-400" />
              Fast Nationwide Delivery
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              24/7 WhatsApp Support
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StyleHub. All rights reserved.
        <span className="block mt-2">
          Built by Olamoyegun Abdulsalam • Orders via WhatsApp
        </span>
      </div>
    </div>
  </footer>
);
