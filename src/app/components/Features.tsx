import { GraduationCap, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Users,
    title: 'Pembelajaran 1-on-1',
    description: 'Setiap siswa mendapat perhatian penuh dari tutor profesional dengan metode pembelajaran yang disesuaikan.'
  },
  {
    icon: Clock,
    title: 'Jadwal Fleksibel',
    description: 'Tentukan jadwal belajar sesuai dengan kenyamanan Anda. Tersedia dari pagi hingga malam hari.'
  },
  {
    icon: GraduationCap,
    title: 'Tutor Berkualitas',
    description: 'Tutor berpengalaman dengan latar belakang pendidikan terbaik dan telah tersertifikasi.'
  },
  {
    icon: Award,
    title: 'Materi Lengkap',
    description: 'Akses ke bank soal, video pembelajaran, dan materi pendukung untuk semua tingkat pendidikan.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kidemy?
          </h2>
          <p className="text-lg text-gray-600">
            Platform bimbingan belajar online yang dirancang khusus untuk memaksimalkan potensi belajar anak Anda
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
