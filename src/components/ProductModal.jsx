// components/ProductModal.jsx
import React from "react";
import {
  FaTimes,
  FaTruck,
  FaShoppingBag,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

 export const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const message = encodeURIComponent(
    `Hello, I'm interested in the ${product.name}. Is it still available?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl animate-modal">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 z-10 bg-white text-gray-600 rounded-full p-2 hover:bg-red-50 hover:text-red-500 transition-all shadow-md"
              >
                <FaTimes size={20} />
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="md:w-1/2 p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold border border-blue-200">
                {product.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-500">(48 reviews)</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-8">
            {product.price}
              </div>
            </div>

            <a
              href={`https://wa.me/2341234567890?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl text-center font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <FaWhatsapp className="mr-3" size={24} />
              Chat Vendor on WhatsApp
            </a>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-700">
                <FaTruck className="mr-3 text-blue-500" />
                <div>
                  <div className="font-semibold">Fast Delivery</div>
                  <div className="text-sm text-gray-500">24-48 hours</div>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <FaShoppingBag className="mr-3 text-purple-500" />
                <div>
                  <div className="font-semibold">Easy Returns</div>
                  <div className="text-sm text-gray-500">30 days policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

