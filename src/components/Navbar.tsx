import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { title: "Beranda", href: "#" },
  { title: "Tentang Kami", href: "#about" },
  {
    title: "Layanan",
    href: "#services",
    items: [
      { title: "Penerbitan Jurnal", description: "Bantuan penerbitan jurnal ilmiah dari awal hingga akhir." },
      { title: "Indeksasi Jurnal", description: "Optimasi indeksasi di SINTA, DOAJ, Scopus, dll." },
      { title: "DOI & Metadata", description: "Registrasi DOI Crossref dan optimasi metadata." },
    ],
  },
  { title: "Jurnal Kami", href: "#journals" },
  { title: "Berita", href: "#news" },
  { title: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/628975841020";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary leading-none">PJII</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Publikasi Jurnal Ilmiah Indonesia</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 text-sm font-medium">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.items.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink
                                render={
                                  <a
                                    href="#services"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  />
                                }
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={link.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {link.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4 border-l pl-8">
            <Button render={<a href="https://wa.me/628975841020" target="_blank" rel="noopener noreferrer" />}>
              Hubungi Kami
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.title} className="space-y-2">
                  <a
                    href={link.href}
                    className="block text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                  {link.items && (
                    <div className="pl-4 space-y-2 border-l ml-2">
                      {link.items.map((item) => (
                        <a
                          key={item.title}
                          href="#"
                          className="block text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button className="w-full" render={<a href="https://wa.me/628975841020" target="_blank" rel="noopener noreferrer" />}>
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
