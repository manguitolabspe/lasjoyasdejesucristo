import React from "react";
import { motion } from "motion/react";
import { 
  User, 
  Star, 
  Heart, 
  Award, 
  Users, 
  Sparkles, 
  GraduationCap,
  ShieldCheck
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const Team = () => {
  const leadership = [
    { name: "Elsiee Rosario Zapata Caballero", role: "Directora", icon: <ShieldCheck className="w-6 h-6" /> },
    { name: "Betzabé León Romero", role: "Promotora", icon: <Award className="w-6 h-6" /> },
    { name: "Luis Alejos León", role: "Gestión Institucional", icon: <Users className="w-6 h-6" /> },
    { name: "David Alejos Leon", role: "Coordinación Académica", icon: <GraduationCap className="w-6 h-6" /> },
    { name: "Ismael Alejos Leon", role: "Coordinación Administrativa", icon: <Sparkles className="w-6 h-6" /> }
  ];

  const teachers = [
    "Maria Isabel Alarcon Saldarriaga",
    "Maria Del Pilar Lupuche Castillo",
    "Lourdes Del Pilar Alejos Ramos",
    "Karina Yman Flores",
    "Rosa Lisbeth Clavijo Zapata",
    "Santos Guayanay Rios",
    "Rossemary Labrin Fernandez",
    "Luis Guillermo Zapata Saavedra",
    "César León Romero",
    "Ana Gutierrez Mogollón",
    "Milagros Valverde Rivera",
    "Diana Esther Valladares Alemán",
    "Eleoniza Lopez Saldarriaga",
    "Alan Smith Escobar Laban",
    "Marleny Guerrero Fernández",
    "Susan Erika Zapata Vasquez",
    "Marisol Valladares Valverde",
    "Mercedes Falla Castillo",
    "Ana Carolina Marulanda Miranda",
    "Mercedes Del Pilar Rodriguez Garcia",
    "Karla Isabel Castro Pacheco",
    "Rosa Puescas Chunga",
    "Jasmin Geraldine Cruz Lupuche",
    "Dariana Magaly Parcaya Bardales",
    "Juan Pablo Codarlupo Castillo",
    "Magda Carmen Alburqueque Gauna"
  ];

  return (
    <div className="pt-12 pb-24">
      {/* Hero Section */}
      <section className="bg-school-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-school-yellow text-school-blue border-none mb-6 px-6 py-2 rounded-full font-bold">
              34 Años de Excelencia
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8">Nuestro Equipo Humano</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Conoce a los profesionales comprometidos que pulen cada "joya" con amor, sabiduría y dedicación desde hace más de tres décadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-school-blue mb-4 uppercase tracking-tight">Liderazgo Institucional</h2>
          <div className="w-24 h-2 bg-school-yellow mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leadership.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all rounded-sm overflow-hidden bg-white group">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-school-blue/10 rounded-full flex items-center justify-center text-school-blue mb-6 group-hover:bg-school-blue group-hover:text-white transition-all">
                    {leader.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{leader.name}</h3>
                  <Badge className="bg-school-red text-white border-none px-4 py-1 rounded-full font-bold uppercase text-[10px] tracking-widest">
                    {leader.role}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-school-red mb-4 uppercase tracking-tight">Plana Docente Joyista 2026</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">
              Un equipo de especialistas dedicados a despertar el potencial de cada estudiante a través de una metodología activa y valores cristianos.
            </p>
            <div className="w-24 h-2 bg-school-blue mx-auto rounded-full mt-6" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 4) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-sm shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow border-l-4 border-school-blue">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <User className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-slate-800 text-sm leading-tight">{teacher}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anniversary Callout */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-school-yellow/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-school-yellow rounded-full mb-8 shadow-2xl shadow-school-yellow/20">
            <Star className="w-12 h-12 text-school-blue" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">34 Años de Historia</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Desde nuestra fundación, hemos crecido junto a la comunidad de Talara Alta, formando generaciones de ciudadanos íntegros. Nuestra experiencia es el respaldo de la educación de tus hijos.
          </p>
        </div>
      </section>
    </div>
  );
};
