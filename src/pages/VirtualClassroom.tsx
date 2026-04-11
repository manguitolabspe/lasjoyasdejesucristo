import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Video, 
  FileText, 
  GraduationCap, 
  Calendar, 
  MessageSquare, 
  LayoutDashboard,
  ChevronRight,
  PlayCircle,
  Download,
  CheckCircle2,
  Clock,
  Search,
  Bell,
  User,
  Send,
  Paperclip,
  MoreVertical,
  Filter,
  TrendingUp,
  Award,
  FileDown,
  Sparkles,
  LogOut,
  Users,
  ShieldCheck,
  Baby,
  Activity,
  Mic,
  Monitor,
  Hand,
  PhoneOff,
  ArrowLeft
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import { toast } from "sonner";
import { useAuth } from "../AuthContext";
import { LoginModal } from "../components/LoginModal";

export const VirtualClassroom = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isLiveSessionActive, setIsLiveSessionActive] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Matemática Avanzada",
      teacher: "Luis Alejos León",
      progress: 65,
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { title: "Introducción al Álgebra", duration: "45 min", completed: true },
        { title: "Ecuaciones de Segundo Grado", duration: "60 min", completed: true },
        { title: "Funciones Exponenciales", duration: "50 min", completed: false },
        { title: "Logaritmos y sus Propiedades", duration: "55 min", completed: false },
      ]
    },
    {
      id: 2,
      title: "Comunicación y Literatura",
      teacher: "Elsiee Zapata Caballero",
      progress: 40,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { title: "Análisis Literario: El Quijote", duration: "40 min", completed: true },
        { title: "Redacción de Ensayos", duration: "45 min", completed: false },
        { title: "Figuras Retóricas", duration: "35 min", completed: false },
      ]
    },
    {
      id: 3,
      title: "Ciencia y Tecnología",
      teacher: "David Alejos Leon",
      progress: 90,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
      lessons: [
        { title: "La Célula y su Estructura", duration: "50 min", completed: true },
        { title: "Genética Mendeliana", duration: "55 min", completed: true },
        { title: "Ecosistemas del Perú", duration: "45 min", completed: true },
      ]
    }
  ];

  const upcomingClasses = [
    { time: "08:00 AM", subject: "Matemática", type: "En Vivo", link: "#" },
    { time: "10:30 AM", subject: "Inglés", type: "Grabación", link: "#" },
    { time: "02:00 PM", subject: "Historia", type: "En Vivo", link: "#" },
  ];

  const tasks = [
    { id: 1, title: "Ensayo sobre la Independencia", subject: "Historia", dueDate: "15 Abr", status: "pending", priority: "high" },
    { id: 2, title: "Práctica de Ecuaciones", subject: "Matemática", dueDate: "14 Abr", status: "submitted", priority: "medium" },
    { id: 3, title: "Proyecto de Biología", subject: "Ciencia", dueDate: "20 Abr", status: "pending", priority: "medium" },
    { id: 4, title: "Lectura: El Cantar de Mio Cid", subject: "Comunicación", dueDate: "12 Abr", status: "overdue", priority: "high" },
  ];

  const grades = [
    { subject: "Matemática", average: 18, trend: "up", lastGrade: 19 },
    { subject: "Comunicación", average: 16, trend: "stable", lastGrade: 16 },
    { subject: "Ciencia", average: 19, trend: "up", lastGrade: 20 },
    { subject: "Inglés", average: 15, trend: "down", lastGrade: 14 },
  ];

  const libraryResources = [
    { title: "Diccionario de la RAE", type: "PDF", size: "15 MB", category: "Lenguaje" },
    { title: "Atlas Geográfico del Perú", type: "Interactivo", size: "45 MB", category: "Geografía" },
    { title: "Tabla Periódica Moderna", type: "Imagen", size: "2 MB", category: "Química" },
    { title: "Obras Completas de Vallejo", type: "EPUB", size: "8 MB", category: "Literatura" },
  ];

  const calendarEvents = [
    { date: "15", month: "Abr", title: "Examen Parcial Matemática", type: "Examen", color: "bg-school-red" },
    { date: "22", month: "Abr", title: "Día de la Tierra - Actuación", type: "Evento", color: "bg-school-green" },
    { date: "01", month: "May", title: "Feriado: Día del Trabajo", type: "Feriado", color: "bg-slate-400" },
    { date: "10", month: "May", title: "Homenaje Día de la Madre", type: "Evento", color: "bg-school-yellow" },
    { date: "15", month: "May", title: "Entrega de Libretas I Bimestre", type: "Académico", color: "bg-school-blue" },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        {/* Landing Hero */}
        <section className="bg-school-blue text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-doodle opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Badge className="bg-school-yellow text-school-blue border-none px-6 py-2 rounded-full font-bold mb-6">
                    Plataforma Educativa 2026
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
                    Tu Aula, <br /> <span className="text-school-yellow">Donde Quiera que Estés</span>
                  </h1>
                  <p className="text-xl text-white/80 max-w-2xl mb-12 leading-relaxed">
                    Accede a tus clases en vivo, tareas, calificaciones y recursos digitales en un solo lugar. Diseñado para potenciar el aprendizaje de nuestros alumnos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <LoginModal>
                      <Button size="lg" className="bg-white text-school-blue hover:bg-school-yellow hover:text-school-blue px-10 py-8 rounded-2xl text-xl font-black shadow-2xl">
                        Iniciar Sesión
                      </Button>
                    </LoginModal>
                    <Button className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 px-10 py-8 rounded-2xl text-xl font-black transition-all">
                      Guía del Alumno
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="flex-1 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="bg-slate-800 p-4 rounded-3xl shadow-2xl border-8 border-slate-700"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800" 
                    alt="Estudiante usando plataforma" 
                    className="rounded-2xl w-full h-auto opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -left-6 bg-school-red p-6 rounded-2xl shadow-xl animate-bounce">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features for Students & Teachers */}
        <section className="py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-school-blue mb-4">Una Experiencia para Todos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Nuestra aula virtual está adaptada para las necesidades de cada miembro de la comunidad educativa.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-2xl bg-slate-50 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-school-blue/10 rounded-2xl flex items-center justify-center text-school-blue mb-6">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-school-blue">Para Alumnos</h3>
              <ul className="space-y-4">
                {[
                  "Clases en vivo y grabadas",
                  "Entrega de tareas digital",
                  "Seguimiento de notas en tiempo real",
                  "Biblioteca de recursos 24/7"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-school-green" /> {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-none shadow-2xl bg-slate-50 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-school-red/10 rounded-2xl flex items-center justify-center text-school-red mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-school-red">Para Docentes</h3>
              <ul className="space-y-4">
                {[
                  "Gestión de cursos y contenidos",
                  "Calificación rápida y feedback",
                  "Comunicación directa con padres",
                  "Reportes de progreso automático"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-school-blue" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-school-yellow/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-heading font-black text-school-blue mb-8">¿Listo para comenzar tu clase?</h2>
            <LoginModal>
              <Button size="lg" className="bg-school-blue text-white hover:bg-school-blue/90 px-12 py-8 rounded-2xl text-xl font-black">
                Ingresar al Aula Virtual
              </Button>
            </LoginModal>
          </div>
        </section>
      </div>
    );
  }

  // Parent View Logic
  if (user?.role === 'parent') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
        {/* Mobile Tab Switcher */}
        <div className="lg:hidden bg-white border-b sticky top-20 z-30 px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Resumen" },
            { id: "grades", icon: GraduationCap, label: "Notas" },
            { id: "attendance", icon: Activity, label: "Asistencia" },
            { id: "calendar", icon: Calendar, label: "Agenda" },
            { id: "messages", icon: MessageSquare, label: "Citas" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeTab === item.id 
                  ? "bg-school-green text-white shadow-md" 
                  : "text-slate-500 bg-slate-50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-bold">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all text-school-green bg-slate-50 border border-school-green/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-bold">Regresar</span>
          </button>
        </div>

        {/* Sidebar (Desktop) */}
        <aside className="w-64 bg-white border-r hidden lg:flex flex-col p-6 gap-8 sticky top-20 h-[calc(100vh-80px)]">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 px-4">Portal para Padres</p>
            {[
              { id: "dashboard", icon: LayoutDashboard, label: "Resumen Hijos" },
              { id: "grades", icon: GraduationCap, label: "Boleta de Notas" },
              { id: "attendance", icon: Activity, label: "Asistencia" },
              { id: "calendar", icon: Calendar, label: "Agenda Escolar" },
              { id: "messages", icon: MessageSquare, label: "Citas con Prof." },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                  activeTab === item.id 
                    ? "bg-school-green text-white shadow-lg shadow-school-green/20" 
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm border-school-green text-school-green hover:bg-school-green/5"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
              Panel Principal
            </Button>
            <Button 
              variant="ghost" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm text-red-500 hover:bg-red-50 hover:text-red-600"
              onClick={() => {
                logout();
                toast.success("Sesión cerrada");
              }}
            >
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </Button>
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="lg:hidden rounded-xl border-slate-200"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-3xl font-black text-slate-900">Bienvenido, Sr(a). {user.displayName}</h2>
                <p className="text-slate-500 font-medium">Monitorea el progreso académico de tus hijos.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                className="hidden lg:flex items-center gap-2 rounded-xl border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-4 h-4" />
                Regresar al Panel
              </Button>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900">Hijo: Mateo Salazar</p>
                <p className="text-[10px] text-school-green font-bold">4to Grado de Primaria</p>
              </div>
              <div className="w-12 h-12 bg-school-green rounded-xl flex items-center justify-center text-white font-black">
                <Baby className="w-6 h-6" />
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 border-none shadow-xl bg-white">
                  <p className="text-xs font-bold text-slate-500 mb-2">Promedio General</p>
                  <p className="text-3xl font-black text-school-blue">18.2</p>
                </Card>
                <Card className="p-6 border-none shadow-xl bg-white">
                  <p className="text-xs font-bold text-slate-500 mb-2">Asistencia</p>
                  <p className="text-3xl font-black text-school-green">95%</p>
                </Card>
                <Card className="p-6 border-none shadow-xl bg-white">
                  <p className="text-xs font-bold text-slate-500 mb-2">Tareas Pendientes</p>
                  <p className="text-3xl font-black text-school-red">2</p>
                </Card>
              </div>

              <section>
                <h3 className="text-xl font-black text-slate-900 mb-6">Últimas Calificaciones</h3>
                <div className="space-y-4">
                  {grades.map((grade, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{grade.subject}</p>
                          <p className="text-[10px] text-slate-500">Última nota: {grade.lastGrade}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-black text-school-blue">{grade.average}</p>
                        <p className="text-[10px] font-bold text-school-green">Promedio</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <Card className="p-6 border-none shadow-xl bg-white">
                <h3 className="font-black text-lg mb-6">Comunicados Recientes</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-school-yellow/10 rounded-xl border border-school-yellow/20">
                    <p className="text-xs font-bold text-school-blue mb-1">Reunión de Padres</p>
                    <p className="text-[10px] text-slate-600 mb-2">Viernes 18 de Abril - 6:00 PM</p>
                    <Button size="sm" className="w-full bg-school-blue h-7 text-[10px]">Confirmar Asistencia</Button>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-900 mb-1">Pago de Pensión</p>
                    <p className="text-[10px] text-slate-600">Recordatorio: Vencimiento 30 de Abril</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-xl bg-school-blue text-white">
                <h3 className="font-black text-lg mb-4">Agenda de Hoy</h3>
                <div className="space-y-4">
                  {upcomingClasses.slice(0, 2).map((cls, i) => (
                    <div key={i} className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-0">
                      <div className="text-xs font-bold w-12">{cls.time}</div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">{cls.subject}</p>
                        <p className="text-[10px] text-white/60">{cls.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </aside>
          </div>
        </main>
      </div>
    );
  }

  // Assistant / Coordinator / Admin View Logic
  if (user?.role === 'assistant' || user?.role === 'superadmin' || user?.role === 'admin') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
        {/* Mobile Tab Switcher */}
        <div className="lg:hidden bg-slate-900 border-b sticky top-20 z-30 px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Control" },
            { id: "teachers", icon: GraduationCap, label: "Docentes" },
            { id: "students", icon: Users, label: "Alumnos" },
            { id: "schedules", icon: Calendar, label: "Horarios" },
            { id: "reports", icon: TrendingUp, label: "Reportes" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeTab === item.id 
                  ? "bg-school-yellow text-school-blue shadow-md" 
                  : "text-slate-400 bg-slate-800"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-bold">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all text-school-yellow bg-slate-800 border border-school-yellow/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-bold">Regresar</span>
          </button>
        </div>

        <aside className="w-64 bg-slate-900 text-white hidden lg:flex flex-col p-6 gap-8 sticky top-20 h-[calc(100vh-80px)]">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest font-black text-slate-500 px-4">Gestión Académica</p>
            {[
              { id: "dashboard", icon: LayoutDashboard, label: "Panel de Control" },
              { id: "teachers", icon: GraduationCap, label: "Docentes" },
              { id: "students", icon: Users, label: "Alumnos" },
              { id: "schedules", icon: Calendar, label: "Horarios" },
              { id: "reports", icon: TrendingUp, label: "Reportes" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                  activeTab === item.id 
                    ? "bg-school-yellow text-school-blue shadow-lg" 
                    : "text-slate-400 hover:bg-white/5"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm border-school-yellow text-school-yellow hover:bg-school-yellow/5 mb-2"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
              Panel Principal
            </Button>
            <Button 
              variant="ghost" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm text-slate-400 hover:bg-white/5 hover:text-white"
              onClick={() => {
                logout();
                toast.success("Sesión cerrada");
              }}
            >
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </Button>
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="lg:hidden rounded-xl border-slate-200"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-3xl font-black text-slate-900">Panel de {(user.role === 'superadmin' || user.role === 'admin') ? 'Administración' : 'Coordinación'}</h2>
                <p className="text-slate-500 font-medium">Gestión integral de la sede institucional.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="hidden lg:flex items-center gap-2 rounded-xl border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-4 h-4" />
                Regresar al Panel
              </Button>
              <div className="w-12 h-12 bg-school-yellow rounded-xl flex items-center justify-center text-school-blue font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Alumnos", value: "850", color: "text-school-blue" },
              { label: "Total Docentes", value: "42", color: "text-school-red" },
              { label: "Asistencia Hoy", value: "94%", color: "text-school-green" },
              { label: "Alertas Académicas", value: "5", color: "text-school-yellow" },
            ].map((stat, i) => (
              <Card key={i} className="p-6 border-none shadow-xl bg-white">
                <p className="text-xs font-bold text-slate-500 mb-2">{stat.label}</p>
                <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 border-none shadow-xl bg-white">
              <h3 className="font-black text-lg mb-6">Monitoreo de Clases en Vivo</h3>
              <div className="space-y-4">
                {[
                  { subject: "Matemática 5to A", teacher: "Luis Alejos", status: "En curso", viewers: 28 },
                  { subject: "Comunicación 3ro B", teacher: "Elsiee Zapata", status: "Inicia 10:30", viewers: 0 },
                  { subject: "Ciencia 1ro A", teacher: "David Alejos", status: "En curso", viewers: 24 },
                ].map((live, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div>
                      <p className="font-bold text-slate-900">{live.subject}</p>
                      <p className="text-xs text-slate-500">Prof. {live.teacher}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={live.status === "En curso" ? "bg-green-500" : "bg-slate-400"}>{live.status}</Badge>
                      <p className="text-[10px] font-bold text-slate-400 mt-1">{live.viewers} alumnos</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-none shadow-xl bg-white">
              <h3 className="font-black text-lg mb-6">Alertas de Rendimiento</h3>
              <div className="space-y-4">
                {[
                  { student: "Carlos Ruiz", issue: "Bajo rendimiento en Matemática", action: "Citar Padre" },
                  { student: "Ana López", issue: "3 inasistencias consecutivas", action: "Llamar" },
                  { student: "Juan Pérez", issue: "Tarea no entregada (3)", action: "Notificar" },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border-l-4 border-school-red bg-school-red/5 rounded-r-2xl">
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">{alert.student}</p>
                      <p className="text-xs text-slate-500">{alert.issue}</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white text-[10px] h-7">
                      {alert.action}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // Teacher View Logic
  if (user?.role === 'teacher') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
        {/* Mobile Tab Switcher */}
        <div className="lg:hidden bg-white border-b sticky top-20 z-30 px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Panel Docente" },
            { id: "my-courses", icon: BookOpen, label: "Mis Cursos" },
            { id: "grading", icon: FileText, label: "Calificar" },
            { id: "schedule", icon: Calendar, label: "Horario" },
            { id: "messages", icon: MessageSquare, label: "Mensajes" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeTab === item.id 
                  ? "bg-school-red text-white shadow-md" 
                  : "text-slate-500 bg-slate-50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-bold">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all text-school-red bg-slate-50 border border-school-red/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-bold">Regresar</span>
          </button>
        </div>

        {/* Sidebar (Desktop) */}
        <aside className="w-64 bg-white border-r hidden lg:flex flex-col p-6 gap-8 sticky top-20 h-[calc(100vh-80px)]">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 px-4">Panel Docente</p>
            {[
              { id: "dashboard", icon: LayoutDashboard, label: "Resumen" },
              { id: "my-courses", icon: BookOpen, label: "Mis Cursos" },
              { id: "grading", icon: FileText, label: "Calificar Tareas" },
              { id: "schedule", icon: Calendar, label: "Horario" },
              { id: "messages", icon: MessageSquare, label: "Mensajes" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                  activeTab === item.id 
                    ? "bg-school-red text-white shadow-lg shadow-school-red/20" 
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm border-school-red text-school-red hover:bg-school-red/5"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
              Panel Principal
            </Button>
            <div className="p-4 bg-school-red/5 rounded-2xl border border-school-red/10">
              <p className="text-xs font-bold text-school-red mb-1">Centro de Ayuda</p>
              <p className="text-[10px] text-slate-500 mb-3">Guía para docentes</p>
              <Button 
                size="sm" 
                className="w-full bg-school-red text-white text-[10px] h-8 rounded-lg"
                onClick={() => toast.info("Abriendo guía docente...")}
              >
                Ver Tutoriales
              </Button>
            </div>
            <Button 
              variant="ghost" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm text-red-500 hover:bg-red-50 hover:text-red-600"
              onClick={() => {
                logout();
                toast.success("Sesión cerrada");
              }}
            >
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </Button>
          </div>
        </aside>

        {/* Main Content (Teacher) */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="lg:hidden rounded-xl border-slate-200"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-3xl font-black text-slate-900">¡Hola, Prof. {user.displayName}!</h2>
                <p className="text-slate-500 font-medium">Hoy tienes 3 clases programadas y 12 tareas por calificar.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="hidden lg:flex items-center gap-2 rounded-xl border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-4 h-4" />
                Regresar al Panel
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className="rounded-xl border-slate-200">
                  <Bell className="w-5 h-5 text-slate-400" />
                </Button>
                <div className="w-12 h-12 bg-school-red rounded-xl flex items-center justify-center text-white font-black">
                  {user.displayName.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Teacher Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-6 border-none shadow-xl bg-white">
                  <p className="text-xs font-bold text-slate-500 mb-2">Alumnos</p>
                  <p className="text-3xl font-black text-school-blue">124</p>
                </Card>
                <Card className="p-6 border-none shadow-xl bg-white">
                  <p className="text-xs font-bold text-slate-500 mb-2">Promedio</p>
                  <p className="text-3xl font-black text-school-green">17.5</p>
                </Card>
                <Card className="p-6 border-none shadow-xl bg-white">
                  <p className="text-xs font-bold text-slate-500 mb-2">Asistencia</p>
                  <p className="text-3xl font-black text-school-yellow">98%</p>
                </Card>
              </div>

              {/* Active Courses */}
              <section>
                <h3 className="text-xl font-black text-slate-900 mb-6">Mis Cursos Activos</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {courses.slice(0, 2).map(course => (
                    <Card key={course.id} className="overflow-hidden border-none shadow-xl group cursor-pointer">
                      <div className="h-32 relative overflow-hidden">
                        <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/20" />
                        <Badge className="absolute top-4 right-4 bg-white/90 text-slate-900 border-none">
                          {course.lessons.length} Temas
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-black text-lg mb-2">{course.title}</h4>
                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-4">
                          <span>32 Alumnos</span>
                          <span>Mar, Jue 08:00 AM</span>
                        </div>
                        <Button className="w-full bg-slate-900 text-white rounded-xl">Gestionar Curso</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <Card className="p-6 border-none shadow-xl bg-white">
                <h3 className="font-black text-lg mb-6">Pendiente de Calificar</h3>
                <div className="space-y-4">
                  {tasks.slice(0, 3).map(task => (
                    <div key={task.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 bg-school-red/10 rounded-lg flex items-center justify-center text-school-red">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-900">{task.title}</p>
                        <p className="text-[10px] text-slate-500">{task.subject} • 12 entregas</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-school-red font-bold">Revisar</Button>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-none shadow-xl bg-school-blue text-white">
                <h3 className="font-black text-lg mb-4">Próxima Clase</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Matemática 4to B</p>
                      <p className="text-xs text-white/70">En 15 minutos</p>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-school-blue hover:bg-school-yellow font-black rounded-xl">
                    Iniciar Sesión
                  </Button>
                </div>
              </Card>
            </aside>
          </div>
        </main>
      </div>
    );
  }

  const SidebarItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setSelectedCourse(null);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        activeTab === id 
          ? "bg-school-blue text-white shadow-lg shadow-school-blue/20" 
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-bold text-sm">{label}</span>
    </button>
  );

  const LiveSessionSimulation = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-slate-900 flex flex-col"
    >
      {/* Simulation Header */}
      <div className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center animate-pulse">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Clase en Vivo: Geometría Analítica</p>
            <p className="text-slate-400 text-[10px]">Prof. Luis Alejos • 24 Alumnos conectados</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-red-500/10 text-red-500 border-red-500/20">REC 01:24:15</Badge>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-slate-400 hover:text-white"
            onClick={() => setIsLiveSessionActive(false)}
          >
            Salir de Clase
          </Button>
        </div>
      </div>

      {/* Main Simulation Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Area */}
        <div className="flex-1 relative bg-black flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1577891729319-66dd77445073?auto=format&fit=crop&q=80&w=1200" 
            alt="Teacher"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
              <User className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Prof. Luis Alejos compartiendo pantalla...</h3>
            <p className="text-slate-400">"Hoy veremos la resolución de parábolas en el plano cartesiano"</p>
          </div>

          {/* Participant Thumbnails */}
          <div className="absolute bottom-6 left-6 flex gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-32 h-20 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/student${i}/200/120`} 
                  alt="Student"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-1 left-2">
                  <p className="text-[8px] font-bold text-white">Alumno {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-80 bg-slate-800 border-l border-slate-700 flex flex-col">
          <div className="p-4 border-b border-slate-700">
            <h4 className="text-white font-bold text-sm">Chat de la Clase</h4>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-school-yellow">Mateo Salazar</p>
              <p className="text-xs text-slate-300 bg-slate-700/50 p-2 rounded-lg">¿Profesor, puede repetir la fórmula de la directriz?</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-school-green">Ana López</p>
              <p className="text-xs text-slate-300 bg-slate-700/50 p-2 rounded-lg">¡Entendido! Gracias.</p>
            </div>
          </div>
          <div className="p-4 border-t border-slate-700">
            <div className="relative">
              <Input 
                placeholder="Escribe un mensaje..." 
                className="bg-slate-900 border-slate-700 text-white text-xs pr-10"
              />
              <Send className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls Footer */}
      <div className="h-20 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-6">
        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
          <Mic className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
          <Video className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
          <Monitor className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
          <Hand className="w-5 h-5" />
        </Button>
        <Button variant="destructive" size="icon" className="rounded-full w-12 h-12 bg-red-600 hover:bg-red-700" onClick={() => setIsLiveSessionActive(false)}>
          <PhoneOff className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {isLiveSessionActive && <LiveSessionSimulation />}
      {/* Mobile Tab Switcher */}
      <div className="lg:hidden bg-white border-b sticky top-20 z-30 px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: "dashboard", icon: LayoutDashboard, label: "Panel" },
          { id: "courses", icon: BookOpen, label: "Cursos" },
          { id: "live", icon: Video, label: "En Vivo" },
          { id: "tasks", icon: FileText, label: "Tareas" },
          { id: "grades", icon: GraduationCap, label: "Notas" },
          { id: "library", icon: BookOpen, label: "Biblioteca" },
          { id: "calendar", icon: Calendar, label: "Calendario" },
          { id: "messages", icon: MessageSquare, label: "Mensajes" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              setSelectedCourse(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === item.id 
                ? "bg-school-blue text-white shadow-md" 
                : "text-slate-500 bg-slate-50"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-xs font-bold">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-white border-r hidden lg:flex flex-col p-6 gap-8 sticky top-20 h-[calc(100vh-80px)]">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 px-4">Menú Principal</p>
          <SidebarItem id="dashboard" icon={LayoutDashboard} label="Panel de Control" />
          <SidebarItem id="courses" icon={BookOpen} label="Mis Cursos" />
          <SidebarItem id="live" icon={Video} label="Clases en Vivo" />
          <SidebarItem id="tasks" icon={FileText} label="Tareas y Exámenes" />
          <SidebarItem id="grades" icon={GraduationCap} label="Calificaciones" />
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 px-4">Recursos</p>
          <SidebarItem id="library" icon={BookOpen} label="Biblioteca Digital" />
          <SidebarItem id="calendar" icon={Calendar} label="Calendario" />
          <SidebarItem id="messages" icon={MessageSquare} label="Mensajería" />
        </div>

        <div className="mt-auto space-y-4">
          <div className="p-4 bg-school-blue/5 rounded-2xl border border-school-blue/10">
            <p className="text-xs font-bold text-school-blue mb-1">Soporte Técnico</p>
            <p className="text-[10px] text-slate-500 mb-3">¿Problemas con el aula?</p>
            <Button 
              size="sm" 
              className="w-full bg-school-blue text-white text-[10px] h-8 rounded-lg"
              onClick={() => toast.info("Conectando con soporte técnico...")}
            >
              Contactar
            </Button>
          </div>
          <Button 
            variant="ghost" 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => {
              logout();
              toast.success("Sesión cerrada");
            }}
          >
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">
              {activeTab === "dashboard" && "¡Hola de nuevo, Estudiante!"}
              {activeTab === "courses" && "Mis Cursos"}
              {activeTab === "live" && "Clases en Vivo"}
              {activeTab === "tasks" && "Tareas y Exámenes"}
              {activeTab === "grades" && "Mi Progreso Académico"}
            </h1>
            <p className="text-slate-500 font-medium">
              {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Buscar recursos..." className="pl-10 w-64 bg-white border-none shadow-sm rounded-xl" />
            </div>
            <Button variant="outline" size="icon" className="rounded-xl bg-white border-none shadow-sm relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-school-red rounded-full border-2 border-white" />
            </Button>
            <div className="flex items-center gap-3 bg-school-yellow/10 p-1 pr-4 rounded-xl shadow-sm border border-school-yellow/20">
              <div className="w-8 h-8 bg-school-yellow rounded-lg flex items-center justify-center text-school-blue">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="hidden sm:block">
                <p className="text-[8px] font-black text-school-blue uppercase leading-none">Joy Points</p>
                <p className="text-xs font-black text-slate-900">1,250 pts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-xl shadow-sm border border-slate-100">
              <div className="w-8 h-8 bg-school-blue rounded-lg flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-700 hidden sm:block">Alumno Joyista</span>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Welcome Card */}
                <div className="bg-gradient-to-r from-school-blue to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                  <div className="relative z-10">
                    <Badge className="bg-white/20 text-white border-none mb-4">Matrícula 2026 Activa</Badge>
                    <h2 className="text-3xl font-black mb-2">Tu futuro empieza aquí.</h2>
                    <p className="text-white/80 max-w-md mb-6">
                      Tienes 3 tareas pendientes para esta semana. ¡No dejes que se acumulen!
                    </p>
                    <Button 
                      onClick={() => setActiveTab("tasks")}
                      className="bg-school-yellow text-school-blue hover:bg-white font-bold rounded-xl px-8"
                    >
                      Ver Tareas
                    </Button>
                  </div>
                  <GraduationCap className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-white/10 rotate-12" />
                </div>

                {/* Continue Learning */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-black text-slate-900">Continuar Aprendiendo</h3>
                    <Button 
                      variant="link" 
                      className="text-school-blue font-bold"
                      onClick={() => setActiveTab("courses")}
                    >
                      Ver todos
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {courses.slice(0, 2).map((course) => (
                      <Card key={course.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden group">
                        <div className="h-32 relative">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/90 text-slate-900 border-none">{course.teacher}</Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h4 className="font-bold text-slate-900 mb-4">{course.title}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold text-slate-500">
                              <span>Progreso</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2 bg-slate-100" />
                          </div>
                          <Button 
                            onClick={() => {
                              setSelectedCourse(course);
                              setActiveTab("course-detail");
                            }}
                            className="w-full mt-6 bg-slate-900 hover:bg-school-blue text-white rounded-xl font-bold"
                          >
                            Continuar Lección
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Schedule */}
                <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                  <CardHeader className="bg-white border-b border-slate-50">
                    <CardTitle className="text-lg font-black flex items-center gap-2">
                      <Clock className="w-5 h-5 text-school-red" />
                      Horario de Hoy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {upcomingClasses.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="text-center min-w-[60px]">
                          <p className="text-[10px] font-black text-slate-400 uppercase">{item.time.split(' ')[1]}</p>
                          <p className="text-sm font-black text-slate-900">{item.time.split(' ')[0]}</p>
                        </div>
                        <div className={`flex-1 p-3 rounded-2xl border-l-4 transition-all group-hover:translate-x-1 ${
                          item.type === "En Vivo" ? "bg-school-red/5 border-school-red" : "bg-school-blue/5 border-school-blue"
                        }`}>
                          <p className="text-xs font-bold text-slate-900">{item.subject}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className={`text-[10px] font-bold ${
                              item.type === "En Vivo" ? "text-school-red" : "text-school-blue"
                            }`}>{item.type}</span>
                            <ChevronRight className="w-3 h-3 text-slate-400" />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button 
                      variant="outline" 
                      className="w-full rounded-xl border-slate-200 font-bold text-slate-600"
                      onClick={() => setActiveTab("calendar")}
                    >
                      Ver Horario Completo
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                    <p className="text-2xl font-black text-school-blue">12</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">Cursos</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                    <p className="text-2xl font-black text-school-red">98%</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">Asistencia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "courses" && (
            <motion.div
              key="courses"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {courses.map((course) => (
                <Card key={course.id} className="border-none shadow-sm hover:shadow-xl transition-all rounded-3xl overflow-hidden group">
                  <div className="h-48 relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-black text-lg leading-tight">{course.title}</h3>
                      <p className="text-white/70 text-xs font-medium mt-1">Prof. {course.teacher}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4 text-school-blue" />
                        <span className="text-xs font-bold text-slate-600">{course.lessons.length} Lecciones</span>
                      </div>
                      <Badge className="bg-slate-100 text-slate-600 border-none">2026-I</Badge>
                    </div>
                    <Progress value={course.progress} className="h-2 mb-6" />
                    <Button 
                      onClick={() => {
                        setSelectedCourse(course);
                        setActiveTab("course-detail");
                      }}
                      className="w-full bg-slate-900 hover:bg-school-blue text-white rounded-2xl font-bold h-12"
                    >
                      Entrar al Aula
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {activeTab === "course-detail" && selectedCourse && (
            <motion.div
              key="course-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Lesson Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl">
                  <img src={selectedCourse.image} alt="Video Thumbnail" className="w-full h-full object-cover opacity-40 blur-[2px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-12 h-12 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-bold opacity-70">REPRODUCIENDO AHORA</p>
                      <h3 className="text-xl font-black">{selectedCourse.lessons.find((l: any) => !l.completed)?.title || "Resumen del Curso"}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"><Download className="w-5 h-5" /></Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-black text-slate-900">Descripción de la Lección</h2>
                    <Badge className="bg-school-blue/10 text-school-blue border-none">Semana 4</Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    En esta sesión profundizaremos en los conceptos fundamentales aplicados a casos reales. 
                    Aprenderemos a identificar patrones y desarrollar soluciones críticas basadas en la metodología Joyista.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-school-red" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Guía de Estudio.pdf</p>
                        <p className="text-[10px] text-slate-500">2.4 MB</p>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-school-blue" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Ejercicios Prácticos.docx</p>
                        <p className="text-[10px] text-slate-500">1.1 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lesson List */}
              <div className="space-y-6">
                <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                  <CardHeader className="bg-white border-b border-slate-50">
                    <CardTitle className="text-lg font-black">Contenido del Curso</CardTitle>
                    <CardDescription className="font-bold text-school-blue">{selectedCourse.progress}% completado</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    {selectedCourse.lessons.map((lesson: any, i: number) => (
                      <button 
                        key={i}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group ${
                          lesson.completed ? "bg-slate-50" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          lesson.completed ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-400 group-hover:bg-school-blue group-hover:text-white"
                        }`}>
                          {lesson.completed ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-xs font-bold">{i + 1}</span>}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-bold ${lesson.completed ? "text-slate-500 line-through" : "text-slate-900"}`}>
                            {lesson.title}
                          </p>
                          <p className="text-[10px] font-medium text-slate-400">{lesson.duration}</p>
                        </div>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                <Button 
                  onClick={() => toast.success("¡Lección marcada como completada!")}
                  className="w-full bg-school-green hover:bg-green-600 text-white rounded-2xl font-black h-14 shadow-lg shadow-green-100"
                >
                  Marcar como Finalizada
                </Button>
              </div>
            </motion.div>
          )}

          {activeTab === "live" && (
            <motion.div
              key="live"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="bg-white p-12 rounded-[40px] text-center shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-school-red via-school-yellow to-school-blue" />
                <div className="w-24 h-24 bg-school-red/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Video className="w-12 h-12 text-school-red" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Próxima Clase en Vivo</h2>
                <p className="text-xl text-slate-500 font-medium mb-8">Matemática: Geometría Analítica</p>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <div className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Inicia en</p>
                    <p className="text-2xl font-black text-slate-900">00:15:42</p>
                  </div>
                  <div className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Profesor</p>
                    <p className="text-2xl font-black text-slate-900">L. Alejos</p>
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    toast.info("Abriendo enlace de la clase en vivo (Google Meet)...");
                    // setIsLiveSessionActive(true); // Standby: Usar para simulación interna
                  }}
                  className="bg-school-red hover:bg-red-600 text-white rounded-2xl px-12 h-16 text-xl font-black shadow-xl shadow-red-100"
                >
                  Unirse a la Sesión <ChevronRight className="ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm rounded-3xl p-6 bg-white">
                  <h4 className="font-black text-slate-900 mb-4">Grabaciones Recientes</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer group">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-school-blue group-hover:text-white">
                          <PlayCircle className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Clase del 08/04 - Comunicación</p>
                          <p className="text-[10px] font-medium text-slate-400">Duración: 1h 20min</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card className="border-none shadow-sm rounded-3xl p-6 bg-white">
                  <h4 className="font-black text-slate-900 mb-4">Material de Apoyo</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer group">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-school-red group-hover:text-white">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Diapositivas_Sesion_{i}.pdf</p>
                          <p className="text-[10px] font-medium text-slate-400">PDF - 4.5 MB</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          )}

          {activeTab === "tasks" && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <Button variant="outline" className="rounded-xl border-slate-200 bg-white font-bold">Todas</Button>
                  <Button variant="ghost" className="rounded-xl text-slate-500 font-bold">Pendientes</Button>
                  <Button variant="ghost" className="rounded-xl text-slate-500 font-bold">Entregadas</Button>
                </div>
                <Button variant="outline" className="rounded-xl border-slate-200 bg-white gap-2 font-bold">
                  <Filter className="w-4 h-4" /> Filtrar por Materia
                </Button>
              </div>

              <div className="grid gap-4">
                {tasks.map((task) => (
                  <Card key={task.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          task.status === 'overdue' ? 'bg-red-100 text-red-600' : 
                          task.status === 'submitted' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{task.title}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs font-bold text-slate-400">{task.subject}</span>
                            <span className="text-slate-200">•</span>
                            <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> Vence: {task.dueDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Badge className={`border-none font-bold px-4 py-1 rounded-full ${
                          task.status === 'overdue' ? 'bg-red-100 text-red-600' : 
                          task.status === 'submitted' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {task.status === 'overdue' ? 'Atrasado' : 
                           task.status === 'submitted' ? 'Entregado' : 'Pendiente'}
                        </Badge>
                        <Button variant="ghost" size="icon" className="rounded-xl text-slate-400"><ChevronRight /></Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "grades" && (
            <motion.div
              key="grades"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-none shadow-sm rounded-3xl p-8 bg-white text-center">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Promedio General</p>
                  <p className="text-5xl font-black text-school-blue">17.8</p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-green-500 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>+0.5 este mes</span>
                  </div>
                </Card>
                <Card className="border-none shadow-sm rounded-3xl p-8 bg-white text-center">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Posición en Clase</p>
                  <p className="text-5xl font-black text-school-red">3°</p>
                  <p className="text-xs font-bold text-slate-400 mt-4">De 28 alumnos</p>
                </Card>
                <Card className="border-none shadow-sm rounded-3xl p-8 bg-white text-center">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Insignias Ganadas</p>
                  <p className="text-5xl font-black text-school-yellow">12</p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-school-blue font-bold">
                    <Award className="w-4 h-4" />
                    <span>Nivel Oro</span>
                  </div>
                </Card>
              </div>

              <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                <CardHeader className="p-8 border-b border-slate-50">
                  <CardTitle className="text-xl font-black">Desglose por Materia</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        <tr>
                          <th className="px-8 py-4">Materia</th>
                          <th className="px-8 py-4">Promedio</th>
                          <th className="px-8 py-4">Última Nota</th>
                          <th className="px-8 py-4">Tendencia</th>
                          <th className="px-8 py-4">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {grades.map((grade, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-8 py-6 font-bold text-slate-900">{grade.subject}</td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <span className="font-black text-slate-900">{grade.average}</span>
                                <Progress value={grade.average * 5} className="w-24 h-1.5" />
                              </div>
                            </td>
                            <td className="px-8 py-6 font-bold text-slate-600">{grade.lastGrade}</td>
                            <td className="px-8 py-6">
                              {grade.trend === 'up' && <Badge className="bg-green-100 text-green-600 border-none">Mejorando</Badge>}
                              {grade.trend === 'stable' && <Badge className="bg-blue-100 text-blue-600 border-none">Estable</Badge>}
                              {grade.trend === 'down' && <Badge className="bg-red-100 text-red-600 border-none">Atención</Badge>}
                            </td>
                            <td className="px-8 py-6">
                              <Button variant="ghost" size="sm" className="text-school-blue font-bold">Ver Detalles</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "library" && (
            <motion.div
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="Buscar libros, guías, recursos..." className="pl-12 h-12 rounded-2xl bg-white border-none shadow-sm" />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <Button variant="outline" className="rounded-xl bg-white border-slate-200 font-bold flex-1 md:flex-none">Todos</Button>
                  <Button variant="ghost" className="rounded-xl text-slate-500 font-bold flex-1 md:flex-none">Libros</Button>
                  <Button variant="ghost" className="rounded-xl text-slate-500 font-bold flex-1 md:flex-none">Guías</Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {libraryResources.map((res, i) => (
                  <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all rounded-3xl overflow-hidden bg-white group">
                    <div className="h-40 bg-slate-100 flex items-center justify-center relative">
                      <BookOpen className="w-16 h-16 text-slate-300 group-hover:scale-110 transition-transform" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/80 text-slate-600 border-none">{res.type}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-[10px] font-black text-school-blue uppercase mb-1">{res.category}</p>
                      <h4 className="font-bold text-slate-900 mb-4 line-clamp-1">{res.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">{res.size}</span>
                        <Button size="icon" variant="ghost" className="rounded-xl text-school-blue hover:bg-school-blue/10">
                          <FileDown className="w-5 h-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden flex h-[600px]"
            >
              {/* Chat Sidebar */}
              <div className="w-80 border-r border-slate-100 flex flex-col">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-xl font-black text-slate-900">Mensajes</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  {[
                    { name: "Prof. Luis Alejos", subject: "Matemática", lastMsg: "No olvides enviar la tarea...", time: "10:30 AM", active: true },
                    { name: "Miss Elsiee Zapata", subject: "Directora", lastMsg: "Mañana tenemos reunión...", time: "Ayer", active: false },
                    { name: "Soporte Técnico", subject: "Joyista", lastMsg: "Tu ticket ha sido resuelto.", time: "Lun", active: false },
                  ].map((chat, i) => (
                    <button key={i} className={`w-full p-4 rounded-2xl flex items-start gap-3 transition-all ${chat.active ? 'bg-school-blue/5 border border-school-blue/10' : 'hover:bg-slate-50'}`}>
                      <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                        {chat.name[0]}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm font-bold text-slate-900">{chat.name}</p>
                          <span className="text-[10px] font-medium text-slate-400">{chat.time}</span>
                        </div>
                        <p className="text-[10px] font-black text-school-blue uppercase mb-1">{chat.subject}</p>
                        <p className="text-xs text-slate-500 line-clamp-1">{chat.lastMsg}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-school-blue/10 flex items-center justify-center text-school-blue font-bold text-xl">
                      L
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Prof. Luis Alejos León</h4>
                      <p className="text-xs text-green-500 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full" /> En línea
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-xl text-slate-400"><MoreVertical /></Button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30">
                  <div className="flex justify-center">
                    <Badge className="bg-slate-100 text-slate-400 border-none font-bold">Hoy</Badge>
                  </div>
                  
                  <div className="flex items-end gap-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">L</div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                      <p className="text-sm text-slate-700">Hola, ¿tienes alguna duda con el ejercicio de logaritmos que vimos hoy?</p>
                      <span className="text-[10px] text-slate-400 mt-2 block">10:30 AM</span>
                    </div>
                  </div>

                  <div className="flex items-end gap-3 max-w-[80%] ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-lg bg-school-blue flex items-center justify-center text-xs font-bold text-white">A</div>
                    <div className="bg-school-blue p-4 rounded-2xl rounded-br-none shadow-lg text-white">
                      <p className="text-sm">Sí profesor, me confundo un poco en la parte de las bases negativas.</p>
                      <span className="text-[10px] text-white/60 mt-2 block">10:32 AM</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-slate-100 flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="rounded-xl text-slate-400"><Paperclip /></Button>
                  <Input placeholder="Escribe un mensaje..." className="flex-1 h-12 rounded-2xl bg-slate-50 border-none px-6" />
                  <Button className="bg-school-blue hover:bg-school-blue/90 text-white rounded-2xl h-12 w-12 p-0">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "calendar" && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Main Calendar View */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-none shadow-xl rounded-[32px] overflow-hidden bg-white">
                  <CardHeader className="p-8 border-b border-slate-50 flex flex-row items-center justify-between bg-white">
                    <div>
                      <CardTitle className="text-2xl font-black text-slate-900">Abril 2026</CardTitle>
                      <CardDescription className="font-bold text-school-blue">Calendario Escolar</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-xl border-slate-200"><ChevronRight className="rotate-180 w-4 h-4" /></Button>
                      <Button variant="outline" size="icon" className="rounded-xl border-slate-200"><ChevronRight className="w-4 h-4" /></Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                        <div key={day} className="text-center text-[10px] font-black uppercase text-slate-400 tracking-widest py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 30 }).map((_, i) => {
                        const day = i + 1;
                        const hasEvent = calendarEvents.find(e => e.date === day.toString() && e.month === "Abr");
                        return (
                          <div 
                            key={i} 
                            className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative transition-all cursor-pointer border-2 ${
                              day === 11 ? 'border-school-blue bg-school-blue/5' : 'border-transparent hover:bg-slate-50'
                            }`}
                          >
                            <span className={`text-sm font-bold ${day === 11 ? 'text-school-blue' : 'text-slate-600'}`}>{day}</span>
                            {hasEvent && (
                              <div className={`w-1.5 h-1.5 rounded-full mt-1 ${hasEvent.color}`} />
                            )}
                            {day === 11 && (
                              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-school-blue rounded-full animate-ping" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-school-blue/5 p-8 rounded-[32px] border border-school-blue/10">
                  <h4 className="font-black text-school-blue mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Nota Importante
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Recuerda que los exámenes bimestrales inician la quincena de mayo. Asegúrate de revisar el temario en la sección de <button onClick={() => setActiveTab("library")} className="text-school-blue font-bold hover:underline">Biblioteca Digital</button>.
                  </p>
                </div>
              </div>

              {/* Upcoming Events List */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 px-2">Próximos Eventos</h3>
                <div className="space-y-4">
                  {calendarEvents.map((event, i) => (
                    <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className={`${event.color} w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-white shrink-0`}>
                          <span className="text-[10px] font-black uppercase leading-none">{event.month}</span>
                          <span className="text-xl font-black leading-none mt-1">{event.date}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-tighter mb-0.5">{event.type}</p>
                          <h4 className="font-bold text-slate-900 text-sm leading-tight">{event.title}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button className="w-full bg-slate-900 hover:bg-school-blue text-white rounded-2xl h-14 font-black shadow-lg shadow-slate-100">
                  Sincronizar con Google
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};
