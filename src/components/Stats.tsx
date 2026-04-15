import { motion } from "motion/react";

const stats = [
  { label: "Jurnal Terbit", value: "50+" },
  { label: "Artikel Ilmiah", value: "12,400+" },
  { label: "Reviewer Ahli", value: "350+" },
  { label: "Institusi Mitra", value: "120+" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-primary-foreground/80 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
