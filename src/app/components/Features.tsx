import { GraduationCap, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Users,
    title: 'Pembelajaran 1-on-1',
    description: 'Anak belajar langsung dengan tutor tanpa distraksi, sehingga lebih fokus dan cepat paham.'
  },
  {
    icon: Clock,
    title: 'Jadwal Fleksibel',
    description: 'Waktu belajar bisa disesuaikan dengan aktivitas sekolah dan keluarga, tanpa mengganggu rutinitas anak.'
  },
  {
    icon: GraduationCap,
    title: 'Tutor Berkualitas',
    description: 'Tutor diseleksi dan dibekali metode mengajar yang ramah anak serta mudah dipahami.'
  },
  {
    icon: Award,
    title: 'Materi lengkap & terarah',
    description: 'Materi mengikuti kurikulum sekolah dan disesuaikan dengan kemampuan anak.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bukan sekedar les, ini alasan orang tua memilih Kidemy
          </h2>
          <p className="text-lg text-gray-600">
            Karena Kidemy percaya bahwa setiap anak itu unik, Kidemy mendampingi dengan metode belajar yang paling sesuai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
