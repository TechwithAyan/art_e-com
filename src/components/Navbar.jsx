import { useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const categories = [
  "Bottle & Glass Art",
  "Wall Hangings",
  "Upcycled Crafts",
  "Paper Crafts",
  "Gift Crafts",
  "Flower Pot Art",
  "Painting",
  "Paper Basket",
  "Jewellery",
  "Flowers",
  "Keychains",
];

const subCategories = {
  "Bottle & Glass Art": [
    "Painted Bottles", "Fairy Light Bottles", "Bottle Vases",
    "Mosaic Bottles", "Decoupage Bottles", "Themed Bottle Decor", "Name Bottles",
  ],
  "Wall Hangings": ["Dreamcatcher", "Mandala", "Mirror Art", "Fridge Magnet", "Clock"],
  "Upcycled Crafts": [
    "Bottle Cap Fridge Magnets", "Plastic Spoon Flowers",
    "CD Art Wall Pieces", "Upcycled Plastic Jewelry",
  ],
  "Paper Crafts": ["Handmade Greeting Cards"],
  "Gift Crafts": [
    "Personalized Gift Bottles", "DIY Candle in a Jar",
    "Handmade Gift Box & Tag Set", "Mini Scrapbook",
  ],
  "Flower Pot Art": [
    "Terracotta Pot Painting", "Mandala Pot Design",
    "Plastic Bottle Planters", "Themed Pot Art",
  ],
  "Painting": [
    "Acrylic Painting", "Watercolor Painting", "Oil Painting", "Ink & Pen Painting",
  ],
  "Paper Basket": ["Paper Bags", "Bows/Trays", "Pen Stand", "Gift Box", "Jewellery Box"],
  "Jewellery": ["Earrings", "Necklaces", "Brooches & Hair Accessories"],
  "Flowers": ["Paper Flowers", "Fabric Flowers", "Ribbon Flowers", "Clay Flowers", "Eco Flowers"],
  "Keychains": ["Fabric Keychains", "Clay Keychains", "Crochet Keychains", "Paper Keychains", "Beaded Keychains"],
};

const Navbar = ({ darkMode, onSelect = () => {} }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showPages, setShowPages] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = (category) => {
    setActiveDropdown(category === activeDropdown ? null : category);
  };

  return (
    <div className="w-full">
      {/* 🔥 Top Logo Bar */}
      <div
        className={`${
          darkMode ? "bg-black" : "bg-white"
        } border-b-2 border-pink-500 py-4 sticky top-0 z-[100]`}
      >
        <div className="flex justify-center items-center">
          <div
            className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-cursive drop-shadow-md hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate("/")}
          >
            Art & Craft Hub
          </div>
        </div>
      </div>

      {/* 🔥 Categories Sticky Bar */}
      <div
        className={`${
          darkMode
            ? "bg-black bg-opacity-80 border-pink-500"
            : "bg-gradient-to-r from-pink-50 via-peach-100 to-pink-50 border-pink-500"
        } backdrop-blur-md border-b sticky top-[72px] z-[90]`}
      >
        <div className="flex justify-center items-center gap-6 px-4 py-3 flex-wrap">
          {categories.map((category) => (
            <div key={category} className="relative">
              <button
                onClick={() => handleDropdown(category)}
                className={`flex items-center gap-1 ${
                  activeDropdown === category
                    ? "text-pink-600"
                    : darkMode
                    ? "text-white hover:text-pink-400"
                    : "text-black hover:text-pink-600"
                } text-[15px] font-medium`}
              >
                {category} <FaChevronDown size={10} />
              </button>

              {activeDropdown === category && (
                <div
                  className={`absolute top-9 left-0 z-[200] min-w-[220px] rounded-xl border shadow-xl p-4 ${
                    darkMode
                      ? "bg-black/80 border-pink-500"
                      : "bg-gradient-to-tr from-white via-pink-50 to-peach-50 border-yellow-400"
                  }`}
                >
                  <ul className="space-y-2">
                    {subCategories[category].map((item, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          onSelect(category, item);
                          setActiveDropdown(null);
                        }}
                        className={`cursor-pointer text-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                          darkMode
                            ? "bg-black hover:bg-pink-700 text-white"
                            : "bg-white hover:bg-pink-200 text-black"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PagesButtonInHero = ({ darkMode }) => {
  const [showPages, setShowPages] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="absolute top-6 left-6 z-[300]">
      <button
        onClick={() => setShowPages(!showPages)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border shadow-md ${
          darkMode
            ? "bg-black/80 border-pink-500 text-white hover:text-pink-400"
            : "bg-white border-yellow-400 text-black hover:text-pink-600"
        }`}
      >
        <FaBars /> Pages
      </button>

      {showPages && (
        <div
          className={`absolute mt-2 left-0 rounded-xl border shadow-xl p-4 z-[999] ${
            darkMode
              ? "bg-black/80 border-pink-500"
              : "bg-gradient-to-tr from-white via-pink-50 to-peach-50 border-yellow-400"
          }`}
        >
          <ul className="space-y-2">
            {["Home", "About", "Gallery", "Contact"].map((page) => (
              <li
                key={page}
                onClick={() => {
                  navigate(
                    page === "Home"
                      ? "/"
                      : page === "About"
                      ? "/about"
                      : page === "Gallery"
                      ? "/gallery"
                      : "/contact"
                  );
                  setShowPages(false);
                }}
                className={`cursor-pointer text-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                  darkMode
                    ? "bg-black hover:bg-pink-700 text-white"
                    : "bg-white hover:bg-pink-200 text-black"
                }`}
              >
                {page}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
