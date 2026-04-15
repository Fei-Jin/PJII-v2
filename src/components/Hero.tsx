import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#001529]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2070"
          alt="Library Background"
          className="h-full w-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001529] via-[#001529]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
              Penerbit Jurnal Ilmiah Terpercaya
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Membangun Masa Depan <br />
              <span className="text-accent italic">Riset Indonesia</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              PJII hadir untuk mendukung akademisi dan peneliti Indonesia dalam mempublikasikan karya ilmiah berkualitas tinggi dengan standar internasional.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold group" asChild>
                <a href="https://wa.me/628975841020" target="_blank" rel="noopener noreferrer">
                  Submit Artikel
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold bg-white/5 border-white/20 text-white hover:bg-white/10" asChild>
                <a href="#news">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Lihat Panduan
                </a>
              </Button>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-sm text-slate-400">Jurnal Aktif</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10k+</span>
                <span className="text-sm text-slate-400">Artikel Terbit</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">SINTA</span>
                <span className="text-sm text-slate-400">Terakreditasi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-[-10%] top-[20%] hidden lg:block"
      >
        <div className="w-[600px] h-[600px] rounded-full border border-white/5 flex items-center justify-center">
          <div className="w-[450px] h-[450px] rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-white/20" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
