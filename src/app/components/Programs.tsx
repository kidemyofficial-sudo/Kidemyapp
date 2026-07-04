import { useState, useEffect, useRef } from 'react';
import { Check, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

interface ProgramsProps {
  onRegisterClick: (programName?: string) => void;
}

const programs = [
  {
    id: 1,
    name: 'SD (Kelas 1-5)',
    price: 'Rp 55.000',
    period: 'per sesi',
    features: [
      'Metode belajar interaktif',
      'Durasi 90 menit per sesi',
      'Bebas atur jadwal & materi belajar',
      'Laporan belajar rutin',
      'Bebas konsultasi PR dengan guru',
      'Strategi belajar untuk ujian'
    ],
    popular: false,
    gradient: 'from-blue-500 to-blue-600',
    icon: '🎒'
  },
  {
    id: 2,
    name: 'SD (Kelas 6)',
    price: 'Rp 70.000',
    period: 'per sesi',
    features: [
      'Fokus persiapan ujian sekolah & AKM',
      'Durasi 90 menit per sesi',
      'Latihan soal intensif',
      'Bimbingan transisi ke SMP',
      'Laporan perkembangan berkala'
    ],
    popular: false,
    gradient: 'from-cyan-500 to-cyan-600',
    icon: '🏫'
  },
  {
    id: 3,
    name: 'SMP (Kelas 7-8)',
    price: 'Rp 75.000',
    period: 'per sesi',
    features: [
      'Metode belajar interaktif',
      'Durasi 90 menit per sesi',
      'Bebas atur jadwal & materi belajar',
      'Strategi belajar sesuai kebutuhan',
      'Pendampingan penuh',
      'Laporan belajar rutin'
    ],
    popular: false,
    gradient: 'from-purple-500 to-purple-600',
    icon: '📚'
  },
  {
    id: 4,
    name: 'SMP (Kelas 9)',
    price: 'Rp 90.000',
    period: 'per sesi',
    features: [
      'Fokus ujian kelulusan & ujian sekolah',
      'Durasi 90 menit per sesi',
      'Try out berkala & simulasi ujian',
      'Latihan soal intensif',
      'Bimbingan pemilihan sekolah lanjutan'
    ],
    popular: true,
    gradient: 'from-indigo-500 to-indigo-600',
    icon: '🎓'
  },
  {
    id: 5,
    name: 'SMA (Kelas 10-11)',
    price: 'Rp 90.000',
    period: 'per sesi',
    features: [
      'Pelajaran jurusan: IPA / IPS / Umum',
      'Durasi 90 menit per sesi',
      'Pemantapan konsep dasar UTBK',
      'Strategi belajar efektif',
      'Konsultasi jurusan dasar'
    ],
    popular: false,
    gradient: 'from-green-500 to-green-600',
    icon: '✏️'
  },
  {
    id: 6,
    name: 'SMA (Kelas 12)',
    price: 'Rp 105.000',
    period: 'per sesi',
    features: [
      'Strategi Persiapan UTBK / SNBT / TKA',
      'Durasi 90 menit per sesi',
      'Bebas atur jadwal & materi belajar',
      'Laporan belajar rutin',
      'Bebas konsultasi karir dengan guru',
      'Simulasi ujian'
    ],
    popular: false,
    gradient: 'from-teal-500 to-teal-600',
    icon: '🏫'
  },
  {
    id: 7,
    name: 'Keahlian Khusus Programming / MTK',
    price: 'Rp 200.000',
    period: 'per sesi',
    features: [
      'Python, JavaScript, Web/Mobile Development',
      'Matematika Olimpiade, Aljabar Lanjut, Kalkulus',
      'Durasi 90 menit per sesi',
      'Project-based learning & portfolio development',
      'Mentoring langsung dari tutor berpengalaman'
    ],
    popular: false,
    gradient: 'from-pink-500 to-pink-600',
    icon: '💻'
  }
];

export function Programs({ onRegisterClick }: ProgramsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % programs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }

    setTimeout(() => setIsPaused(false), 3000);
  };

  // Calculate which cards to show for desktop
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % programs.length;
      cards.push({ ...programs[index], originalIndex: index });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="program" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Program Bimbingan Belajar
          </h2>
          <p className="text-lg text-gray-600">
            Pilih program yang sesuai dengan jenjang pendidikan anda
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden md:block relative">
          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Increased padding to accommodate scaled card */}
            <div className="px-16 lg:px-20">
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {visibleCards.map((program, index) => (
                  <div
                    key={program.id}
                    className={`transition-all duration-300 ease-out h-full flex ${index === 1 ? 'scale-105 z-10 -mx-4' : 'scale-100'}`}
                    style={{
                      transformOrigin: 'center center'
                    }}
                  >
                    <Card
                      className={`relative flex flex-col w-full rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl cursor-pointer ${program.popular
                        ? 'border-purple-500 shadow-2xl shadow-purple-200/50 mt-6'
                        : 'border-gray-100 shadow-xl hover:border-gray-200'
                        }`}
                      onClick={() => onRegisterClick(program.name)}
                    >
                      {program.popular && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`bg-gradient-to-r ${program.gradient} text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1.5 whitespace-nowrap`}>
                            <Star className="w-4 h-4 fill-current" />
                            Paling Populer
                          </div>
                        </div>
                      )}

                      <CardHeader className={`pb-4 ${program.popular ? 'pt-10' : 'pt-6'} flex-shrink-0`}>
                        <div className="flex flex-col items-center">
                          <div className="text-3xl mb-3">{program.icon}</div>
                          <div className={`inline-block bg-gradient-to-r ${program.gradient} text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-3`}>
                            {program.name}
                          </div>

                          <div className="space-y-1 text-center w-full">
                            <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                              {program.price}
                            </div>
                            <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                              {program.period}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 flex-grow flex flex-col">
                        <div className="border-t border-gray-100 pt-4 flex-grow">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Deskripsi Paket :</h4>
                          <ul className="space-y-2">
                            {program.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-2">
                                <div className={`flex-shrink-0 w-4 h-4 bg-gradient-to-r ${program.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                                  <Check className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span className="text-gray-700 text-xs leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          className={`w-full mt-6 bg-gradient-to-r ${program.gradient} text-white hover:shadow-lg text-sm py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 flex-shrink-0`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onRegisterClick(program.name);
                          }}
                        >
                          Daftar Sekarang
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-100 transition-all z-20 hover:scale-110 active:scale-95"
            aria-label="Previous program"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-100 transition-all z-20 hover:scale-110 active:scale-95"
            aria-label="Next program"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${index === currentIndex
                  ? 'w-10 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full'
                  }`}
                aria-label={`Go to program ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View - Single Card */}
        <div className="md:hidden">
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="overflow-visible px-4"
          >
            <div className="relative">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className={`transition-all duration-500 ${index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 absolute inset-0'
                    }`}
                >
                  <div className="h-full flex px-4">
                    <Card
                      className={`relative flex flex-col w-full rounded-2xl border-2 shadow-xl ${program.popular
                        ? 'border-purple-500 shadow-purple-200/50 mt-6'
                        : 'border-gray-100'
                        }`}
                      onClick={() => onRegisterClick(program.name)}
                    >
                      {program.popular && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`bg-gradient-to-r ${program.gradient} text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1.5 whitespace-nowrap`}>
                            <Star className="w-4 h-4 fill-current" />
                            Paling Populer
                          </div>
                        </div>
                      )}

                      <CardHeader className={`pb-4 ${program.popular ? 'pt-10' : 'pt-6'} flex-shrink-0`}>
                        <div className="flex flex-col items-center">
                          <div className="text-3xl mb-3">{program.icon}</div>
                          <div className={`inline-block bg-gradient-to-r ${program.gradient} text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-3`}>
                            {program.name}
                          </div>

                          <div className="space-y-1 text-center w-full">
                            <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                              {program.price}
                            </div>
                            <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                              {program.period}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 flex-grow flex flex-col">
                        <div className="border-t border-gray-100 pt-4 flex-grow">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Deskripsi Paket :</h4>
                          <ul className="space-y-2">
                            {program.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-2">
                                <div className={`flex-shrink-0 w-4 h-4 bg-gradient-to-r ${program.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                                  <Check className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span className="text-gray-700 text-xs leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          className={`w-full mt-6 bg-gradient-to-r ${program.gradient} text-white hover:shadow-lg text-sm py-2.5 rounded-xl transition-all duration-200 active:scale-95 flex-shrink-0`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onRegisterClick(program.name);
                          }}
                        >
                          Daftar Sekarang
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-8 px-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
              aria-label="Previous program"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex gap-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${index === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full'
                    : 'w-2 h-2 bg-gray-300 rounded-full'
                    }`}
                  aria-label={`Go to program ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
              aria-label="Next program"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Geser atau gunakan tombol untuk melihat program lainnya
          </p>
        </div>
      </div>
    </section>
  );
}