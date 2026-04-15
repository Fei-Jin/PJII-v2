import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Bot, User, Loader2, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getChatResponse } from "../lib/gemini";

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      parts: [{ text: "Halo! Saya asisten AI PJII. Ada yang bisa saya bantu terkait publikasi jurnal ilmiah Anda?" }],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      parts: [{ text: input }],
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const responseText = await getChatResponse([...messages, userMessage]);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: responseText || "Maaf, saya mengalami kendala teknis. Silakan coba lagi nanti." }],
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: "Maaf, terjadi kesalahan. Pastikan koneksi internet Anda stabil atau hubungi kami via WhatsApp." }],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`mb-4 w-[350px] sm:w-[400px] shadow-2xl rounded-2xl overflow-hidden border bg-background ${
              isMinimized ? "h-16" : "h-[500px]"
            } transition-all duration-300`}
          >
            <Card className="h-full flex flex-col border-none rounded-none">
              <CardHeader className="bg-primary text-primary-foreground p-4 flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded-lg">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-bold">PJII AI Assistant</CardTitle>
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] opacity-80">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/10"
                    onClick={() => setIsMinimized(!isMinimized)}
                  >
                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {!isMinimized && (
                <>
                  <CardContent className="flex-grow overflow-y-auto p-4 space-y-4 scroll-smooth" ref={scrollRef}>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-none"
                              : "bg-muted text-foreground rounded-tl-none"
                          }`}
                        >
                          {msg.parts[0].text}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                          <Loader2 className="h-4 w-4 animate-spin text-primary" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-4 border-t bg-slate-50">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSend();
                      }}
                      className="flex w-full items-center gap-2"
                    >
                      <Input
                        placeholder="Ketik pesan..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow bg-white"
                      />
                      <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardFooter>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className={`h-14 w-14 rounded-full shadow-xl transition-transform hover:scale-110 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
