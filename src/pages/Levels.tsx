import React from "react";
import { motion } from "motion/react";
import { 
  Sun, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  Palette, 
  Cpu 
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

export const Levels = () => {
  const levels = [
    {
      title: "Inicial",
      description: "Estimulación temprana, psicomotricidad y aprestamiento en un ambiente de amor.",
      icon: <Sun className="w-10 h-10 text-school-yellow" />,
      color: "bg-school-yellow/10 border-school-yellow/30",
      badge: "3 - 5 años",
      accent: "bg-school-yellow",
      features: ["Psicomotricidad", "Aprestamiento", "Inglés inicial", "Valores"]
    },
    {
      title: "Primaria",
      description: "Desarrollo de competencias fundamentales, razonamiento lógico y comprensión lectora.",
      icon: <BookOpen className="w-10 h-10 text-school-blue" />,
      color: "bg-school-blue/10 border-school-blue/30",
      badge: "1° - 6° grado",
      accent: "bg-school-blue",
      features: ["Razonamiento Lógico", "Comprensión Lectora", "Ciencia y Tecnología", "Arte"]
    },
    {
      title: "Secundaria",
      description: "Preparación pre-universitaria, orientación vocacional y liderazgo juvenil.",
      icon: <GraduationCap className="w-10 h-10 text-school-red" />,
      color: "bg-school-red/10 border-school-red/30",
      badge: "1° - 5° año",
      accent: "bg-school-red",
      features: ["Pre-universitario", "Liderazgo", "Investigación", "Orientación Vocacional"]
    }
  ];

  return (
    <div className="pt-12 pb-24">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-doodle opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Badge className="bg-school-red text-white border-none mb-6 px-6 py-2 rounded-full font-bold">
              Propuesta Académica
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8">Niveles Educativos</h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Acompañamos el crecimiento de tus hijos con una metodología activa y formación en valores en cada etapa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {levels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-4 transition-all shadow-xl rounded-sm overflow-hidden ${level.color}`}>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-6 p-5 bg-white rounded-sm w-fit shadow-lg transform -rotate-3">
                    {level.icon}
                  </div>
                  <Badge className={`${level.accent} text-white mb-4 px-4 py-1 rounded-full text-xs font-bold border-none`}>
                    {level.badge}
                  </Badge>
                  <CardTitle className="text-3xl font-heading text-school-blue">{level.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <p className="text-muted-foreground text-center text-lg leading-relaxed mb-8">
                    {level.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    {level.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${level.accent.replace('bg-', 'text-')}`} />
                        <span className="font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`${level.accent} hover:opacity-90 text-white rounded-sm w-full py-6 font-bold shadow-lg`}
                    onClick={() => {
                      toast.success(`El plan de estudios de ${level.title} ha sido enviado a su correo electrónico.`);
                    }}
                  >
                    Ver Plan de Estudios
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology Callout */}
      <section className="py-24 bg-school-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">Metodología de Vanguardia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-sm border border-white/10">
              <Sparkles className="w-12 h-12 text-school-yellow mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Aprendizaje Significativo</h3>
              <p className="text-white/70">Conectamos conocimientos con experiencias reales.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-sm border border-white/10">
              <Palette className="w-12 h-12 text-school-red mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Creatividad</h3>
              <p className="text-white/70">Fomentamos el arte y la expresión libre.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-sm border border-white/10">
              <Cpu className="w-12 h-12 text-school-green mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Tecnología</h3>
              <p className="text-white/70">Herramientas digitales para el siglo XXI.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
