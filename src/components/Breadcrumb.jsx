const Breadcrumb = ({ category, subsection, darkMode }) => {
  if (!category) return null;

  return (
    <div
      className={`flex gap-3 px-8 py-4 text-lg md:text-xl font-medium ${
        darkMode
          ? "text-orange-400"
          : "bg-white/60 backdrop-blur-md rounded-xl shadow-md"
      }`}
    >
      <span
        className="cursor-pointer hover:underline"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Home
      </span>
      <span className="text-gray-500">/</span>
      <span className="text-pink-500">{category}</span>
      {subsection && (
        <>
          <span className="text-gray-500">/</span>
          <span className="text-purple-500">{subsection}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;

