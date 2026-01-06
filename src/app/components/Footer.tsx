import logo from '../../assets/logo-kidemy.webp';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Kidemy Logo" className="h-[6.5rem] sm:h-[7.5rem] w-auto brightness-0 invert hover:scale-105 transition-transform duration-200" />
            <p className="text-sm">
              Platform bimbingan belajar online privat terpercaya untuk meningkatkan prestasi akademik anak Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-8 md:mb-[6.75rem]">Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-white mb-8 md:mb-[6.75rem]">Program</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Bimbel SD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bimbel SMP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bimbel SMA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Persiapan UTBK</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-8 md:mb-[6.75rem]">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@kidemy.com" className="hover:text-white transition-colors">
                  kidemyofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61585946637159"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:scale-110"
                aria-label="Facebook Kidemy"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kidemyofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:scale-110"
                aria-label="Instagram Kidemy"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/628817019539?text=Halo%20Kidemy,%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan%20belajar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:scale-110"
                aria-label="WhatsApp Kidemy"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
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
