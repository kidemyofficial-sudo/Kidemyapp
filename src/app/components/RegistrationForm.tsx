import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProgram?: string;
}

export function RegistrationForm({ open, onOpenChange, selectedProgram }: RegistrationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    subject: '',
    address: '',
    method: '',
    schedule: '',
    source: ''
  });

  const totalSteps = 5;

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Format WhatsApp message
    const message = `Halo Kidemy, saya ingin mendaftar ${selectedProgram || "bimbingan belajar"} dengan detail sebagai berikut:

📚 *Data Siswa*
Nama Siswa: ${formData.studentName}
Nama Orang Tua/Wali: ${formData.parentName}
Kelas/Jenjang: ${formData.grade}

📞 *Kontak*
No. Telepon: ${formData.phone}
Email: ${formData.email}
Alamat: ${formData.address}

📖 *Detail Pembelajaran*
Mata Pelajaran: ${formData.subject}
Metode Belajar: ${formData.method}
Jadwal yang Diinginkan: ${formData.schedule}

ℹ️ *Sumber Informasi*
Mengetahui Kidemy dari: ${formData.source}

Terima kasih!`;

    const whatsappUrl = `https://wa.me/628817019539?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and close
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      grade: '',
      subject: '',
      address: '',
      method: '',
      schedule: '',
      source: ''
    });
    setStep(1);
    onOpenChange(false);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.studentName && formData.parentName;
      case 2:
        return formData.phone && formData.email;
      case 3:
        return formData.grade && formData.subject;
      case 4:
        return formData.address && formData.method;
      case 5:
        return formData.schedule && formData.source;
      default:
        return false;
    }
  };

  const progress = (step / totalSteps) * 100;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Daftar Bimbingan Belajar Kidemy
          </DialogTitle>
          <DialogDescription>
            Lengkapi formulir pendaftaran di bawah ini untuk memulai perjalanan belajar bersama Kidemy
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Langkah {step} dari {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="py-6">
          {/* Step 1: Nama */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-3">
                <Label htmlFor="studentName" className="text-base">
                  1. Apa nama lengkap siswa? <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="studentName"
                  placeholder="Masukkan nama lengkap siswa"
                  value={formData.studentName}
                  onChange={(e) => updateFormData('studentName', e.target.value)}
                  className="text-base"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="parentName" className="text-base">
                  2. Siapa nama orang tua atau wali siswa? <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="parentName"
                  placeholder="Masukkan nama orang tua/wali"
                  value={formData.parentName}
                  onChange={(e) => updateFormData('parentName', e.target.value)}
                  className="text-base"
                />
              </div>
            </div>
          )}

          {/* Step 2: Kontak */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-base">
                  3. Nomor telepon yang dapat dihubungi <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="text-base"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base">
                  4. Alamat email siswa atau orang tua/wali <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contoh@email.com"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="text-base"
                />
              </div>
            </div>
          )}

          {/* Step 3: Pendidikan */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-3">
                <Label htmlFor="grade" className="text-base">
                  5. Kelas/Jenjang pendidikan saat ini <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.grade} onValueChange={(value) => updateFormData('grade', value)}>
                  <SelectTrigger className="text-base">
                    <SelectValue placeholder="Pilih jenjang pendidikan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Calistung">Calistung (Pra-SD)</SelectItem>
                    <SelectItem value="SD">SD (Sekolah Dasar)</SelectItem>
                    <SelectItem value="SMP">SMP (Sekolah Menengah Pertama)</SelectItem>
                    <SelectItem value="SMA">SMA (Sekolah Menengah Atas)</SelectItem>
                    <SelectItem value="Mahasiswa">Mahasiswa (Perguruan Tinggi)</SelectItem>
                    <SelectItem value="Pekerja">Pekerja/Umum</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-base">
                  6. Mata pelajaran apa yang ingin dipelajari? <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="subject"
                  placeholder="Contoh: Matematika, Fisika, Bahasa Inggris"
                  value={formData.subject}
                  onChange={(e) => updateFormData('subject', e.target.value)}
                  className="text-base"
                />
              </div>
            </div>
          )}

          {/* Step 4: Lokasi & Metode */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-3">
                <Label htmlFor="address" className="text-base">
                  7. Alamat domisili saat ini <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="address"
                  placeholder="Masukkan alamat lengkap"
                  value={formData.address}
                  onChange={(e) => updateFormData('address', e.target.value)}
                  className="text-base min-h-[100px]"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="method" className="text-base">
                  8. Pilih metode belajar yang diinginkan <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.method} onValueChange={(value) => updateFormData('method', value)}>
                  <SelectTrigger className="text-base">
                    <SelectValue placeholder="Pilih metode belajar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Online">Online (Via Video Call)</SelectItem>
                    <SelectItem value="Offline">Offline (Tatap Muka)</SelectItem>
                    <SelectItem value="Hybrid">Hybrid (Kombinasi Online & Offline)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 5: Jadwal & Sumber */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-3">
                <Label htmlFor="schedule" className="text-base">
                  9. Silakan sebutkan jadwal atau waktu belajar yang diinginkan <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="schedule"
                  placeholder="Contoh: Senin & Rabu pukul 16.00 - 17.30"
                  value={formData.schedule}
                  onChange={(e) => updateFormData('schedule', e.target.value)}
                  className="text-base min-h-[100px]"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="source" className="text-base">
                  10. Dari mana anda mengetahui Kidemy? <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.source} onValueChange={(value) => updateFormData('source', value)}>
                  <SelectTrigger className="text-base">
                    <SelectValue placeholder="Pilih sumber informasi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Media Sosial">Media Sosial</SelectItem>
                    <SelectItem value="Teman">Teman/Keluarga</SelectItem>
                    <SelectItem value="Iklan">Iklan</SelectItem>
                    <SelectItem value="Lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Kembali
          </Button>

          {step < totalSteps ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white gap-2"
            >
              Selanjutnya
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white gap-2"
            >
              Kirim ke WhatsApp
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
