import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, BookOpen, Star } from "lucide-react";
import { motion } from "motion/react";

const journals = [
  {
    title: "FINANCE : International Journal Of Management Finance",
    category: "Finance",
    rank: "SINTA 3",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    issn: "3026-6742",
  },
  {
    title: "Jurnal Ilmiah Manajemen Ekonomi Dan Akuntansi (JIMEA)",
    category: "Ekonomi",
    rank: "SINTA 4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    issn: "3026-4375",
  },
  {
    title: "Jurnal Kesehatan Masyarakat Indonesia (JKMI)",
    category: "Kesehatan",
    rank: "SINTA 4",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    issn: "3026-4715",
  },
  {
    title: "ARIMA : Jurnal Sosial Dan Humaniora",
    category: "Sosial & Humaniora",
    rank: "SINTA 5",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    issn: "3026-488X",
  },
];

export default function FeaturedJournals() {
  return (
    <section id="journals" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Katalog Jurnal</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">Jurnal Unggulan Kami</h3>
          </div>
          <Button variant="outline" size="lg" className="group">
            Lihat Semua Jurnal
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {journals.map((journal, index) => (
            <motion.div
              key={journal.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold">
                    {journal.rank}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    <Star className="h-3 w-3 fill-primary" />
                    {journal.category}
                  </div>
                  <CardTitle className="text-xl font-heading font-bold leading-tight group-hover:text-primary transition-colors">
                    {journal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    ISSN: {journal.issn}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full font-semibold" render={<a href="https://wa.me/628975841020" target="_blank" rel="noopener noreferrer" />}>
                    Kunjungi Jurnal
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
