import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCheck, Globe, GraduationCap, Microscope, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Penerbitan Jurnal",
    description: "Layanan lengkap penerbitan jurnal ilmiah mulai dari setup OJS hingga manajemen editorial.",
    icon: BookCheck,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Indeksasi Global",
    description: "Bantuan pendaftaran ke indeksasi bereputasi seperti SINTA, DOAJ, Scopus, dan Web of Science.",
    icon: Globe,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Registrasi DOI",
    description: "Penyediaan Digital Object Identifier (DOI) resmi melalui Crossref untuk setiap artikel.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Cek Plagiarisme",
    description: "Layanan pengecekan kemiripan teks menggunakan Turnitin untuk menjamin orisinalitas.",
    icon: ShieldCheck,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Pelatihan Penulisan",
    description: "Workshop dan webinar penulisan artikel ilmiah berkualitas bagi dosen dan mahasiswa.",
    icon: GraduationCap,
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "Reviewer Profesional",
    description: "Akses ke jaringan reviewer ahli dari berbagai disiplin ilmu untuk menjaga kualitas.",
    icon: Microscope,
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Layanan Kami</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Solusi Komprehensif Publikasi Ilmiah</h3>
          <p className="text-muted-foreground text-lg">
            Kami menyediakan berbagai layanan profesional untuk membantu pengelola jurnal dan peneliti mencapai standar publikasi tertinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
