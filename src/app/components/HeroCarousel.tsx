import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import student1 from '../../assets/student-syari.webp';
import privateTutoring from '../../assets/private-tutoring.webp';
import tutor1 from '../../assets/tutor-1.webp';

interface HeroCarouselProps {
  onRegisterClick: () => void;
}

const slides = [
  {
    title: 'Pengalaman belajar yang lebih efektif',
    subtitle: 'Setiap sesi dirancang interaktif dengan pendampingan tutor agar anak benar-benar memahami materi, bukan sekedar hafal',
    gradient: 'from-blue-600 to-purple-600',
    bgColor: 'bg-blue-50',
    image: student1,
    alt: 'Siswa SD Bahagia'
  },
  {
    title: 'Pembelajaran 1\u2011on\u20111 yang Efektif',
    subtitle: 'Kidemy bantu anak belajar lebih fokus dengan tutor pilihan, dan metode belajar yang interaktif yang disesuaikan dengan kebutuhan setiap anak',
    gradient: 'from-green-600 to-teal-600',
    bgColor: 'bg-green-50',
    image: privateTutoring,
    alt: 'Siswa SMP Belajar Privat dengan Tutor Muslimah'
  },
  {
    title: 'Belajar lebih nyaman dengan jadwal fleksibel',
    subtitle: 'Waktu belajar dapat disesuaikan dengan kebutuhan anak & keluarga, dari pagi hingga malam hari',
    gradient: 'from-orange-600 to-pink-600',
    bgColor: 'bg-orange-50',
    image: tutor1,
    alt: 'Tutor Profesional'
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
                {/* MOBILE: Full image with bottom text overlay */}
                <div className="block lg:hidden h-full relative">
                  {/* Full Background Image for Mobile */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Extra Deep Gradient - Starts higher but much softer fade to ensure readability at the bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white via-white/95 via-white/60 to-transparent"></div>
                  </div>

                  {/* Content Overlay - Pushed further down with more aggressive gradient */}
                  <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 text-center">
                    <div className="space-y-3">
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight drop-shadow-sm">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base text-gray-800 font-medium">
                        {slide.subtitle}
                      </p>
                      <Button
                        size="lg"
                        className={`w-full bg-gradient-to-r ${slide.gradient} text-white shadow-xl active:scale-[0.98] transition-all py-5 text-base font-semibold rounded-xl mt-3`}
                        onClick={onRegisterClick}
                      >
                        Daftar Sekarang
                      </Button>
                    </div>
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
                  <div className="relative flex items-center justify-center h-full">
                    <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
                      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-r ${slide.gradient} rounded-full filter blur-[64px] opacity-20 animate-blob`}></div>
                      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r ${slide.gradient} rounded-full filter blur-[64px] opacity-20 animate-blob animation-delay-2000`}></div>

                      {/* Image */}
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="relative z-20 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                      />
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
                ? 'w-6 lg:w-8 h-2 lg:h-3 bg-gray-800'
                : 'w-2 lg:w-3 h-2 lg:h-3 bg-gray-400 hover:bg-gray-600'
                } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}