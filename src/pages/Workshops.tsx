import React from "react";
import { motion } from "motion/react";
import { 
  Languages, 
  Cpu, 
  Music, 
  Palette, 
  Trophy, 
  Rocket, 
  ChevronRight 
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export const Workshops = () => {
  const workshops = [
    { 
      name: "Inglés Intensivo", 
      icon: <Languages className="w-10 h-10" />, 
      color: "bg-blue-500",
      desc: "Certificaciones internacionales y práctica constante."
    },
    { 
      name: "Computación", 
      icon: <Cpu className="w-10 h-10" />, 
      color: "bg-purple-500",
      desc: "Herramientas digitales, ofimática y diseño básico."
    },
    { 
      name: "Música y Arte", 
      icon: <Music className="w-10 h-10" />, 
      color: "bg-pink-500",
      desc: "Expresión artística, instrumentos y teoría musical."
    },
    { 
      name: "Danza Folklórica", 
      icon: <Palette className="w-10 h-10" />, 
      color: "bg-orange-500",
      desc: "Valoración de nuestra cultura a través del baile."
    },
    { 
      name: "Deportes", 
      icon: <Trophy className="w-10 h-10" />, 
      color: "bg-green-500",
      desc: "Fútbol, vóley y atletismo para una vida sana."
    },
    { 
      name: "Robótica", 
      icon: <Rocket className="w-10 h-10" />, 
      color: "bg-cyan-500",
      desc: "Lógica de programación y construcción de prototipos."
    }
  ];

  return (
    <div className="pt-12 pb-24">
      <section className="bg-school-yellow text-school-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-doodle opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-school-blue text-white border-none mb-6 px-6 py-2 rounded-full font-bold">
              Talento y Creatividad
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8">Talleres 2026</h1>
            <p className="text-xl md:text-2xl text-school-blue/70 max-w-3xl mx-auto leading-relaxed">
              Potenciamos las habilidades de nuestros alumnos más allá del aula de clases.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${w.color} p-10 rounded-sm text-white flex flex-col items-center text-center gap-6 shadow-2xl border-4 border-white/20 transform hover:-translate-y-2 transition-all`}
            >
              <div className="bg-white/20 p-6 rounded-sm">
                {w.icon}
              </div>
              <h3 className="text-2xl font-bold">{w.name}</h3>
              <p className="text-white/80 font-medium leading-relaxed">{w.desc}</p>
              <Button variant="outline" className="mt-4 bg-white/10 border-white text-white hover:bg-white hover:text-slate-900 rounded-sm font-bold">
                Más Información
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-heading font-bold mb-6">¿Interesado en algún taller?</h2>
            <p className="text-xl text-slate-400">Inscribe a tu hijo en nuestros talleres extracurriculares y descubre su potencial.</p>
          </div>
          <Button size="lg" className="bg-school-yellow text-school-blue hover:bg-yellow-400 px-12 py-8 rounded-sm text-xl font-black shadow-xl">
            Inscribirse Ahora <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};
