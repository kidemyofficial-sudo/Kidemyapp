import logo from '../../assets/logo-kidemy.webp';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-4 mb-6 md:mb-8">
          {/* Company Info - Mobile Optimized */}
          <div className="flex flex-col relative">
            {/* Logo area - visually matches heading height for alignment */}
            <div className="mb-4 md:mb-6 flex items-center">
              <img
                src={logo}
                alt="KidemyOfficial Logo"
                className="h-10 sm:h-12 w-auto brightness-0 invert hover:scale-105 transition-transform duration-200"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed md:pr-4">
              Platform bimbingan belajar online dan offline privat terpercaya untuk meningkatkan prestasi akademik anak Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 md:mb-8 text-lg">Menu Cepat</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Program</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tutor</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-white mb-6 md:mb-8 text-lg">Program</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#program" className="hover:text-blue-400 transition-colors">SD (Kelas 1-6)</a></li>
              <li><a href="#program" className="hover:text-blue-400 transition-colors">SMP (Kelas 7-9)</a></li>
              <li><a href="#program" className="hover:text-blue-400 transition-colors">SMA (Kelas 10-12)</a></li>
              <li><a href="#program" className="hover:text-blue-400 transition-colors">Mahasiswa</a></li>
              <li><a href="#program" className="hover:text-blue-400 transition-colors">Coding</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 md:mb-8 text-lg">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:kidemyofficial@gmail.com" className="hover:text-white transition-colors">
                  kidemyofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+628817019539" className="hover:text-white transition-colors">
                  +62 881-7019-539
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585946637159", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/kidemyofficial/", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/628817019539?text=Halo%20KidemyOfficial,%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan%20belajar", label: "WhatsApp" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6 md:pt-8 md:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 Kidemy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}