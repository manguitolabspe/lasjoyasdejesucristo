import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  MapPin, 
  Phone, 
  Star, 
  Heart, 
  Sun,
  ChevronRight,
  School,
  Music,
  Palette,
  Trophy,
  Cpu,
  Languages,
  CheckCircle2,
  Quote,
  Sparkles,
  Pencil,
  Rocket,
  Menu,
  X
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

import { LoginModal } from "./components/LoginModal";
import { useAuth } from "./AuthContext";

import { Dashboard } from "./components/Dashboard";

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

export default function App() {
  const { user, userData, loading, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMatriculaOpen, setIsMatriculaOpen] = React.useState(false);
  const [landingContent, setLandingContent] = React.useState<any>({
    heroTitle: '¡Aprende, Juega y Crece con Nosotros!',
    heroSubtitle: 'Brindamos una educación de excelencia en Talara Alta, donde cada niño es una joya preciosa que pulimos con amor y sabiduría.',
    motto: 'Educación con Amor y Disciplina'
  });
  
  const levels = [
    {
      title: "Inicial",
      description: "Estimulación temprana, psicomotricidad y aprestamiento en un ambiente de amor.",
      icon: <Sun className="w-10 h-10 text-school-yellow" />,
      color: "bg-school-yellow/10 border-school-yellow/30",
      badge: "3 - 5 años",
      accent: "bg-school-yellow"
    },
    {
      title: "Primaria",
      description: "Desarrollo de competencias fundamentales, razonamiento lógico y comprensión lectora.",
      icon: <BookOpen className="w-10 h-10 text-school-blue" />,
      color: "bg-school-blue/10 border-school-blue/30",
      badge: "1° - 6° grado",
      accent: "bg-school-blue"
    },
    {
      title: "Secundaria",
      description: "Preparación pre-universitaria, orientación vocacional y liderazgo juvenil.",
      icon: <GraduationCap className="w-10 h-10 text-school-red" />,
      color: "bg-school-red/10 border-school-red/30",
      badge: "1° - 5° año",
      accent: "bg-school-red"
    }
  ];

  const workshops = [
    { name: "Inglés Intensivo", icon: <Languages className="w-6 h-6" />, color: "bg-blue-500" },
    { name: "Computación", icon: <Cpu className="w-6 h-6" />, color: "bg-purple-500" },
    { name: "Música y Arte", icon: <Music className="w-6 h-6" />, color: "bg-pink-500" },
    { name: "Danza Folklórica", icon: <Palette className="w-6 h-6" />, color: "bg-orange-500" },
    { name: "Deportes", icon: <Trophy className="w-6 h-6" />, color: "bg-green-500" },
    { name: "Robótica", icon: <Rocket className="w-6 h-6" />, color: "bg-cyan-500" }
  ];

  const testimonials = [
    {
      name: "María Fernández",
      role: "Madre de Familia",
      text: "El cambio en mi hijo ha sido increíble. Los profesores son muy dedicados y el ambiente es muy familiar.",
      avatar: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "Juan Pérez",
      role: "Padre de Familia",
      text: "Excelente nivel académico. Mi hija ingresó a la universidad gracias a la preparación que recibió aquí.",
      avatar: "https://picsum.photos/seed/user2/100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-school-blue/30 overflow-x-hidden">
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

      {/* Navigation - Only show if NOT logged in */}
      {!user && (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-school-blue rounded-2xl flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg shadow-school-blue/30"
              >
                J
              </motion.div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-school-blue">
                  I.E.P. Las Joyas
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  de Jesucristo
                </span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              {["Inicio", "Niveles", "Talleres", "Nosotros", "Contacto"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-bold hover:text-school-blue transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-school-yellow transition-all group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden p-2 text-school-blue"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
              <LoginModal>
                <Button variant="outline" className="hidden lg:flex rounded-full px-6 font-bold border-school-blue text-school-blue hover:bg-school-blue/10">
                  Entrar
                </Button>
              </LoginModal>
              
              <Dialog open={isMatriculaOpen} onOpenChange={setIsMatriculaOpen}>
                <DialogTrigger asChild>
                  <Button className="hidden sm:flex bg-school-red hover:bg-school-red/90 text-white rounded-full px-8 font-bold shadow-lg shadow-school-red/20 transform hover:scale-105 transition-all">
                    Matrícula 2026
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] rounded-2xl p-8 border-none shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-black text-school-red">Matrícula 2026</DialogTitle>
                    <DialogDescription className="text-base font-medium">
                      Inicia el proceso de admisión para que tu hijo sea parte de nuestra familia escolar.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("¡Solicitud enviada! Nos contactaremos contigo pronto.");
                    setIsMatriculaOpen(false);
                  }} className="space-y-6 mt-4">
                    <div className="space-y-2">
                      <Label className="font-bold">Nombre del Padre/Madre</Label>
                      <Input placeholder="Ej. Juan Pérez" required className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Correo Electrónico</Label>
                      <Input type="email" placeholder="juan@ejemplo.com" required className="rounded-xl h-12" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-bold">Teléfono</Label>
                        <Input placeholder="987654321" required className="rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold">Grado de Interés</Label>
                        <select className="w-full h-12 rounded-xl border border-slate-200 px-4 font-medium bg-white outline-none focus:ring-2 focus:ring-school-red">
                          <option>Inicial</option>
                          <option>Primaria</option>
                          <option>Secundaria</option>
                        </select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-school-red hover:bg-school-red/90 h-14 rounded-2xl text-lg font-bold shadow-lg shadow-school-red/20">
                      Enviar Solicitud
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-b border-school-blue/10 overflow-hidden"
              >
                <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                  {["Inicio", "Niveles", "Talleres", "Nosotros", "Contacto"].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="text-slate-600 font-bold py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                    <LoginModal>
                      <Button variant="outline" className="w-full rounded-xl font-bold border-school-blue text-school-blue">
                        Entrar
                      </Button>
                    </LoginModal>
                    <Button className="w-full bg-school-red text-white rounded-xl font-bold">
                      Matrícula 2026
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}

      <main className={`relative z-10 ${!user ? 'pt-20' : ''}`}>
        {user ? (
          <section className="min-h-screen bg-slate-50 p-4 lg:p-8">
            <Dashboard />
          </section>
        ) : (
          <>
            {/* News Ticker */}
            <div className="bg-school-yellow py-3 overflow-hidden border-y-2 border-school-blue/20">
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
        <section id="inicio" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <Badge className="mb-6 bg-school-green/10 text-school-green border-school-green/20 px-6 py-2 rounded-full text-sm font-bold">
                ✨ {landingContent.motto}
              </Badge>
              <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
                {landingContent.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                {landingContent.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-school-blue hover:bg-school-blue/90 text-white text-xl px-10 py-8 rounded-3xl shadow-xl shadow-school-blue/30 group transform hover:-translate-y-1 transition-all">
                  ¡Inscríbete Hoy! <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-xl px-10 py-8 rounded-3xl border-4 border-school-yellow text-school-blue font-bold hover:bg-school-yellow/10 transition-all">
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
                  src="https://picsum.photos/seed/happykids/1200/600" 
                  alt="Niños felices aprendiendo" 
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-12">
                  <p className="text-white text-2xl font-heading font-bold italic">"Instruye al niño en su camino..."</p>
                </div>
              </div>
              
              {/* Decorative Blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-school-yellow rounded-full blur-3xl opacity-50 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-school-red rounded-full blur-3xl opacity-50 animate-pulse" />
            </motion.div>
          </div>
        </section>

        {/* Academic Excellence Section */}
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
                    <img src="https://picsum.photos/seed/edu1/300/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-48 bg-school-yellow/20 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/edu2/300/300" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 bg-school-red/20 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/edu3/300/300" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-64 bg-school-green/20 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/edu4/300/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-school-red/10 text-school-red border-school-red/20 mb-4">Nuestra Propuesta</Badge>
              <h2 className="font-heading text-5xl font-bold text-school-blue">Metodología de Vanguardia</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-school-blue/5 p-10 rounded-2xl border-2 border-school-blue/10 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-school-blue rounded-2xl flex items-center justify-center text-white mb-6">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4 text-slate-900">Aprendizaje Significativo</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    No solo memorizamos, entendemos. Conectamos los nuevos conocimientos con las experiencias previas de nuestros alumnos para un aprendizaje duradero.
                  </p>
                </div>
                <div className="mt-8 flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-white object-cover" referrerPolicy="no-referrer" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-school-yellow flex items-center justify-center text-school-blue font-bold text-xs">+200</div>
                </div>
              </div>
              
              <div className="bg-school-yellow/10 p-10 rounded-2xl border-2 border-school-yellow/20 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-school-yellow rounded-2xl flex items-center justify-center text-school-blue mb-6">
                  <Palette className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Creatividad Sin Límites</h3>
                <p className="text-slate-700 font-medium">Fomentamos el pensamiento lateral a través del arte y la expresión libre.</p>
              </div>
              
              <div className="bg-school-red/10 p-10 rounded-2xl border-2 border-school-red/20 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-school-red rounded-2xl flex items-center justify-center text-white mb-6">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-slate-900">Tecnología Educativa</h3>
                <p className="text-slate-700 font-medium">Aulas equipadas con las últimas herramientas digitales para el siglo XXI.</p>
              </div>
              
              <div className="md:col-span-4 bg-slate-900 text-white p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <h3 className="text-4xl font-heading font-bold mb-6">Educación en Valores Cristianos</h3>
                  <p className="text-xl text-slate-400 leading-relaxed">
                    Nuestra base es la palabra de Dios. Formamos el carácter de nuestros estudiantes para que sean ciudadanos de bien, con integridad y temor de Dios.
                  </p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-3xl text-center">
                    <Heart className="w-8 h-8 text-school-red mx-auto mb-2" />
                    <span className="font-bold">Amor</span>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl text-center">
                    <Star className="w-8 h-8 text-school-yellow mx-auto mb-2" />
                    <span className="font-bold">Excelencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Levels Section */}
        <section id="niveles" className="py-24 bg-white relative overflow-hidden">
          <div className="bg-doodle absolute inset-0 opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl font-bold mb-6">Nuestros Niveles</h2>
              <div className="w-24 h-2 bg-school-yellow mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Acompañamos a tus hijos en cada etapa de su crecimiento académico y personal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {levels.map((level, index) => (
                <motion.div
                  key={level.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`h-full border-4 transition-all shadow-xl rounded-2xl overflow-hidden ${level.color}`}>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto mb-6 p-5 bg-white rounded-3xl w-fit shadow-lg transform -rotate-3">
                        {level.icon}
                      </div>
                      <Badge className={`${level.accent} text-white mb-4 px-4 py-1 rounded-full text-xs font-bold border-none`}>
                        {level.badge}
                      </Badge>
                      <CardTitle className="text-3xl font-heading text-school-blue">{level.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center px-8 pb-10">
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {level.description}
                      </p>
                      <Button className={`${level.accent} hover:opacity-90 text-white rounded-2xl w-full py-6 font-bold shadow-lg`}>
                        Ver Plan de Estudios
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="talleres" className="py-24 bg-school-blue text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Talleres Extracurriculares</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Potenciamos el talento y la creatividad de nuestros alumnos con talleres especializados.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {workshops.map((workshop, i) => (
                <motion.div
                  key={workshop.name}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`${workshop.color} p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 shadow-xl border-4 border-white/20`}
                >
                  <div className="bg-white/20 p-4 rounded-2xl">
                    {workshop.icon}
                  </div>
                  <span className="font-bold text-sm leading-tight">{workshop.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold mb-4">Lo que dicen los Padres</h2>
              <p className="text-muted-foreground">Nuestra mejor garantía es la satisfacción de nuestras familias.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <Card key={i} className="rounded-2xl border-none shadow-xl p-8 bg-white relative">
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-school-blue/10" />
                  <CardContent className="p-0 space-y-6">
                    <p className="text-lg italic text-muted-foreground leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} className="w-14 h-14 rounded-2xl object-cover border-2 border-school-yellow" referrerPolicy="no-referrer" />
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

        {/* Final CTA */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="bg-school-red rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-doodle opacity-10" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">¿Listo para unirte a nosotros?</h2>
                <p className="text-xl md:text-2xl mb-12 text-white/90">
                  Las vacantes son limitadas. Asegura el futuro de tu hijo hoy mismo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button size="lg" className="bg-white text-school-red hover:bg-slate-100 text-2xl px-12 py-10 rounded-3xl font-black shadow-2xl transform hover:scale-105 transition-all">
                    ¡Matricular Ahora!
                  </Button>
                  <Button size="lg" className="bg-school-yellow text-school-blue hover:bg-yellow-400 text-xl px-10 py-10 rounded-3xl font-black shadow-xl transform hover:scale-105 transition-all">
                    Solicitar Información
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-muted/20">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-12 md:p-20 space-y-12">
                  <div>
                    <h2 className="font-heading text-5xl font-bold mb-4 text-school-blue">¡Hablemos!</h2>
                    <p className="text-muted-foreground text-lg">Estamos aquí para resolver todas tus dudas.</p>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="bg-school-blue/10 p-5 rounded-xl group-hover:bg-school-blue group-hover:text-white transition-all">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Visítanos</h4>
                        <p className="text-muted-foreground text-lg">Talara Alta - Calle 6 S/N</p>
                        <p className="text-muted-foreground">Talara, Piura, Perú</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="bg-school-red/10 p-5 rounded-xl group-hover:bg-school-red group-hover:text-white transition-all">
                        <Phone className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Llámanos</h4>
                        <p className="text-muted-foreground text-lg">+51 987 654 321</p>
                        <p className="text-muted-foreground">Atención: 8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <p className="font-bold text-lg mb-6">Nuestras Redes:</p>
                    <div className="flex gap-6">
                      {["f", "i", "w", "y"].map((social) => (
                        <motion.div 
                          key={social}
                          whileHover={{ y: -5, scale: 1.1 }}
                          className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center font-black text-xl hover:bg-school-blue hover:text-white transition-all cursor-pointer shadow-md"
                        >
                          {social}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 bg-muted/50 relative min-h-[500px]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-full h-full bg-white rounded-2xl shadow-inner border-8 border-white flex flex-col items-center justify-center p-8">
                      <div className="w-20 h-20 bg-school-blue/10 rounded-full flex items-center justify-center mb-6">
                        <MapPin className="w-10 h-10 text-school-blue" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-4">Ubicación Estratégica</h3>
                      <p className="text-muted-foreground mb-8">Estamos ubicados en el corazón de Talara Alta, con fácil acceso y seguridad.</p>
                      <Button className="bg-school-blue text-white rounded-2xl px-8 py-6 font-bold">
                        Abrir en Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      )}
    </main>

      {/* Footer - Only show if NOT logged in */}
      {!user && (
        <footer className="bg-slate-950 text-slate-500 py-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-school-blue via-school-yellow to-school-red" />
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-school-blue rounded-2xl flex items-center justify-center text-white font-heading font-bold text-2xl">
                    J
                  </div>
                  <span className="text-white font-heading font-bold text-2xl tracking-tight">I.E.P. Las Joyas de Jesucristo</span>
                </div>
                <p className="text-lg max-w-md">
                  Comprometidos con la formación de ciudadanos íntegros, competentes y con temor de Dios desde hace más de 15 años.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Enlaces Rápidos</h4>
                <ul className="space-y-4 font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Admisión 2026</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Niveles Educativos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Talleres</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Calendario Escolar</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
                <ul className="space-y-4 font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</a></li>
                </ul>
              </div>
            </div>
            <Separator className="bg-slate-900 mb-8" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              <p>© {new Date().getFullYear()} I.E.P. Las Joyas de Jesucristo. RD 00305. Talara Alta, Piura.</p>
              <p>Diseñado con ❤️ para nuestra comunidad escolar.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
