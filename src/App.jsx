// App.jsx
import React, { useState, useEffect } from "react";
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {Products} from "./components/Products";
import {Categories} from "./components/Categories";
import {ProductModal} from "./components/ProductModal";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import {Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    category: "jackets",
    price: "₦15,000",
    description: "Premium quality denim jacket with modern fit",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    category: "dresses",
    price: "₦12,500",
    description: "Lightweight floral print dress perfect for summer",
    image:
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w-400&h=500&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    category: "shirts",
    price: "₦4,500",
    description: "100% cotton basic tee in multiple colors",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    category: "shoes",
    price: "₦18,000",
    description: "Comfortable everyday sneakers",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Silk Evening Gown",
    category: "dresses",
    price: "₦25,000",
    description: "Elegant silk gown for special occasions",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "Oversized Hoodie",
    category: "jackets",
    price: "₦9,500",
    description: "Cozy oversized hoodie with front pocket",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Formal Leather Shoes",
    category: "shoes",
    price: "₦22,000",
    description: "Premium leather formal shoes",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Casual Button-Down Shirt",
    category: "shirts",
    price: "₦8,500",
    description: "Versatile button-down shirt",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop&crop=center",
  },
];

const CATEGORIES = [
  { id: "all", name: "All Items" },
  { id: "dresses", name: "Dresses" },
  { id: "shirts", name: "Shirts" },
  { id: "jackets", name: "Jackets" },
  { id: "shoes", name: "Shoes" },
];

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATA);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter products based on category and search term
  useEffect(() => {
    let filtered = PRODUCTS_DATA;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const handleWhatsAppClick = (product = null) => {
    const phoneNumber = "234XXXXXXXXXX";
    let message = "Hello, I'm interested in your fashion items!";

    if (product) {
      message = `Hello, I'm interested in the ${product.name}. Is it still available?`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onWhatsAppClick={() => handleWhatsAppClick()} />
      <Hero onWhatsAppClick={() => handleWhatsAppClick()} />

      <Categories
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Products
        products={filteredProducts}
        onProductClick={handleProductClick}
        onWhatsAppClick={handleWhatsAppClick}
      />

      <ProductModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={closeModal}
        onWhatsAppClick={handleWhatsAppClick}
      />

      <AboutUs onWhatsAppClick={handleWhatsAppClick} />
      <Contact onWhatsAppClick={handleWhatsAppClick} />

      <Footer />
      <FloatingWhatsAppButton onClick={() => handleWhatsAppClick()} />
    </div>
  );
}

export default App;
