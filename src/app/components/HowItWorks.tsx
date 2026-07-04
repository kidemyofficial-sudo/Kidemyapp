import { FileText, CreditCard, Settings, PlayCircle, HelpCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Lengkapi Formulir',
    description: 'Lengkapi formulir belajar untuk menyesuaikan kebutuhan anda.'
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Pembayaran',
    description: 'Selesaikan pembayaran dengan aman dan mudah.'
  },
  {
    icon: Settings,
    number: '03',
    title: 'Pemrosesan Sesi Belajar',
    description: 'Tim kami akan memproses dan menjadwalkan sesi belajar anda.'
  },
  {
    icon: PlayCircle,
    number: '04',
    title: 'Sesi Belajar Dimulai',
    description: 'Mulai petualangan belajar anda bersama tutor pilihan.'
  },
  {
    icon: HelpCircle,
    number: '05',
    title: 'Bantuan',
    description: 'Hubungi bantuan jika anda mengalami kendala.'
  }
];

export function HowItWorks() {
  return (
    <section id="alur-belajar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Langkah Mudah Belajar di Kidemy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200 z-0"></div>
              )}

              {/* Step Content */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-6 relative">
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" />
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