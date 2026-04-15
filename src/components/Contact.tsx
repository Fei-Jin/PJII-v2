import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Kontak Kami</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ada Pertanyaan? Hubungi Tim Kami</h3>
            <p className="text-muted-foreground text-lg mb-10">
              Tim kami siap membantu Anda dalam setiap langkah publikasi jurnal ilmiah Anda. Jangan ragu untuk menghubungi kami melalui saluran di bawah ini.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Alamat Kantor</h4>
                  <p className="text-muted-foreground">The Leaf Platinum Kragilan Blok. G, No. 9, Boyolali, Indonesia</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telepon / WhatsApp</h4>
                  <p className="text-muted-foreground">+62 897-5841-020</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">info@pjii.org</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl p-8">
              <CardContent className="p-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Nama Lengkap</label>
                    <Input placeholder="Masukkan nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email</label>
                    <Input placeholder="email@contoh.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Subjek</label>
                  <Input placeholder="Apa yang ingin Anda tanyakan?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Pesan</label>
                  <Textarea placeholder="Tuliskan pesan Anda di sini..." className="min-h-[150px]" />
                </div>
                <Button className="w-full h-12 text-base font-bold">Kirim Pesan</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
