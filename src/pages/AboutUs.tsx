import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Users, 
  Heart, 
  Star, 
  Scale, 
  Leaf, 
  Globe, 
  Handshake 
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const AboutUs = () => {
  const principles = [
    {
      title: "LA ÉTICA",
      icon: <ShieldCheck className="w-8 h-8 text-school-blue" />,
      desc: "Brindamos una educación promotora de los valores de paz, solidaridad, justicia, libertad, honestidad, tolerancia, responsabilidad, trabajo, verdad y pleno respeto a las normas de convivencia; que fortalece la conciencia moral individual y hace posible una sociedad basada en el ejercicio permanente de la responsabilidad ciudadana."
    },
    {
      title: "LA EQUIDAD",
      icon: <Scale className="w-8 h-8 text-school-red" />,
      desc: "Promovemos la igualdad de oportunidades de acceso, permanencia y trato en un sistema educativo de calidad."
    },
    {
      title: "LA INCLUSIÓN",
      icon: <Handshake className="w-8 h-8 text-school-green" />,
      desc: "Integramos a las personas con discapacidad, grupos sociales excluidos, marginados y vulnerables, sin distinción de etnia, religión, sexo u otra causa de discriminación, contribuyendo así a la eliminación de la exclusión y las desigualdades."
    },
    {
      title: "LA DEMOCRACIA",
      icon: <Users className="w-8 h-8 text-school-yellow" />,
      desc: "Promovemos el respeto a los derechos humanos, la libertad de conciencia, pensamiento y opinión, el ejercicio pleno de la ciudadanía y el reconocimiento de la voluntad popular; contribuyendo en la práctica de la tolerancia mutua en las relaciones entre las personas y entre mayorías y minorías."
    },
    {
      title: "LA INTERCULTURALIDAD",
      icon: <Globe className="w-8 h-8 text-school-blue" />,
      desc: "Reconocemos como riqueza la diversidad cultural, étnica y lingüística del país, encontrando en el reconocimiento y respeto a las diferencias, así como en el mutuo conocimiento y actitud de aprendizaje del otro, sustento para la convivencia armónica y el intercambio entre las diversas culturas del mundo."
    },
    {
      title: "LA CONCIENCIA AMBIENTAL",
      icon: <Leaf className="w-8 h-8 text-school-green" />,
      desc: "Motivamos el respeto, cuidado y conservación del entorno natural como garantía para el desenvolvimiento de la vida."
    }
  ];

  const values = [
    {
      title: "JUSTICIA",
      icon: <Scale className="w-6 h-6" />,
      desc: "Busca que los educandos se dispongan a actuar de manera justa, respetando el derecho de todos, exigiendo sus propios derechos y cumpliendo con sus deberes. Además, reconocer los derechos a quienes les corresponde."
    },
    {
      title: "RESPETO A TODA FORMA DE VIDA",
      icon: <Heart className="w-6 h-6" />,
      desc: "Se enfoca en que los estudiantes demuestren aprecio, valoración y disposición para el cuidado a toda forma de vida sobre la Tierra."
    },
    {
      title: "SOLIDARIDAD",
      icon: <Handshake className="w-6 h-6" />,
      desc: "Brindar apoyo de manera incondicional a personas en situaciones comprometidas o difíciles."
    },
    {
      title: "RESPONSABILIDAD",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "Busca que los estudiantes aprendan a valorar y proteger los bienes comunes y compartidos de un colectivo."
    }
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
              Nuestra Identidad
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8">¿Quiénes Somos?</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Somos una institución educativa comprometida con la excelencia y la formación integral de líderes con valores cristianos en Talara Alta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-sm shadow-2xl border-t-8 border-school-blue"
          >
            <div className="w-16 h-16 bg-school-blue/10 rounded-sm flex items-center justify-center text-school-blue mb-8">
              <Target className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-6 text-school-blue uppercase tracking-tight">Misión</h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Ser una institución innovadora en el desarrollo de vocación al servicio impartiendo con el ejemplo de una conciencia humanista, utilizando estrategias metodológicas activas en beneficio de sí mismo y de la comunidad, formando íntegramente a nuestros estudiantes como sujetos de derechos, afín de ser personas críticas, analíticas, responsables, líderes, capaces de integrarse y cambiar la actitud de su sociedad ante la protección del medio ambiente en que se desenvuelve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-sm shadow-2xl border-t-8 border-school-red"
          >
            <div className="w-16 h-16 bg-school-red/10 rounded-sm flex items-center justify-center text-school-red mb-8">
              <Star className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-6 text-school-red uppercase tracking-tight">Visión</h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Ser una escuela modelo y eficiente que brinde una educación de calidad con docentes plenamente identificados y calificados que garanticen un buen aprendizaje integral a través de la investigación favoreciendo de manera permanente el fortalecimiento de la creatividad con apoyo de la ciencia y la práctica de valores. Formando estudiantes competitivos, democráticos, respetuosos de su medio ambiente, desarrollando en ellos capacidades para la gestión de riesgo de desastres para afrontar los desafíos del mundo globalizado que aseguren un continuo desarrollo y por ende alcanzar una sociedad veraz y justa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-school-blue mb-4">Nuestros Principios</h2>
            <div className="w-24 h-2 bg-school-yellow mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all rounded-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="mb-6">{p.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-school-red mb-4">Nuestros Valores</h2>
            <div className="w-24 h-2 bg-school-blue mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-white p-8 rounded-sm flex flex-col items-center text-center gap-6 group hover:bg-school-blue transition-colors"
              >
                <div className="w-16 h-16 bg-white/10 rounded-sm flex items-center justify-center text-school-yellow group-hover:text-white transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg leading-tight">{v.title}</h3>
                <p className="text-xs text-slate-400 group-hover:text-white/80 transition-colors leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
