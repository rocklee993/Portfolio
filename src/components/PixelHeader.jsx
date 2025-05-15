const PixelHeader = () => {
  return (
    <header className="bg-[#1C1C1C] border-b-4 border-yellow-400 py-4 px-6 text-center shadow-xl font-pixel">
      <h1 className="text-yellow-300 text-2xl sm:text-3xl drop-shadow tracking-widest mb-2">
        MY PORTFOLIO
      </h1>
      <nav className="space-x-6">
        <a
          href="#projects"
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200"
        >
          Projects
        </a>
        <a
          href="#profile"
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200"
        >
          Profile
        </a>
        <a
          href="#skills"
          className="text-green-300 hover:text-yellow-300 text-sm sm:text-base transition duration-200"
        >
          Skills
        </a>
      </nav>
    </header>
  );
};

export default PixelHeader;
