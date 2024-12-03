import React, { useEffect, useState } from "react";
import bgwelcome from "../../assets/imgdibimbing/bgwelcome.jpg";
import gema from "../../assets/imgdibimbing/gama.png";

const Welcome = () => {
  const [dots, setDots] = useState([]);
  const [textVisible, setTextVisible] = useState(true);
  const [currentWord, setCurrentWord] = useState("Designer");
  const words = ["Designer", "Web Development"];

  // Generate random dots
  useEffect(() => {
    const dotCount = 50;
    const dotElements = [];
    for (let i = 0; i < dotCount; i++) {
      const delay = Math.random() * 8;
      const left = Math.random() * 100;
      const size = Math.random() * 6 + 2;
      dotElements.push({ delay, left, size });
    }
    setDots(dotElements);

    // Trigger text animation
    setTimeout(() => setTextVisible(true), 300);
  }, []);

  // Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Detect scroll and update text visibility
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setTextVisible(false); // Hide text after scroll
    } else {
      setTextVisible(true); // Show text when at top
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative px-8 py-20 lg:py-7 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${bgwelcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating Dots */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute bg-[#4FCAFF] rounded-full opacity-50"
          style={{
            bottom: "-5%",
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `float ${6 + dot.size}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        ></div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-12">
        {/* Right Section: Text */}
        <div
          className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out order-1 lg:order-2 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans-serif text-white mb-3 leading-snug tracking-wide">
            I'm <span className="text-[#FF0000]">Refa Setyagama</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-5">
            A student who has a hobby{' '}
            <span
              className="text-[#FF0000] font-bold"
              style={{
                display: "inline-block",
                animation: "changeWord 3s steps(1) infinite",
              }}
            >
              {currentWord}
            </span>
            .
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {/* Button: Hubungi Saya */}
            <a
              href="https://wa.me/6283112080715"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] text-black font-bold py-2 px-6 rounded-full hover:bg-[#FF5C5C] hover:scale-105 transition-transform"
            >
              Hubungi Saya
            </a>

            {/* Button: Lihat Portofolio */}
            <a
              href="/portfolio"
              className="border border-[#FF0000] text-[#FF0000] font-bold py-2 px-6 rounded-full hover:bg-[#FF5C5C] hover:text-black transition-transform"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>

        {/* Left Section: Image */}
        <div
          className={`w-full lg:w-1/2 relative lg:h-[400px] mt-4 lg:mt-0 transition-all duration-1000 ease-out order-2 lg:order-1 ${
            textVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src={gema}
            alt="Welcome Background"
            className="w-[60%] sm:w-[50%] lg:w-[70%] mx-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Keyframes and Animation Styles */}
      <style jsx>
        {`
          @keyframes changeWord {
            0% {
              opacity: 0;
              transform: translateX(-100%);
            }
            50% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0;
              transform: translateX(100%);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Welcome;
