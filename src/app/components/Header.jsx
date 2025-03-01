const Header = () => {
  return (
    <header className="bg-white p-3 sm:p-4 flex justify-between items-center border border-gray-300 fixed top-0 left-0 w-full z-10">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img src="/logo.png" alt="WhatBytes" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
        <h1 className="text-lg sm:text-xl md:text-3xl text-black font-bold">WhatBytes</h1>
      </div>
      <div className="flex items-center rounded-lg px-1 sm:px-2 py-1 sm:py-2 space-x-2 sm:space-x-4 border-2 border-gray-200 ml-auto">
        <img src="/profile.jpeg" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
        <span className="text-sm sm:text-md md:text-lg text-black font-bold">Shreyasi Sen</span>
      </div>
    </header>
  );
};

export default Header;
