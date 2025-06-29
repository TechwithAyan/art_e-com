const FloatingIcons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/color/48/facebook.png"
          alt="Facebook"
          className="hover:scale-110 transition-transform"
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/color/48/instagram-new.png"
          alt="Instagram"
          className="hover:scale-110 transition-transform"
        />
      </a>
      <a href="https://wa.me/917086651160" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/color/48/whatsapp.png"
          alt="WhatsApp"
          className="hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default FloatingIcons;
