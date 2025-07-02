import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Tilt } from "./components/Tilt";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaSun, FaMoon, FaArrowUp, FaFacebookF, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [selected, setSelected] = useState({ category: "", subsection: "" });
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (category, subsection) => {
    setSelected({ category, subsection });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyMap = {
    "Painted Bottles": "paintedbottles",
    "Fairy Light Bottles": "fairylightbottles",
    "Bottle Vases": "bottlevases",
    "Mosaic Bottles": "mosaicbottles",
    "Decoupage Bottles": "decoupagebottles",
    "Themed Bottle Decor": "themedbottledecor",
    "Name Bottles": "namebottles",
    "Dreamcatcher": "dreamcatcher",
    "Mandala": "mandala",
    "Mirror Art": "mirrorart",
    "Fridge Magnet": "fridgemagnet",
    "Clock": "clock",
    "Bottle Cap Fridge Magnets": "bottlecapfridgemagnets",
    "Plastic Spoon Flowers": "plasticspoonflowers",
    "CD Art Wall Pieces": "cdartwallpieces",
    "Upcycled Plastic Jewelry": "upcycledplasticjewelry",
    "Handmade Greeting Cards": "handmadegreetingcards",
    "DIY Candle in a Jar": "diycandleinajar",
    "Handmade Gift Box & Tag Set": "handmadegiftboxtagset",
    "Terracotta Pot Painting": "terracottapotpainting",
    "Mandala Pot Design": "mandalapotart",
    "Plastic Bottle Planters": "plasticpotart",
    "Themed Pot Art": "themepotart",
    "Acrylic Painting": "acrylicpainting",
    "Watercolor Painting": "watercolorpainting",
    "Oil Painting": "oilpainting",
    "Ink & Pen Painting": "inkpenpainting",
    "Paper Bags": "paperbags",
    "Bows/Trays": "tray",
    "Pen Stand": "penstand",
    "Gift Box": "giftbox",
    "Jewellery Box": "jewellerybox",
    "Earrings": "earrings",
    "Necklaces": "necklaces",
    "Brooches & Hair Accessories": "hairaccessories",
    "Paper Flowers": "paperflowers",
    "Fabric Flowers": "fabricflowers",
    "Ribbon Flowers": "ribbonflowers",
    "Clay Flowers": "clayflowers",
    "Eco Flowers": "ecoflowers",
    "Fabric Keychains": "fabrickeychains",
    "Clay Keychains": "claykeychains",
    "Crochet Keychains": "crochetkeychains",
    "Paper Keychains": "paperkeychains",
    "Beaded Keychains": "beadedkeychains",
    "Personalized Gift Bottles": "personalizedgiftbottles",
    "Mini Scrapbook": "miniscrapbook",
  };

  const imageMap = {
    paintedbottles: ["/Painted_bottle-1.png", "/Painted_bottle-2.png"],
    fairylightbottles: ["/FL-1.png", "/FL-2.png"],
    bottlevases: ["/Bottle_vase-1.png", "/Bottle_vase-2.png"],
    mosaicbottles: ["/Mosaic_Bottle-1.png", "/Mosaic_Bottle-2.png"],
    decoupagebottles: ["/Decoupage-1.png", "/Decoupage-2.png"],
    themedbottledecor: ["/Theme-1.png", "/Theme-2.png"],
    namebottles: ["/Name_Bottle-1.png", "/Name_Bottle-2.png"],
    dreamcatcher: ["/Dreamcatcher-1.png", "/Dreamcatcher-2.png"],
    mandala: ["/Mandala-1.png", "/Mandala-2.png"],
    mirrorart: ["/Mirror_Art-1.png", "/Mirror_Art-2.png"],
    fridgemagnet: ["/Fridge_Magnet-1.png", "/Fridge_Magnet-2.png"],
    clock: ["/Clock-1.png", "/Clock-2.png"],
    bottlecapfridgemagnets: ["/FM-1.png", "/FM-2.png"],
    plasticspoonflowers: ["/spoon-1.png", "/spoon-2.png"],
    cdartwallpieces: ["/CD-1.png", "/CD-2.png"],
    upcycledplasticjewelry: ["/Jewelery-1.png", "/Jewelery-2.png"],
    handmadegreetingcards: ["/Handmade-1.png", "/Handmade-2.png"],
    diycandleinajar: ["/Candle-1.png", "/Candle-2.png"],
    handmadegiftboxtagset: ["/Gift-1.png", "/Gift-2.png"],
    terracottapotpainting: ["/Teracota-1.png", "/Teracota-2.png"],
    mandalapotart: ["/Mandala_pot-1.png", "/Mandala_pot-2.png"],
    plasticpotart: ["/Plastic-1.png", "/Plastic-2.png"],
    themepotart: ["/Theme_pot-1.png", "/Theme_pot-2.png"],
    acrylicpainting: ["/Acrylic-1.png", "/Acrylic-2.png"],
    watercolorpainting: ["/Water-1.png", "/Water-2.png"],
    oilpainting: ["/Oil-1.png", "/Oil-2.png"],
    inkpenpainting: ["/Pen-1.png", "/Pen-2.png"],
    paperbags: ["/Paper_Bag-1.png", "/Paper_Bag-2.png"],
    tray: ["/Tray-1.png", "/Tray-2.png"],
    penstand: ["/Pen_stand-1.png", "/Pen_stand-2.png"],
    giftbox: ["/Gift_box-1.png", "/Gift_box-2.png"],
    jewellerybox: ["/Jewelery_box-1.png", "/Jewelery_box-2.png"],
    earrings: ["/Earings-1.png", "/Earings-2.png"],
    necklaces: ["/Necklace-1.png", "/Necklace-2.png"],
    hairaccessories: ["/Hair-1.png", "/Hair-2.png"],
    paperflowers: ["/Paper-1.png", "/Paper-2.png"],
    fabricflowers: ["/Fabric-1.png", "/Fabric-2.png"],
    ribbonflowers: ["/Ribbon-1.png", "/Ribbon-2.png"],
    clayflowers: ["/Clay-1.png", "/Clay-2.png"],
    ecoflowers: ["/Eco-1.png", "/Eco-2.png"],
    fabrickeychains: ["/Fabric_Keychain-1.png", "/Fabric_Keychain-2.png"],
    claykeychains: ["/Clay_Keychain-1.png", "/Clay_Keychain-2.png"],
    crochetkeychains: ["/Crochet-1.png", "/Crochet-2.png"],
    paperkeychains: ["/Paper_Keychain-1.png", "/Paper_Keychain-2.png"],
    beadedkeychains: ["/Beads-1.png", "/Beads-2.png"],
    personalizedgiftbottles: ["/Personalized-1.png", "/Personalized-2.png"],
    miniscrapbook: ["/Scrapbook-1.png", "/Scrapbook-2.png"],
  };

  const getImagesForSelection = () => {
    const { subsection } = selected;
    const key = keyMap[subsection];
    return imageMap[key] || [];
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-[#ffe0e9] via-[#ffd6d6] to-[#ffe7d9] text-black"
      } min-h-screen transition-all duration-500`}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            color: { value: darkMode ? "#ff00ff" : "#000" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              distance: 150,
              color: darkMode ? "#ff00ff" : "#000",
              opacity: 0.4,
            },
          },
          fullScreen: { enable: false },
        }}
      />

      <Navbar onSelect={handleSelect} darkMode={darkMode} />

      {/* Theme Toggle */}
      <div className="fixed bottom-24 left-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg hover:scale-110 transition ${
            darkMode
              ? "bg-gradient-to-r from-pink-500 to-purple-700"
              : "bg-gradient-to-r from-yellow-300 to-pink-400"
          }`}
        >
          {darkMode ? (
            <FaSun className="text-white text-xl" />
          ) : (
            <FaMoon className="text-black text-xl" />
          )}
        </button>
      </div>

      {/* Back to Top */}
      {showTopBtn && (
        <button
          className={`fixed bottom-24 right-6 z-50 p-3 rounded-full shadow-xl hover:scale-110 transition ${
            darkMode
              ? "bg-gradient-to-r from-pink-500 to-purple-700 text-white"
              : "bg-gradient-to-r from-yellow-300 to-pink-400 text-black"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      )}

      {/* Hero Section */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-24 gap-6 z-10"
        data-aos="fade-up"
      >
        {/* Social Icons */}
        <a
          href="https://www.facebook.com/share/1AtrSA3Qkc/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-24 left-6 md:left-8 p-3 rounded-full shadow-2xl bg-blue-600 hover:scale-110 z-50"
        >
          <FaFacebookF className="text-white text-xl" />
        </a>
        <a
          href="https://www.instagram.com/____rashmita_____?igsh=MXVjNzN1OWdvYW9jYg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-24 right-6 md:right-8 p-3 rounded-full shadow-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 z-50"
        >
          <FaInstagram className="text-white text-xl" />
        </a>

        {/* Hero Image */}
        <div className="flex flex-col items-center md:items-start">
          <div
            className={`p-1 rounded-full ${
              darkMode
                ? "bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500"
                : "bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500"
            }`}
          >
            <img
              src="/rashmita.png"
              alt="Rashmita Kakoti"
              className="w-72 h-72 rounded-full border-8 border-black shadow-2xl"
            />
          </div>
          <p className="mt-4 text-sm md:text-base max-w-xs leading-relaxed">
            <span className="font-semibold bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Rashmita Kakoti
            </span>{" "}
            —{" "}
            <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent font-medium">
              The creative mind behind every art you see here.
            </span>{" "}
            Handcrafted with passion and love.
          </p>
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-6xl font-bold drop-shadow-xl">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Handcrafted Art.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Made with Love.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed">
            Explore a world of creativity — from bottle art to handmade jewelry,
            from wall hangings to upcycled crafts.{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-medium">
              Unique. Sustainable. Beautiful.
            </span>
          </p>

          <button
            className={`mt-8 px-10 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition ${
              darkMode
                ? "bg-gradient-to-r from-pink-500 to-purple-600"
                : "bg-gradient-to-r from-yellow-400 to-pink-500"
            }`}
          >
            Explore Collections
          </button>
        </div>
      </div>

      {/* Collection Section */}
      <section className="relative z-10 py-4 px-8">
        <h2 className="text-4xl font-bold mb-6 text-center">
          {selected.category
            ? `${selected.subsection} - (${selected.category})`
            : "Explore Our Collections"}
        </h2>

        {selected.category ? (
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap">
            {getImagesForSelection().map((imgSrc, index) => (
              <Tilt
                key={index}
                options={{
                  scale: 1.05,
                  speed: 1000,
                  max: 15,
                  glare: true,
                  "max-glare": 0.3,
                }}
                className={`w-[460px] h-[460px] rounded-3xl overflow-hidden hover:scale-105 transition ${
                  darkMode
                    ? "bg-black/40 backdrop-blur-lg border border-pink-500 shadow-[0_20px_50px_rgba(255,0,255,0.6)]"
                    : "bg-white/80 backdrop-blur-lg border border-black shadow-[0_20px_50px_rgba(255,20,147,0.9)]"
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`${selected.subsection} ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </Tilt>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">
            Select any section from the menu to view.
          </p>
        )}
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
