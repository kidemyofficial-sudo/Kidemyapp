import { Button } from './ui/button';

interface CTAProps {
  onRegisterClick: () => void;
}

export function CTA({ onRegisterClick }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Siap Meningkatkan Prestasi Belajar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Daftar Sekarang dan Mulai Perjalanan Belajar Lebih Baik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8"
              onClick={onRegisterClick}
            >
              Daftar Kelas
            </Button>
            <a
              href="https://wa.me/628817019539?text=Halo%20KidemyOfficial,%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan%20belajar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 px-8 w-full sm:w-auto">
                Hubungi Kami
              </Button>
            </a>
          </div>
          <div className="text-blue-100 mt-8 text-sm sm:text-base px-6 italic flex flex-col items-center gap-1 leading-relaxed">
            <p>"Setiap anak memiliki potensi yang luar biasa.</p>
            <p>Pendidikan adalah cara untuk menggali dan mengembangkannya."</p>
            <p className="not-italic font-semibold text-white/90 mt-3 text-xs sm:text-sm">— Ray Wiladatika</p>
          </div>
        </div>
      </div>
    </section>
  );
}