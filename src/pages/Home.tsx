import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Sparkles, 
  Pencil, 
  Heart, 
  Star, 
  CheckCircle2, 
  Quote, 
  MapPin, 
  Phone, 
  Palette, 
  Cpu 
} from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { toast } from "sonner";

const FloatingElement = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    className={className}
    animate={{ 
      y: [0, -20, 0],
      rotate: [-5, 5, -5]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
  >
    {children}
  </motion.div>
);

export const Home = () => {
  const testimonials = [
    {
      name: "María Fernández",
      role: "Madre de Familia",
      text: "El cambio en mi hijo ha sido increíble. Los profesores son muy dedicados y el ambiente es muy familiar.",
      icon: faUserCircle
    },
    {
      name: "Juan Pérez",
      role: "Padre de Familia",
      text: "Excelente nivel académico. Mi hija ingresó a la universidad gracias a la preparación que recibió aquí.",
      icon: faUserTie
    }
  ];

  return (
    <div className="relative">
      {/* Playful Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <FloatingElement className="absolute top-20 left-10 text-school-blue" delay={0}>
          <Pencil className="w-12 h-12" />
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-20 text-school-yellow" delay={1}>
          <Sparkles className="w-16 h-16" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-20 text-school-red" delay={2}>
          <Heart className="w-14 h-14" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 right-10 text-school-green" delay={3}>
          <Star className="w-12 h-12" />
        </FloatingElement>
      </div>

      {/* News Ticker */}
      <div className="bg-school-yellow py-3 overflow-hidden border-y-2 border-school-blue/20 relative z-10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[
            "📢 Matrícula 2026 Abierta",
            "🏆 Primer puesto en desfile escolar",
            "📚 Nuevos talleres de Robótica",
            "🌟 Escuela para Padres este Sábado",
            "🎨 Exposición de Arte el próximo mes",
            "📢 Matrícula 2026 Abierta",
            "🏆 Primer puesto en desfile escolar",
            "📚 Nuevos talleres de Robótica",
          ].map((text, i) => (
            <span key={i} className="text-school-blue font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <Badge className="mb-6 bg-school-green/10 text-school-green border-school-green/20 px-6 py-2 rounded-full text-sm font-bold">
              ✨ Educación con Amor y Disciplina
            </Badge>
            <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
              ¡Aprende, Juega y Crece con Nosotros!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              Brindamos una educación de excelencia en Talara Alta, donde cada niño es una joya preciosa que pulimos con amor y sabiduría.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-school-blue hover:bg-school-blue/90 text-white text-xl px-10 py-8 rounded-3xl shadow-xl shadow-school-blue/30 group transform hover:-translate-y-1 transition-all"
              >
                ¡Inscríbete Hoy! <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl px-10 py-8 rounded-3xl border-4 border-school-yellow text-school-blue font-bold hover:bg-school-yellow/10 transition-all"
              >
                Conoce el Colegio
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="relative z-20 bg-white p-4 rounded-2xl shadow-2xl border-2 border-muted overflow-hidden">
              <img 
                src="/hero-kids.webp" 
                alt="Niños felices aprendiendo" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-12">
                <p className="text-white text-2xl font-heading font-bold italic">"Instruye al niño en su camino..."</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-school-yellow rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-school-red rounded-full blur-3xl opacity-50 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-school-blue">
                ¿Por qué elegir <br /> <span className="text-school-red">Las Joyas de Jesucristo?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Metodología Activa", desc: "Aprendizaje basado en proyectos y experiencias reales." },
                  { title: "Plana Docente Calificada", desc: "Profesionales con vocación y constante capacitación." },
                  { title: "Formación en Valores", desc: "Sólida base espiritual y ética para la vida." },
                  { title: "Infraestructura Segura", desc: "Ambientes diseñados para el confort y seguridad del alumno." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="bg-school-green rounded-full p-1 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-school-blue/20 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src="/edu-excellence-1.webp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 bg-school-yellow/20 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src="/edu-excellence-2.webp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 bg-school-red/20 rounded-sm flex items-center justify-center overflow-hidden">
                  <img src="/edu-excellence-3.webp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-64 bg-school-green/20 rounded-sm flex items-center justify-center overflow-hidden">
                  <img src="/edu-excellence-4.webp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4 text-school-blue">Lo que dicen los Padres</h2>
            <p className="text-muted-foreground">Nuestra mejor garantía es la satisfacción de nuestras familias.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="rounded-sm border-none shadow-xl p-8 bg-white relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-school-blue/10" />
                <CardContent className="p-0 space-y-6">
                  <p className="text-lg italic text-muted-foreground leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-sm bg-slate-100 flex items-center justify-center text-school-blue border-2 border-school-yellow/30">
                      <FontAwesomeIcon icon={t.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-school-blue">{t.name}</h4>
                      <p className="text-xs font-medium text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
