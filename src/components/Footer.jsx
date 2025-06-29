const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`shadow-2xl border-t ${
        darkMode
          ? "bg-gradient-to-r from-black via-black to-purple-900 border-pink-500"
          : "bg-gradient-to-r from-[#ffe0e9] via-[#ffd6d6] to-[#ffe7d9] border-yellow-400"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p
          className={`text-3xl md:text-4xl lg:text-5xl text-center font-cursive leading-relaxed drop-shadow-xl ${
            darkMode ? "text-white" : "text-black"
          }`}
          style={{
            textShadow: darkMode
              ? "2px 2px 12px magenta"
              : "2px 2px 12px orange",
          }}
        >
          “Art is not freedom from discipline, but disciplined freedom.”
          <br />
          <span
            className={`${
              darkMode ? "text-pink-400" : "text-pink-600"
            } font-semibold`}
          >
            Every masterpiece you see here is crafted with passion, love, and a
            sprinkle of magic.
          </span>
          <br />
          <span
            className={`${
              darkMode ? "text-purple-400" : "text-purple-600"
            } font-semibold`}
          >
            — Rashmita's Creative Studio ❤️
          </span>
        </p>
      </div>

      <div
        className={`text-center py-4 text-sm tracking-wider ${
          darkMode ? "text-pink-300" : "text-orange-500"
        }`}
      >
        © {new Date().getFullYear()} Art & Craft Hub | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
