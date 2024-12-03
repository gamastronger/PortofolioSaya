import logo from "../assets/imgdibimbing/rplogo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Toggle sidebar visibility
  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Handle navbar visibility on scroll
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsHidden(true); // Hide navbar when scrolling down
      } else {
        setIsHidden(false); // Show navbar when scrolling up
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSidebarVisible(false); // Close sidebar after clicking
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`py-9 px-8 flex items-center justify-between text-[#e2e2b6] shadow-lg transition-transform duration-300 fixed top-0 w-full z-50 bg-[#050505] ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-[40px]" src={logo} alt="Logo" />
          <span className="ml-3 text-xl font-bold text-white">Setyagama</span>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex gap-8 text-lg text-white font-sans items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-[#6eacda] transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#6eacda] transition duration-300"
          >
            About Me
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="block md:hidden" onClick={handleSidebar}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Sidebar for Mobile */}
        {sidebarVisible && (
          <aside
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={handleSidebar}
          >
            <div
              className="absolute top-0 right-0 w-64 h-full bg-[#050505] shadow-lg p-6 rounded-l-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="flex justify-end mb-4" onClick={handleSidebar}>
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              {/* Mobile Links */}
              <ul className="flex flex-col text-[#17A9E8] gap-6">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portofolio")}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("message")}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Message
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>

      {/* Spacing to prevent content overlap */}
      <div className="pt-16 md:pt-20 lg:pt-24"></div>
    </div>
  );
};

export default Navbar;
