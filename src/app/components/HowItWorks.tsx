import { Video, Calendar, Check } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    number: '01',
    title: 'Pilih Jadwal',
    description: 'Pilih mata pelajaran dan jadwal yang sesuai dengan kebutuhan Anda.'
  },
  {
    icon: Video,
    number: '02',
    title: 'Mentor Terpilih',
    description: 'Temukan guru ideal yang disinkronkan dengan kebutuhan dan jadwal Anda.'
  },
  {
    icon: Check,
    number: '03',
    title: 'Raih Prestasi',
    description: 'Pantau perkembangan belajar dan raih prestasi akademik yang lebih baik.'
  }
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cara Kerja Kidemy
          </h2>
          <p className="text-lg text-gray-600">
            Mulai belajar online dengan mudah dalam 3 langkah sederhana
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-blue-200 z-0"></div>
              )}

              {/* Step Content */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6 relative">
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}