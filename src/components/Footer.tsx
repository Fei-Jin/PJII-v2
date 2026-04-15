import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001529] text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">PJII</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">Publikasi Jurnal Ilmiah</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              PJII (Publikasi Jurnal Ilmiah Indonesia) adalah lembaga penerbitan jurnal ilmiah terpercaya yang berkomitmen meningkatkan kualitas riset dan publikasi di Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Tentang PJII</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Katalog Jurnal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Layanan Penerbitan</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Panduan Penulis</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Etika Publikasi</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>The Leaf Platinum Kragilan Blok. G, No. 9, Boyolali, Indonesia</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+62 897-5841-020</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@pjii.org</span>
              </li>
              <li className="flex gap-3">
                <a href="https://wa.me/628975841020" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-accent transition-colors">
                  <MessageCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span>0897-5841-020 (WhatsApp)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Dapatkan update terbaru mengenai jurnal dan riset ilmiah.</p>
            <div className="flex flex-col gap-2">
              <Input className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" placeholder="Email Anda" />
              <Button className="w-full">Berlangganan</Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2026 PJII - Publikasi Jurnal Ilmiah Indonesia. All rights reserved.</p>
            <p className="text-[10px] opacity-70">No. AHU: AHU-A002842.AH.01.30.Tahun 2026</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
