import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroCarouselProps {
  onRegisterClick: () => void;
}

const slides = [
  {
    title: 'Bimbingan Belajar Privat Terbaik',
    subtitle: 'Tingkatkan prestasi akademik anak Anda dengan tutor profesional yang berpengalaman',
    gradient: 'from-blue-600 to-purple-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Pembelajaran 1-on-1 yang Efektif',
    subtitle: 'Setiap siswa mendapat perhatian penuh dengan metode pembelajaran yang disesuaikan',
    gradient: 'from-green-600 to-teal-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Jadwal Fleksibel, Belajar Kapan Saja',
    subtitle: 'Tentukan jadwal belajar sesuai kenyamanan Anda. Tersedia dari pagi hingga malam',
    gradient: 'from-orange-600 to-pink-600',
    bgColor: 'bg-orange-50'
  }
];

export function HeroCarousel({ onRegisterClick }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden" id="home">
      {/* Mobile: auto height, Desktop: fixed height */}
      <div className="relative min-h-[100vh] md:h-[calc(100vh-5rem)]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
              }`}
          >
            <div className={`h-full ${slide.bgColor}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                {/* MOBILE: Single column, scrollable */}
                <div className="block lg:hidden py-20">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4 pt-8">
                      <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base text-gray-600">
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${slide.gradient} text-white hover:opacity-90 transition-opacity`}
                      onClick={onRegisterClick}
                    >
                      Daftar Sekarang
                    </Button>
                  </div>
                </div>
                {/* DESKTOP: Two column layout (keep existing) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center justify-center h-full py-8 lg:py-0">
                  {/* Left Content */}
                  <div className="space-y-8 z-10">
                    <div className="space-y-6">
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl text-gray-600">
                        {slide.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${slide.gradient} text-white px-8 hover:opacity-90 transition-opacity`}
                        onClick={onRegisterClick}
                      >
                        Daftar Sekarang
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-8 pt-4">
                      <div>

                      </div>
                    </div>
                  </div>

                  {/* Right Illustration */}
                  <div className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-lg">
                      <div className={`absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r ${slide.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob`}></div>
                      <div className={`absolute -bottom-8 -right-4 w-72 h-72 bg-gradient-to-r ${slide.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000`}></div>
                      <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r ${slide.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000`}></div>

                      {/* Card */}
                      <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 bg-gradient-to-r ${slide.gradient} rounded-xl flex items-center justify-center`}>
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-lg">Sesi Pembelajaran</div>
                              <div className="text-sm text-gray-500">Kelas berlangsung</div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="text-sm text-gray-600 mb-2">Progress Pembelajaran</div>
                              <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className={`bg-gradient-to-r ${slide.gradient} h-3 rounded-full transition-all duration-1000`} style={{ width: '75%' }}></div>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className={`text-xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>24</div>
                                <div className="text-xs text-gray-600">Sesi</div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className={`text-xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>A</div>
                                <div className="text-xs text-gray-600">Nilai</div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className={`text-xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>95%</div>
                                <div className="text-xs text-gray-600">Score</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Mobile smaller */}
        <button
          onClick={prevSlide}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white p-2 lg:p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-gray-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white p-2 lg:p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-gray-900" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${index === currentSlide
                ? 'w-6 lg:w-8 h-2 lg:h-3 bg-white'
                : 'w-2 lg:w-3 h-2 lg:h-3 bg-white/50 hover:bg-white/75'
                } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}