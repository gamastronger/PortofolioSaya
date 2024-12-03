import { Link } from "react-router-dom";
import ig from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import linked from "../assets/linked.png";

const Footer = () => {
  return (
    <footer className="bg-[#240000] text-white py-12 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div>
            <h3 className="text-3xl font-bold mb-5">Refan Jie</h3>
            <p className="text-base leading-relaxed mb-5">
              A passionate Graphic Designer and UI/UX enthusiast dedicated to creating innovative and functional designs that stand out.
            </p>
            <p className="text-sm">
              Transforming ideas into visual experiences that make an impact.
            </p>
          </div>

          {/* Skills and Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Skills & Services</h3>
            <ul className="space-y-3">
              {[
                { name: "UI/UX Design", icon: "" },
                { name: "Web Design", icon: "" },
                { name: "Graphic Design", icon: "" },
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-lg">{service.icon}</span>
                  <a
                    href="#"
                    className="ml-3 text-base hover:text-[#6eacda] transition duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-lg">✉</span>
                <a
                  href="mailto:refanjie02@gmail.com"
                  className="ml-3 text-base hover:text-[#6eacda] transition duration-300"
                >
                  refasetyagama@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-lg">📞</span>
                <a
                  href="tel:+6283112080715"
                  className="ml-3 text-base hover:text-[#6eacda] transition duration-300"
                >
                  083112080715
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-lg">📍</span>
                <p className="ml-3 text-base">Surabaya, Indonesia</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-10"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Refa. Copyright is protected by law.
          </p>

          {/* Social Media */}
          <ul className="flex space-x-6">
            {[ 
              
              { name: "Instagram", icon: ig, url: "https://www.instagram.com/refastygm_"},
              { name: "LinkedIn", icon: linked, url: "https://www.linkedin.com/in/gamaa/" },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/6283112080715"
            className="bg-white hover:bg-[#e2e2b6] text-black font-bold py-2 px-6 rounded-full transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kontak Saya
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
