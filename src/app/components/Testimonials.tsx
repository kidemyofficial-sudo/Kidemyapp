import { Star, User, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Bunda Letisha',
    role: 'Orang Tua Siswa SD',
    content: 'Nilai matematika anak saya meningkat drastis setelah bergabung dengan Kidemy. Tutornya sangat sabar and metode pembelajarannya mudah dipahami.',
    rating: 5,
  },
  {
    name: 'Putri Aliana',
    role: 'Mahasiswi Universitas Telkom',
    content: 'Jadwal yang fleksibel sangat membantu. Saya bisa belajar sesuai dengan waktu luang saya tanpa mengganggu aktivitas lain.',
    rating: 5,
  },
  {
    name: 'Bunda Davin',
    role: 'Orang Tua Siswa SMP',
    content: 'Tutor Kidemy sabar dan benar-benar menyesuaikan cara belajar dengan kebutuhan anak. Bukan cuma ngajarin, tapi paham karakter anak saya. Kami sebagai orang tua jadi tenang.',
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pengalaman Belajar di Kidemy
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-xl h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    {testimonial.role.includes('Mahasiswi') ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <User className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}