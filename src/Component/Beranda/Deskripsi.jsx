import React from "react";
import foto4 from "../../assets/imgdibimbing/grafistix.jpg";
import corel from "../../assets/imgdibimbing/imerch3.png";
import ilustrator from "../../assets/imgdibimbing/icustom8.jpg";
import photoshop from "../../assets/imgdibimbing/imerch2.png";
import inkscape from "../../assets/imgdibimbing/icustom4.png";
import poster from "../../assets/imgdibimbing/icustom6.png";
import about from "../../assets/imgdibimbing/codeabout.jpg";

const Deskripsi = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-[#010101] px-6 lg:px-20 text-center lg:text-left"
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full h-[1200px] bg-cover bg-center"
            style={{ backgroundImage: `url(${about})` }}
          ></div>
        </div>
      </section>

      {/* Hero Section */}
      <header className="relative bg-[#240000] text-white h-[60vh] flex items-center justify-center px-12 lg:px-12">
        <div className="text-center">
          <h1 className="text-2xl lg:text-5xl font-sans-serif mb-6">
            Developing Work From Design
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-8">
            I will show my portfolio in graphic design and website developer.
          </p>
          <a
            href="#projects"
            className="bg-white text-[#FF0000] px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition"
          >
            View Portfolio
          </a>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="projects" className="py-16 bg-[#010101] px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Portfolio
        </h2>
        <p className="text-lg lg:text-xl text-white mb-10">
          A selection of works that I have realized from my creative imagination.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <a href="https://grafistix.vercel.app/">
              <img
                src={foto4}
                alt="Project 1"
                className="w-full h-64 object-cover hover:scale-110 transition-transform"
              />
            </a>
            <div className="p-4 bg-[#240000]">
              <h3 className="text-lg font-semibold text-white">Project 1</h3>
              <p className="text-sm text-gray-300 mt-2">
                Gayatama Web Design Competition, Grafistix
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={poster}
              alt="Project 2"
              className="w-full h-64 object-cover hover:scale-110 transition-transform"
            />
            <div className="p-4 bg-[#240000]">
              <h3 className="text-lg font-semibold text-white">Project 2</h3>
              <p className="text-sm text-gray-300 mt-2">
                Desain Abstrak dari sebuah cerita kesedihan
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={photoshop}
              alt="Project 3"
              className="w-full h-64 object-cover hover:scale-110 transition-transform"
            />
            <div className="p-4 bg-[#240000]">
              <h3 className="text-lg font-semibold text-white">Project 3</h3>
              <p className="text-sm text-gray-300 mt-2">
                Desain Sepatu dari event AeroStreet x NamaKalian
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={corel}
              alt="Project 4"
              className="w-full h-64 object-cover hover:scale-110 transition-transform"
            />
            <div className="p-4 bg-[#240000]">
              <h3 className="text-lg font-semibold text-white">Project 4</h3>
              <p className="text-sm text-gray-300 mt-2">Desain Kaos Supporter Sekolah</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={ilustrator}
              alt="Project 5"
              className="w-full h-64 object-cover hover:scale-110 transition-transform"
            />
            <div className="p-4 bg-[#240000]">
              <h3 className="text-lg font-semibold text-white">Project 5</h3>
              <p className="text-sm text-gray-300 mt-2">Desain Custom Individu</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={inkscape}
              alt="Project 6"
              className="w-full h-64 object-cover hover:scale-110 transition-transform"
            />
            <div className="p-4 bg-[#240000]">
              <h3 className="text-lg font-semibold text-white">Project 6</h3>
              <p className="text-sm text-gray-300 mt-2">Desain Cover Buku Angel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-[#010101] px-6 lg:px-20 text-center"
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-lg lg:text-xl text-white mb-10">
          Ready to work together? Reach out, and lets make something amazing.
        </p>
        <form className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-[#240000] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Deskripsi;
