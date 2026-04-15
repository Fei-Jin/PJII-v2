/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import FeaturedJournals from "./components/FeaturedJournals";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative lg:sticky lg:top-32"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070"
                    alt="Academic Writing"
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Tentang PJII</h2>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                    Profil Perusahaan
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    PJII (Publikasi Jurnal Ilmiah Indonesia) adalah lembaga profesional yang berdedikasi tinggi dalam memajukan ekosistem riset dan publikasi ilmiah di Indonesia. Kami hadir sebagai mitra strategis bagi akademisi, peneliti, dan institusi dalam mengelola serta mempublikasikan karya ilmiah berkualitas standar internasional.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-heading font-bold text-primary">Sejarah Singkat</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Berawal dari semangat untuk meningkatkan visibilitas riset Indonesia di kancah global, PJII didirikan oleh para praktisi dan akademisi yang berpengalaman dalam pengelolaan jurnal ilmiah. Sejak awal berdiri, kami telah membantu puluhan pengelola jurnal dalam melakukan transformasi digital melalui sistem OJS (Open Journal Systems) dan mencapai indeksasi bereputasi.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 p-6 bg-slate-50 rounded-xl border-l-4 border-primary">
                    <h4 className="text-xl font-heading font-bold text-primary">Visi</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Menjadi lembaga publikasi jurnal ilmiah terkemuka di Indonesia yang diakui secara internasional dalam mendorong inovasi dan kualitas riset nasional.
                    </p>
                  </div>
                  <div className="space-y-4 p-6 bg-slate-50 rounded-xl border-l-4 border-accent">
                    <h4 className="text-xl font-heading font-bold text-primary">Misi</h4>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                      <li>Meningkatkan kualitas tata kelola jurnal ilmiah di Indonesia.</li>
                      <li>Memfasilitasi peneliti dalam publikasi artikel ilmiah bereputasi.</li>
                      <li>Mengembangkan jaringan kolaborasi riset antar institusi.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-heading font-bold text-primary">Ruang Lingkup</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Manajemen Jurnal Ilmiah (OJS)",
                      "Indeksasi SINTA, DOAJ, Scopus",
                      "Penerbitan Buku & Monograf",
                      "Workshop & Pelatihan Penulisan",
                      "Layanan Proofreading & Translate",
                      "Manajemen DOI & Metadata"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Button size="lg" className="group" asChild>
                    <a href="#contact">Konsultasi Sekarang</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <FeaturedJournals />
        <News />
        <Contact />

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
              alt="Network"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
                Siap Mempublikasikan Jurnal Anda?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Bergabunglah dengan ratusan peneliti lainnya dan tingkatkan visibilitas riset Anda bersama PJII.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold" asChild>
                  <a href="https://wa.me/628975841020" target="_blank" rel="noopener noreferrer">Hubungi Kami Sekarang</a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-white text-white hover:bg-white hover:text-primary" asChild>
                  <a href="#contact">Konsultasi Gratis</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
