import { Button } from './ui/button';

interface CTAProps {
  onRegisterClick: () => void;
}

export function CTA({ onRegisterClick }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Siap Meningkatkan Prestasi Belajar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Daftar sekarang dan dapatkan kelas percobaan gratis untuk merasakan pengalaman belajar bersama Kidemy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8"
              onClick={onRegisterClick}
            >
              Daftar Kelas Gratis
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Hubungi Kami
            </Button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            "It is our choices, Harry, that show what we truly are, far more than our abilities." - Albus Dumbledore
          </p>
        </div>
      </div>
    </section>
  );
}