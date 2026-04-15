import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { motion } from "motion/react";

const newsItems = [
  {
    title: "Workshop Penulisan Artikel Ilmiah Bereputasi Internasional 2024",
    date: "15 April 2024",
    author: "Admin PJII",
    category: "Event",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Tips Sukses Indeksasi Jurnal di SINTA 2 bagi Pengelola Jurnal",
    date: "10 April 2024",
    author: "Dr. Ahmad",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "PJII Menjalin Kerjasama dengan Berbagai Universitas di Indonesia",
    date: "05 April 2024",
    author: "Admin PJII",
    category: "Berita",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Berita & Artikel</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Update Terbaru Dunia Riset</h3>
          <p className="text-muted-foreground text-lg">
            Ikuti perkembangan terbaru mengenai publikasi ilmiah, tips penulisan, dan kegiatan PJII.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {news.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {news.author}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading font-bold leading-tight group-hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Dapatkan informasi mendalam mengenai {news.title.toLowerCase()} dalam artikel lengkap kami...
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
