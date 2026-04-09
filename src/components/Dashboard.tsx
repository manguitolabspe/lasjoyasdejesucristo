import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Separator } from '../../components/ui/separator';
import { 
  Users, 
  GraduationCap, 
  ClipboardList, 
  Settings, 
  Plus,
  Search,
  LayoutDashboard,
  FileText,
  UserPlus,
  ShieldCheck,
  Star,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  LogOut,
  X as CloseIcon,
  School,
  CheckCircle2,
  Save,
  Download,
  Bell,
  Lock,
  CreditCard,
  Coins,
  AlertCircle,
  BookOpen,
  Clock,
  User
} from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

export const Dashboard = () => {
  const { user, userData, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const courseDetails: Record<string, any> = {
    'Matemática': { teacher: 'Prof. Ricardo Mendoza', room: 'Aula 302', topics: ['Fracciones', 'Decimales', 'Geometría'], color: '#F3C59B' },
    'Comunicación': { teacher: 'Miss Elena Rojas', room: 'Aula 301', topics: ['Comprensión lectora', 'Gramática', 'Ortografía'], color: '#F9B7B2' },
    'Inglés': { teacher: 'Mr. James Wilson', room: 'Laboratorio Idiomas', topics: ['Present Continuous', 'Vocabulary', 'Listening'], color: '#B993D6' },
    'Ciencia': { teacher: 'Prof. Ana Torres', room: 'Laboratorio Ciencias', topics: ['Célula animal', 'Ecosistemas', 'Energía'], color: '#F9E0A2' },
    'Arte': { teacher: 'Miss Sofía Castro', room: 'Taller de Arte', topics: ['Teoría del color', 'Escultura', 'Dibujo'], color: '#F9B7D2' },
    'Educ. Física': { teacher: 'Prof. Carlos Ruiz', room: 'Patio Central', topics: ['Atletismo', 'Fútbol', 'Coordinación'], color: '#F3C59B' },
    'Personal Soc.': { teacher: 'Miss Carmen Silva', room: 'Aula 302', topics: ['Historia del Perú', 'Geografía', 'Civismo'], color: '#F9B7B2' },
    'Religión': { teacher: 'Hermana Lucía', room: 'Capilla / Aula', topics: ['Valores cristianos', 'Parábolas', 'Historia Sagrada'], color: '#B993D6' },
    'Taller Música': { teacher: 'Prof. Luis Huamán', room: 'Salón de Música', topics: ['Flauta dulce', 'Ritmo', 'Canto'], color: '#F3C59B' },
    'Taller Danza': { teacher: 'Miss Milagros Paz', room: 'Salón de Danza', topics: ['Marinera', 'Festejo', 'Expresión corporal'], color: '#F9B7B2' },
    'Refuerzo': { teacher: 'Docentes de Grado', room: 'Aula 302', topics: ['Nivelación académica', 'Tutoría'], color: '#B993D6' },
  };
  
  // Mock data for payments
  const [payments, setPayments] = useState<any[]>([
    { id: '1', studentId: '1', studentName: 'Mateo García', month: 'Marzo', amount: 450, status: 'paid', date: '2026-03-05' },
    { id: '2', studentId: '1', studentName: 'Mateo García', month: 'Abril', amount: 450, status: 'pending', date: '-' },
    { id: '3', studentId: '3', studentName: 'Santiago Pérez', month: 'Marzo', amount: 500, status: 'paid', date: '2026-03-05' },
    { id: '4', studentId: '3', studentName: 'Santiago Pérez', month: 'Abril', amount: 500, status: 'overdue', date: '-' },
    { id: '5', studentId: '2', studentName: 'Valentina López', month: 'Abril', amount: 450, status: 'paid', date: '2026-04-02' },
  ]);
  
  // Datos de gestión escolar
  const [students, setStudents] = useState<any[]>([
    { 
      id: '1', 
      firstName: 'Mateo', 
      lastName: 'García', 
      level: 'Primaria',
      grade: '5to Primaria', 
      section: 'A', 
      age: 10, 
      parent: 'Juan Pérez', 
      email: 'mateo@ejemplo.com', 
      attendance: '95%', 
      average: 17.5,
      parentEvaluation: 18, // Nota del padre
      subjects: [
        { name: 'Matemática', score: 18 },
        { name: 'Comunicación', score: 16 },
        { name: 'Inglés', score: 19 },
        { name: 'Ciencia', score: 17 }
      ]
    },
    { 
      id: '2', 
      firstName: 'Valentina', 
      lastName: 'López', 
      level: 'Primaria',
      grade: '3ro Primaria', 
      section: 'B', 
      age: 8, 
      parent: 'María López', 
      email: 'valentina@ejemplo.com', 
      attendance: '98%', 
      average: 18.2,
      parentEvaluation: 19,
      subjects: [
        { name: 'Matemática', score: 19 },
        { name: 'Comunicación', score: 18 },
        { name: 'Inglés', score: 17 },
        { name: 'Ciencia', score: 19 }
      ]
    },
    { 
      id: '3', 
      firstName: 'Santiago', 
      lastName: 'Pérez', 
      level: 'Secundaria',
      grade: '1ro Secundaria', 
      section: 'A', 
      age: 12, 
      parent: 'Juan Pérez', 
      email: 'santiago@ejemplo.com', 
      attendance: '92%', 
      average: 15.8,
      parentEvaluation: 15,
      subjects: [
        { name: 'Matemática', score: 14 },
        { name: 'Comunicación', score: 16 },
        { name: 'Inglés', score: 18 },
        { name: 'Ciencia', score: 15 }
      ]
    },
    { 
      id: '4', 
      firstName: 'Lucía', 
      lastName: 'Torres', 
      level: 'Primaria',
      grade: '4to Primaria', 
      section: 'C', 
      age: 9, 
      parent: 'Carlos Torres', 
      email: 'lucia@ejemplo.com', 
      attendance: '100%', 
      average: 19.0,
      parentEvaluation: 20,
      subjects: [
        { name: 'Matemática', score: 20 },
        { name: 'Comunicación', score: 19 },
        { name: 'Inglés', score: 18 },
        { name: 'Ciencia', score: 19 }
      ]
    },
    { 
      id: '5', 
      firstName: 'Joaquín', 
      lastName: 'Sánchez', 
      level: 'Inicial',
      grade: '5 años', 
      section: 'A', 
      age: 5, 
      parent: 'Ana Sánchez', 
      email: 'joaquin@ejemplo.com', 
      attendance: '88%', 
      average: 14.5,
      parentEvaluation: 12,
      subjects: [
        { name: 'Psicomotricidad', score: 15 },
        { name: 'Comunicación', score: 14 },
        { name: 'Inglés', score: 13 },
        { name: 'Ciencia', score: 16 }
      ]
    },
  ]);
  
  const [allUsers, setAllUsers] = useState<any[]>([
    { id: '1', displayName: 'Admin Principal', email: 'manguitolabsai@gmail.com', role: 'superadmin', phone: '987654321', joinDate: '2024-01-15' },
    { id: '2', displayName: 'Prof. María', email: 'maria@colegio.com', role: 'teacher', phone: '912345678', joinDate: '2024-02-10', specialty: 'Matemáticas' },
    { id: '3', displayName: 'Juan Pérez', email: 'juan@correo.com', role: 'parent', phone: '955443322', joinDate: '2024-03-05', children: ['Mateo García', 'Santiago Pérez'] },
    { id: '4', displayName: 'Prof. Ricardo', email: 'ricardo@colegio.com', role: 'teacher', phone: '999888777', joinDate: '2024-01-20', specialty: 'Ciencias' },
    { id: '5', displayName: 'María López', email: 'm.lopez@correo.com', role: 'parent', phone: '944332211', joinDate: '2024-03-12', children: ['Valentina López'] },
  ]);

  const [landingContent, setLandingContent] = useState<any>({
    heroTitle: 'Formando Líderes con Valores Cristianos',
    heroSubtitle: 'Excelencia académica y formación integral para el futuro de tus hijos.',
    motto: 'Educación con Amor y Disciplina',
    logoUrl: '/logo.webp'
  });

  const handleUpdateContent = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Contenido actualizado correctamente");
  };

  if (!user) return null;

  const sidebarItems = [
    { id: 'overview', label: 'Resumen', icon: <LayoutDashboard className="w-5 h-5" />, roles: ['superadmin', 'admin', 'assistant', 'teacher', 'parent'] },
    { id: 'users', label: 'Usuarios', icon: <UserPlus className="w-5 h-5" />, roles: ['superadmin', 'admin', 'assistant'] },
    { id: 'students', label: 'Alumnos', icon: <Users className="w-5 h-5" />, roles: ['superadmin', 'admin', 'assistant', 'teacher'] },
    { id: 'grades', label: 'Notas', icon: <ClipboardList className="w-5 h-5" />, roles: ['superadmin', 'admin', 'teacher', 'parent'] },
    { id: 'payments', label: 'Pagos', icon: <CreditCard className="w-5 h-5" />, roles: ['superadmin', 'admin', 'assistant', 'parent'] },
    { id: 'attendance', label: 'Asistencia', icon: <CheckCircle2 className="w-5 h-5" />, roles: ['superadmin', 'admin', 'teacher'] },
    { id: 'schedule', label: 'Horario', icon: <Calendar className="w-5 h-5" />, roles: ['superadmin', 'admin', 'teacher', 'parent'] },
    { id: 'cms', label: 'Gestión Web', icon: <FileText className="w-5 h-5" />, roles: ['superadmin', 'admin'] },
    { id: 'settings', label: 'Configuración', icon: <Settings className="w-5 h-5" />, roles: ['superadmin', 'admin'] },
  ];

  const filteredSidebar = sidebarItems.filter(item => item.roles.includes(userData?.role));

  return (
    <div className="flex flex-col lg:flex-row min-h-[700px] bg-white rounded-sm overflow-hidden shadow-2xl border border-slate-200">
      {/* Sidebar */}
      <div className="w-full lg:w-72 bg-slate-900 text-slate-300 p-6 lg:p-8 flex flex-col gap-6 lg:gap-10">
        <div className="flex items-center gap-4 px-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-school-blue rounded-sm flex items-center justify-center text-white shadow-lg shadow-school-blue/40">
            <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <div>
            <p className="font-bold text-white leading-tight text-sm lg:text-base">{userData?.displayName || 'Usuario'}</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mt-1">
              {userData?.role === 'superadmin' || userData?.role === 'admin' ? 'Administrador' : 
               userData?.role === 'teacher' ? 'Docente' : 
               userData?.role === 'parent' ? 'Padre de Familia' : 
               userData?.role === 'assistant' ? 'Asistente' : userData?.role}
            </p>
          </div>
        </div>

        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
          {filteredSidebar.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 lg:gap-4 px-4 lg:px-5 py-3 lg:py-4 rounded-sm font-bold text-xs lg:text-sm transition-all group whitespace-nowrap ${
                activeTab === item.id 
                ? 'bg-school-blue text-white shadow-xl shadow-school-blue/30' 
                : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={`${activeTab === item.id ? 'text-white' : 'text-slate-400 group-hover:text-school-blue'} transition-colors`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
          <button
            onClick={logout}
            className="lg:hidden flex items-center gap-3 px-4 py-3 rounded-sm font-bold text-xs text-slate-400 hover:bg-school-red/10 hover:text-school-red transition-all group whitespace-nowrap"
          >
            <LogOut className="w-5 h-5 group-hover:text-school-red" />
            Salir
          </button>
        </nav>

        <div className="hidden lg:block mt-auto pt-8 border-t border-white/5">
          <Button 
            variant="ghost" 
            onClick={logout}
            className="w-full justify-start gap-4 px-5 py-4 rounded-sm font-bold text-sm text-slate-400 hover:bg-school-red/10 hover:text-school-red transition-all group mb-6"
          >
            <LogOut className="w-5 h-5 group-hover:text-school-red" />
            Cerrar Sesión
          </Button>
          <div className="bg-white/5 p-4 rounded-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Soporte Técnico</p>
            <p className="text-xs text-slate-400">¿Necesitas ayuda? Contacta con el SuperAdmin.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12 overflow-y-auto bg-slate-50/50">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 lg:mb-12 gap-4">
          <div>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-slate-900">
              {sidebarItems.find(i => i.id === activeTab)?.label}
            </h2>
            <p className="text-sm lg:text-base text-slate-500 mt-1">Gestiona la información del colegio con eficiencia.</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input placeholder="Buscar..." className="pl-11 rounded-sm border-slate-200 bg-white w-full md:w-64 h-10 lg:h-12" />
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Common Stats */}
              <Card className="rounded-sm border-none shadow-xl bg-white p-2">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-school-blue/10 rounded-sm flex items-center justify-center text-school-blue">
                      <Users className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <Badge className="bg-school-green/10 text-school-green border-none">↑ 12%</Badge>
                  </div>
                  <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest mb-1">
                    {userData?.role === 'parent' ? 'Hijos Registrados' : 'Total Alumnos'}
                  </p>
                  <p className="text-3xl lg:text-5xl font-black text-slate-900">
                    {userData?.role === 'parent' ? '2' : students.length}
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-sm border-none shadow-xl bg-white p-2">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-school-red/10 rounded-sm flex items-center justify-center text-school-red">
                      <ClipboardList className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <Badge className="bg-school-yellow/10 text-school-yellow border-none">Hoy</Badge>
                  </div>
                  <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest mb-1">Asistencia</p>
                  <p className="text-3xl lg:text-5xl font-black text-slate-900">98%</p>
                </CardContent>
              </Card>
              <Card className="rounded-sm border-none shadow-xl bg-white p-2 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-school-yellow/10 rounded-sm flex items-center justify-center text-school-yellow">
                      <Star className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <Badge className="bg-school-blue/10 text-school-blue border-none">Promedio</Badge>
                  </div>
                  <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest mb-1">Rendimiento</p>
                  <p className="text-3xl lg:text-5xl font-black text-slate-900">16.5</p>
                </CardContent>
              </Card>
            </div>

            {/* Role Specific Section */}
            {userData?.role === 'parent' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="rounded-sm border-none shadow-xl bg-white overflow-hidden">
                  <CardHeader className="bg-school-blue text-white p-6">
                    <CardTitle className="flex items-center gap-3">
                      <Users className="w-6 h-6" /> Mis Hijos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {students.filter(s => s.parent === 'Juan Pérez').map(child => (
                      <div key={child.id} className="p-5 bg-slate-50 rounded-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-school-blue/10 rounded-sm flex items-center justify-center text-school-blue font-black">
                              {child.firstName[0]}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{child.firstName} {child.lastName}</p>
                              <p className="text-xs text-slate-500">{child.grade} - {child.section}</p>
                            </div>
                          </div>
                          <Badge className="bg-school-green/10 text-school-green border-none">Promedio: {child.average}</Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-white p-3 rounded-sm border border-slate-100">
                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Nota del Padre</p>
                            <div className="flex items-center gap-2">
                              <p className="text-lg font-black text-school-blue">{child.parentEvaluation}</p>
                              <Badge className="text-[8px] bg-school-blue/5 text-school-blue border-none">Participación</Badge>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-sm border border-slate-100">
                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Impacto Acad.</p>
                            <p className="text-lg font-black text-school-green">+{child.parentEvaluation >= 15 ? '1.5' : '0.5'}</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => setSelectedStudent(child)} className="flex-1 rounded-sm border-slate-200 text-slate-600 font-bold">Ver Notas</Button>
                          <Button variant="outline" size="sm" className="flex-1 rounded-sm border-slate-200 text-slate-600 font-bold">Asistencia</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card className="rounded-sm border-none shadow-xl bg-white overflow-hidden">
                    <CardHeader className="bg-school-yellow text-slate-900 p-6">
                      <CardTitle className="flex items-center gap-3">
                        <Calendar className="w-6 h-6" /> Próximos Eventos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-sm">
                        <div className="bg-school-yellow/20 p-3 rounded-sm text-center min-w-[60px]">
                          <p className="text-xs font-bold text-slate-500">ABR</p>
                          <p className="text-xl font-black text-slate-900">15</p>
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">Reunión de Padres</p>
                          <p className="text-xs text-slate-500">Auditorio Principal - 6:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-sm">
                        <div className="bg-school-blue/10 p-3 rounded-sm text-center min-w-[60px]">
                          <p className="text-xs font-bold text-slate-500">MAY</p>
                          <p className="text-xl font-black text-slate-900">10</p>
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">Día de la Madre</p>
                          <p className="text-xs text-slate-500">Patio Central - 9:00 AM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="rounded-sm border-none shadow-xl bg-white overflow-hidden">
                    <CardHeader className="bg-school-red text-white p-6">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <CreditCard className="w-5 h-5" /> Estado de Pensiones
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-sm border border-slate-100">
                        <div>
                          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mes Actual (Abril)</p>
                          <p className="font-bold text-slate-900">Santiago Pérez</p>
                        </div>
                        <Badge className="bg-school-red/10 text-school-red border-none font-black text-[10px]">ATRASADO</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-sm border border-slate-100">
                        <div>
                          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mes Actual (Abril)</p>
                          <p className="font-bold text-slate-900">Mateo García</p>
                        </div>
                        <Badge className="bg-school-yellow/10 text-school-yellow border-none font-black text-[10px]">PENDIENTE</Badge>
                      </div>
                      <Button variant="outline" className="w-full border-school-blue text-school-blue hover:bg-school-blue/5 rounded-sm font-bold" onClick={() => setActiveTab('payments')}>
                        Ver Detalle de Pagos
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="rounded-sm border-none shadow-xl bg-slate-900 text-white overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-school-blue rounded-sm flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Tu Evaluación</p>
                          <p className="text-xl font-bold">Padre Comprometido</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mb-6">Tu participación en las actividades escolares influye positivamente en el puntaje de "Joy Points" de tus hijos. Un padre comprometido suma hasta 2.0 puntos al promedio final.</p>
                      <div className="p-4 bg-white/5 rounded-sm border border-white/10 mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black uppercase text-slate-500">Nivel de Impacto</span>
                          <span className="text-xs font-bold text-school-green">Alto</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-[85%] h-full bg-school-green" />
                        </div>
                      </div>
                      <Button className="w-full bg-school-blue hover:bg-school-blue/90 rounded-sm font-bold">Ver Mi Historial</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {userData?.role === 'teacher' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="rounded-sm border-none shadow-xl bg-white overflow-hidden">
                    <CardHeader className="bg-school-green text-white p-6">
                      <CardTitle className="flex items-center gap-3">
                        <GraduationCap className="w-6 h-6" /> Mis Clases
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="p-4 bg-slate-50 rounded-sm flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-900">Matemáticas - 5to Primaria A</p>
                          <p className="text-xs text-slate-500">25 Alumnos | Lunes y Miércoles</p>
                        </div>
                        <Badge className="bg-school-green/10 text-school-green border-none">Activa</Badge>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-sm flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-900">Raz. Matemático - 3ro Primaria B</p>
                          <p className="text-xs text-slate-500">22 Alumnos | Martes y Jueves</p>
                        </div>
                        <Badge className="bg-school-green/10 text-school-green border-none">Activa</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="rounded-sm border-none shadow-xl bg-white overflow-hidden">
                  <CardHeader className="bg-school-blue text-white p-6">
                    <CardTitle className="flex items-center gap-3">
                      <ClipboardList className="w-6 h-6" /> Tareas Pendientes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-school-red" />
                      <p className="text-sm font-medium text-slate-700">Calificar Examen de 5to A</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-school-yellow" />
                      <p className="text-sm font-medium text-slate-700">Subir asistencia de hoy</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-8">
            <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden">
              <div className="p-6 lg:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="font-bold text-lg lg:text-xl">Listado de Usuarios</h3>
                <Button 
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="bg-school-blue hover:bg-school-blue/90 rounded-sm w-full sm:w-auto"
                >
                  <Plus className="w-4 h-4 mr-2" /> Registrar Usuario
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-[10px] lg:text-xs uppercase tracking-widest font-black">
                    <tr>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Nombre</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Email</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Rol</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {allUsers.map(u => (
                      <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 lg:px-8 py-4 lg:py-6 font-bold text-slate-900 text-sm lg:text-base">{u.displayName || 'Sin nombre'}</td>
                        <td className="px-6 lg:px-8 py-4 lg:py-6 text-slate-500 text-sm lg:text-base">{u.email}</td>
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <Badge variant="outline" className={`capitalize font-bold text-[10px] lg:text-xs ${
                            u.role === 'superadmin' ? 'border-school-red text-school-red' : 
                            u.role === 'teacher' ? 'border-school-blue text-school-blue' : 
                            'border-school-green text-school-green'
                          }`}>
                            {u.role}
                          </Badge>
                        </td>
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-school-blue hover:bg-school-blue/10 rounded-sm"
                            onClick={() => setSelectedUser(u)}
                          >
                            <Eye className="w-4 h-4 mr-2" /> Ver Detalle
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex gap-2">
                <select className="h-12 rounded-sm border border-slate-200 px-4 text-xs font-bold bg-white flex-1">
                  <option>Todos los Niveles</option>
                  <option>Inicial</option>
                  <option>Primaria</option>
                  <option>Secundaria</option>
                </select>
                <select className="h-12 rounded-sm border border-slate-200 px-4 text-xs font-bold bg-white flex-1">
                  <option>Todos los Grados</option>
                  <option>1ro</option>
                  <option>2do</option>
                  <option>3ro</option>
                  <option>4to</option>
                  <option>5to</option>
                </select>
              </div>
              <Button 
                onClick={() => setIsStudentModalOpen(true)}
                className="bg-school-blue hover:bg-school-blue/90 rounded-sm h-12 px-8 font-bold shadow-lg shadow-school-blue/20"
              >
                <Plus className="w-4 h-4 mr-2" /> Nuevo Alumno
              </Button>
            </div>

            <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-[10px] lg:text-xs uppercase tracking-widest font-black">
                    <tr>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Alumno</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Nivel / Grado</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Promedio</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Nota Padre</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {students.map(s => (
                      <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <p className="font-bold text-slate-900 text-sm lg:text-base">{s.firstName} {s.lastName}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Padre: {s.parent}</p>
                        </td>
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-slate-100 text-slate-600 border-none text-[10px] lg:text-xs">{s.level}</Badge>
                            <Badge className="bg-school-blue/10 text-school-blue border-none text-[10px] lg:text-xs">{s.grade}</Badge>
                          </div>
                        </td>
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <span className={`font-black text-sm lg:text-base ${s.average >= 16 ? 'text-school-green' : 'text-school-yellow'}`}>
                            {s.average}
                          </span>
                        </td>
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <Badge className="bg-school-yellow/10 text-school-yellow border-none font-black">{s.parentEvaluation}</Badge>
                        </td>
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-school-blue hover:bg-school-blue/10 rounded-sm"
                            onClick={() => setSelectedStudent(s)}
                          >
                            <Eye className="w-4 h-4 mr-2" /> Perfil
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-8">
            {/* Stats Cards - Conditional based on role */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userData?.role !== 'parent' ? (
                <>
                  <Card className="rounded-sm border-none shadow-xl bg-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-school-green/10 rounded-sm flex items-center justify-center text-school-green">
                        <Coins className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total Recaudado</p>
                        <p className="text-2xl font-black text-slate-900">S/ 12,450</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="rounded-sm border-none shadow-xl bg-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-school-yellow/10 rounded-sm flex items-center justify-center text-school-yellow">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Pendientes</p>
                        <p className="text-2xl font-black text-slate-900">15 Recibos</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="rounded-sm border-none shadow-xl bg-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-school-red/10 rounded-sm flex items-center justify-center text-school-red">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Morosidad</p>
                        <p className="text-2xl font-black text-slate-900">4.2%</p>
                      </div>
                    </div>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="rounded-sm border-none shadow-xl bg-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-school-green/10 rounded-sm flex items-center justify-center text-school-green">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total Pagado</p>
                        <p className="text-2xl font-black text-slate-900">S/ 1,400</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="rounded-sm border-none shadow-xl bg-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-school-red/10 rounded-sm flex items-center justify-center text-school-red">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Pendiente de Pago</p>
                        <p className="text-2xl font-black text-slate-900">S/ 450</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="rounded-sm border-none shadow-xl bg-slate-900 text-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Próximo Vencimiento</p>
                        <p className="text-xl font-black">05 de Mayo</p>
                      </div>
                    </div>
                  </Card>
                </>
              )}
            </div>

            <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden">
              <div className="p-6 lg:p-8 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-lg lg:text-xl">
                  {userData?.role === 'parent' ? 'Mi Historial de Pagos' : 'Registro de Pensiones'}
                </h3>
                {userData?.role !== 'parent' && (
                  <Button className="bg-school-blue hover:bg-school-blue/90 rounded-sm">
                    <Plus className="w-4 h-4 mr-2" /> Generar Recibo
                  </Button>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-[10px] lg:text-xs uppercase tracking-widest font-black">
                    <tr>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Alumno</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Mes</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Monto</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Estado</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Fecha Pago</th>
                      <th className="px-6 lg:px-8 py-4 lg:py-5">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {payments
                      .filter(p => userData?.role !== 'parent' || p.studentName === 'Mateo García' || p.studentName === 'Santiago Pérez')
                      .map(p => (
                        <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 lg:px-8 py-4 lg:py-6 font-bold text-slate-900">{p.studentName}</td>
                          <td className="px-6 lg:px-8 py-4 lg:py-6 text-slate-600 font-medium">{p.month}</td>
                          <td className="px-6 lg:px-8 py-4 lg:py-6 font-black text-slate-900">S/ {p.amount}</td>
                          <td className="px-6 lg:px-8 py-4 lg:py-6">
                            <Badge className={`border-none font-black text-[10px] uppercase tracking-widest ${
                              p.status === 'paid' ? 'bg-school-green/10 text-school-green' : 
                              p.status === 'overdue' ? 'bg-school-red/10 text-school-red' : 
                              'bg-school-yellow/10 text-school-yellow'
                            }`}>
                              {p.status === 'paid' ? 'Pagado' : p.status === 'overdue' ? 'Atrasado' : 'Pendiente'}
                            </Badge>
                          </td>
                          <td className="px-6 lg:px-8 py-4 lg:py-6 text-slate-500 text-sm">{p.date}</td>
                          <td className="px-6 lg:px-8 py-4 lg:py-6">
                            <Button variant="ghost" size="sm" className="text-school-blue hover:bg-school-blue/10" onClick={() => toast.success("Recibo descargado")}>
                              <Download className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-6 lg:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="font-bold text-lg lg:text-xl">Control de Asistencia</h3>
              <div className="flex gap-2 w-full sm:w-auto">
                <select className="h-10 rounded-sm border border-slate-200 px-4 text-xs font-bold bg-slate-50">
                  <option>5to Primaria A</option>
                  <option>3ro Primaria B</option>
                </select>
                <Button className="bg-school-green hover:bg-school-green/90 rounded-sm flex-1 sm:flex-none" onClick={() => toast.success("Asistencia guardada")}>
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Guardar Todo
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[10px] lg:text-xs uppercase tracking-widest font-black">
                  <tr>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Alumno</th>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Estado</th>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Justificación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {students.map(s => (
                    <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 lg:px-8 py-4 lg:py-6 font-bold text-slate-900">{s.firstName} {s.lastName}</td>
                      <td className="px-6 lg:px-8 py-4 lg:py-6">
                        <div className="flex gap-2">
                          <Badge className="bg-school-green text-white border-none cursor-pointer">P</Badge>
                          <Badge className="bg-slate-100 text-slate-400 border-none cursor-pointer">T</Badge>
                          <Badge className="bg-slate-100 text-slate-400 border-none cursor-pointer">F</Badge>
                        </div>
                      </td>
                      <td className="px-6 lg:px-8 py-4 lg:py-6">
                        <Input placeholder="Opcional..." className="h-8 rounded-sm border-slate-200 text-xs" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="font-black text-3xl text-slate-800 tracking-tight">Horario Escolar 2026</h3>
              <select className="h-10 rounded-sm border border-slate-200 px-4 text-xs font-bold bg-white shadow-sm">
                <option>5to Primaria A</option>
                <option>3ro Primaria B</option>
              </select>
            </div>
            
            <div className="bg-white rounded-sm shadow-xl border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 bg-slate-50 border-b border-r border-slate-100 w-24"></th>
                      <th className="p-4 bg-[#F3C59B] text-white font-black uppercase tracking-widest text-xs border-b border-r border-white/20">Lunes</th>
                      <th className="p-4 bg-[#F9B7B2] text-white font-black uppercase tracking-widest text-xs border-b border-r border-white/20">Martes</th>
                      <th className="p-4 bg-[#B993D6] text-white font-black uppercase tracking-widest text-xs border-b border-r border-white/20">Miércoles</th>
                      <th className="p-4 bg-[#F9E0A2] text-white font-black uppercase tracking-widest text-xs border-b border-r border-white/20">Jueves</th>
                      <th className="p-4 bg-[#F9B7D2] text-white font-black uppercase tracking-widest text-xs border-b border-white/20">Viernes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: '08:00', subjects: ['Matemática', 'Comunicación', 'Inglés', 'Ciencia', 'Arte'] },
                      { time: '09:00', subjects: ['Matemática', 'Comunicación', 'Inglés', 'Ciencia', 'Arte'] },
                      { time: '10:00', subjects: ['Educ. Física', 'Personal Soc.', 'Religión', 'Matemática', 'Comunicación'] },
                      { time: '11:00', subjects: ['RECREO', 'RECREO', 'RECREO', 'RECREO', 'RECREO'], isBreak: true },
                      { time: '12:00', subjects: ['Personal Soc.', 'Ciencia', 'Matemática', 'Comunicación', 'Inglés'] },
                      { time: '13:00', subjects: ['Taller Música', 'Taller Danza', 'Refuerzo', 'Refuerzo', 'Salida'] },
                      { time: '14:00', subjects: ['-', '-', '-', '-', '-'] },
                      { time: '15:00', subjects: ['-', '-', '-', '-', '-'] },
                    ].map((row, i) => (
                      <tr key={i} className={row.isBreak ? 'bg-slate-50/50' : ''}>
                        <td className="p-4 border-b border-r border-slate-100 text-center">
                          <span className="text-xs font-black text-slate-400">{row.time}</span>
                        </td>
                        {row.subjects.map((sub, j) => (
                          <td key={j} className={`p-2 border-b border-r border-slate-100 last:border-r-0 ${row.isBreak ? 'bg-slate-50' : ''}`}>
                            {sub !== '-' && (
                              <div 
                                onClick={() => {
                                  if (!row.isBreak && sub !== 'Salida') {
                                    setSelectedCourse({ name: sub, time: row.time, ...courseDetails[sub] });
                                  }
                                }}
                                className={`
                                p-3 rounded-sm text-center min-h-[60px] flex items-center justify-center transition-all hover:scale-[1.05] hover:shadow-md cursor-pointer
                                ${row.isBreak ? 'bg-white border-2 border-dashed border-slate-200 text-slate-300 font-black tracking-widest text-[10px] cursor-default' : 
                                  j === 0 ? 'bg-[#F3C59B]/10 border border-[#F3C59B]/30 text-[#F3C59B] font-bold text-xs' :
                                  j === 1 ? 'bg-[#F9B7B2]/10 border border-[#F9B7B2]/30 text-[#F9B7B2] font-bold text-xs' :
                                  j === 2 ? 'bg-[#B993D6]/10 border border-[#B993D6]/30 text-[#B993D6] font-bold text-xs' :
                                  j === 3 ? 'bg-[#F9E0A2]/10 border border-[#F9E0A2]/30 text-[#F9E0A2] font-bold text-xs' :
                                  'bg-[#F9B7D2]/10 border border-[#F9B7D2]/30 text-[#F9B7D2] font-bold text-xs'
                                }
                              `}>
                                {sub}
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-6 lg:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="font-bold text-lg lg:text-xl">Registro de Calificaciones</h3>
              <div className="flex gap-2 w-full sm:w-auto">
                <select className="h-10 rounded-sm border border-slate-200 px-4 text-xs font-bold bg-slate-50">
                  <option>5to Primaria A</option>
                  <option>3ro Primaria B</option>
                  <option>1ro Secundaria A</option>
                </select>
                {userData?.role !== 'parent' && (
                  <Button 
                    onClick={() => toast.success("Notas subidas al sistema correctamente")}
                    className="bg-school-blue hover:bg-school-blue/90 rounded-sm flex-1 sm:flex-none"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Subir Notas
                  </Button>
                )}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-[10px] lg:text-xs uppercase tracking-widest font-black">
                  <tr>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Alumno</th>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Matemática</th>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Comunicación</th>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Inglés</th>
                    <th className="px-6 lg:px-8 py-4 lg:py-5">Ciencia</th>
                    {userData?.role !== 'parent' && <th className="px-6 lg:px-8 py-4 lg:py-5">Acciones</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {students
                    .filter(s => userData?.role !== 'parent' || s.parent === 'Juan Pérez')
                    .map(s => (
                    <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 lg:px-8 py-4 lg:py-6 font-bold text-slate-900">{s.firstName} {s.lastName}</td>
                      <td className="px-6 lg:px-8 py-4 lg:py-6">
                        {userData?.role === 'parent' ? (
                          <Badge className="bg-school-blue/10 text-school-blue border-none font-black">18</Badge>
                        ) : (
                          <Input defaultValue="18" className="w-12 h-8 text-center font-bold rounded-sm border-slate-200" />
                        )}
                      </td>
                      <td className="px-6 lg:px-8 py-4 lg:py-6">
                        {userData?.role === 'parent' ? (
                          <Badge className="bg-school-blue/10 text-school-blue border-none font-black">16</Badge>
                        ) : (
                          <Input defaultValue="16" className="w-12 h-8 text-center font-bold rounded-sm border-slate-200" />
                        )}
                      </td>
                      <td className="px-6 lg:px-8 py-4 lg:py-6">
                        {userData?.role === 'parent' ? (
                          <Badge className="bg-school-blue/10 text-school-blue border-none font-black">19</Badge>
                        ) : (
                          <Input defaultValue="19" className="w-12 h-8 text-center font-bold rounded-sm border-slate-200" />
                        )}
                      </td>
                      <td className="px-6 lg:px-8 py-4 lg:py-6">
                        {userData?.role === 'parent' ? (
                          <Badge className="bg-school-blue/10 text-school-blue border-none font-black">17</Badge>
                        ) : (
                          <Input defaultValue="17" className="w-12 h-8 text-center font-bold rounded-sm border-slate-200" />
                        )}
                      </td>
                      {userData?.role !== 'parent' && (
                        <td className="px-6 lg:px-8 py-4 lg:py-6">
                          <Button variant="ghost" size="sm" className="text-school-green hover:bg-school-green/10" onClick={() => toast.success("Nota guardada")}>
                            <CheckCircle2 className="w-4 h-4" />
                          </Button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 lg:p-8 border-t border-slate-100 bg-slate-50/30">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-4">Evaluación de Compromiso (Padres)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {students
                  .filter(s => userData?.role !== 'parent' || s.parent === 'Juan Pérez')
                  .map(s => (
                  <div key={`parent-${s.id}`} className="bg-white p-4 rounded-sm border border-slate-100 flex items-center justify-between shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{s.parent}</p>
                      <p className="text-[10px] text-slate-400">Apoderado de {s.firstName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {userData?.role === 'parent' ? (
                        <Badge className="bg-school-yellow/10 text-school-yellow border-none font-black">{s.parentEvaluation}</Badge>
                      ) : (
                        <>
                          <Input defaultValue={s.parentEvaluation} className="w-10 h-8 text-center font-bold rounded-sm border-slate-200" />
                          <Button variant="ghost" size="sm" className="text-school-yellow" onClick={() => toast.success("Evaluación de padre actualizada")}>
                            <Star className="w-4 h-4 fill-school-yellow" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cms' && (
          <div className="max-w-4xl space-y-8">
            <Card className="rounded-sm border-none shadow-xl bg-white">
              <CardHeader className="p-8 border-b">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <FileText className="w-6 h-6 text-school-blue" /> Gestión de Contenido Web
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <form onSubmit={handleUpdateContent} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-bold">Título Principal (Hero)</Label>
                      <Input 
                        value={landingContent.heroTitle} 
                        onChange={(e) => setLandingContent({...landingContent, heroTitle: e.target.value})}
                        className="rounded-sm h-12" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Lema del Colegio</Label>
                      <Input 
                        value={landingContent.motto} 
                        onChange={(e) => setLandingContent({...landingContent, motto: e.target.value})}
                        className="rounded-sm h-12" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Subtítulo Principal</Label>
                    <textarea 
                      value={landingContent.heroSubtitle} 
                      onChange={(e) => setLandingContent({...landingContent, heroSubtitle: e.target.value})}
                      className="w-full min-h-[100px] p-4 rounded-sm border border-slate-200 focus:ring-2 focus:ring-school-blue outline-none text-sm"
                    />
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100">
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Identidad Visual</h4>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-32 h-32 bg-slate-50 rounded-sm border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-2 overflow-hidden">
                        {landingContent.logoUrl ? (
                          <img src={landingContent.logoUrl} alt="Preview" className="w-full h-full object-contain p-2" />
                        ) : (
                          <>
                            <Plus className="w-6 h-6" />
                            <span className="text-[10px] font-bold">LOGO</span>
                          </>
                        )}
                      </div>
                      <div className="flex-1 space-y-4 w-full">
                        <div className="space-y-2">
                          <Label className="font-bold text-sm">URL del Logo del Colegio</Label>
                          <div className="flex gap-2">
                            <Input 
                              placeholder="https://ejemplo.com/logo.png" 
                              value={landingContent.logoUrl}
                              onChange={(e) => setLandingContent({...landingContent, logoUrl: e.target.value})}
                              className="rounded-sm h-12 flex-1" 
                            />
                            <Button type="button" variant="outline" className="h-12 rounded-sm" onClick={() => toast.info("Simulando carga de archivo...")}>
                              Subir
                            </Button>
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium italic">Se recomienda un archivo PNG transparente de 512x512px.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-school-blue hover:bg-school-blue/90 h-14 rounded-sm text-lg font-bold shadow-lg shadow-school-blue/20">
                    Guardar Cambios en la Web
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-4xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="rounded-sm border-none shadow-xl bg-white">
                <CardHeader className="p-8 border-b">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <School className="w-6 h-6 text-school-blue" /> Datos del Colegio
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <Label className="font-bold">Nombre de la Institución</Label>
                    <Input defaultValue="I.E.P. Las Joyas de Jesucristo" className="rounded-sm h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Dirección</Label>
                    <Input defaultValue="Talara Alta, Piura - Perú" className="rounded-sm h-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-bold">Año Académico</Label>
                      <Input defaultValue="2026" className="rounded-sm h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Teléfono</Label>
                      <Input defaultValue="+51 987 654 321" className="rounded-sm h-12" />
                    </div>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 h-12 rounded-sm font-bold" onClick={() => toast.success("Configuración guardada")}>
                    Actualizar Datos
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-sm border-none shadow-xl bg-white">
                <CardHeader className="p-8 border-b">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-school-red" /> Seguridad y Accesos
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-sm">
                    <div>
                      <p className="font-bold text-slate-900">Registro Abierto</p>
                      <p className="text-xs text-slate-500">Permitir nuevos registros de padres</p>
                    </div>
                    <div className="w-12 h-6 bg-school-green rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-sm">
                    <div>
                      <p className="font-bold text-slate-900">Mantenimiento</p>
                      <p className="text-xs text-slate-500">Activar modo mantenimiento</p>
                    </div>
                    <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full border-school-red text-school-red hover:bg-school-red/5 h-12 rounded-sm font-bold">
                    Descargar Backup de Datos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
      {/* Modals for Management Interactivity */}
      
      {/* Student Detail Modal */}
      <Dialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
        <DialogContent className="sm:max-w-[700px] rounded-sm p-0 overflow-hidden border-none shadow-2xl">
          <div className="bg-school-blue p-8 text-white relative">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-sm flex items-center justify-center text-white backdrop-blur-md border border-white/30">
                <GraduationCap className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-black">{selectedStudent?.firstName} {selectedStudent?.lastName}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-white/20 text-white border-none uppercase text-[10px] font-black tracking-widest">{selectedStudent?.level}</Badge>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-[10px]">{selectedStudent?.grade} - Sección {selectedStudent?.section}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white space-y-8">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Promedio</p>
                <p className="text-xl font-black text-school-blue">{selectedStudent?.average}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Asistencia</p>
                <p className="text-xl font-black text-school-green">{selectedStudent?.attendance}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-sm border border-slate-100">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Nota Padre</p>
                <p className="text-xl font-black text-school-yellow">{selectedStudent?.parentEvaluation}</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-sm border border-slate-800 flex flex-col justify-center items-center">
                <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mb-1">Puntos Joy</p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-school-yellow fill-school-yellow" />
                  <p className="text-xl font-black text-white">{(selectedStudent?.average + (selectedStudent?.parentEvaluation / 10)).toFixed(1)}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-school-red/5 border border-school-red/10 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-school-red/10 rounded-sm flex items-center justify-center text-school-red">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado de Pensión</p>
                  <p className="text-sm font-bold text-slate-900">Mes de Abril: Pendiente de Pago</p>
                </div>
              </div>
              <Button size="sm" className="bg-school-red hover:bg-school-red/90 rounded-sm text-xs font-bold" onClick={() => setActiveTab('payments')}>
                Pagar Ahora
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Calificaciones por Área</h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedStudent?.subjects?.map((sub: any) => (
                    <div key={sub.name} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-sm shadow-sm">
                      <span className="font-bold text-slate-700">{sub.name}</span>
                      <Badge className={`${sub.score >= 16 ? 'bg-school-green/10 text-school-green' : 'bg-school-yellow/10 text-school-yellow'} border-none font-black text-sm`}>
                        {sub.score}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Méritos y Observaciones</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-school-green/5 border border-school-green/10 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-3 h-3 text-school-green" />
                      <p className="text-[10px] font-black text-school-green uppercase">Mérito Académico</p>
                    </div>
                    <p className="text-xs text-slate-600">Excelente desempeño en el proyecto de ciencias.</p>
                  </div>
                  <div className="p-4 bg-school-yellow/5 border border-school-yellow/10 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Bell className="w-3 h-3 text-school-yellow" />
                      <p className="text-[10px] font-black text-school-yellow uppercase">Observación</p>
                    </div>
                    <p className="text-xs text-slate-600">Se recomienda reforzar el hábito de lectura en casa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="w-4 h-4 text-school-blue" />
                  <span className="text-xs font-bold">{selectedStudent?.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Users className="w-4 h-4 text-school-blue" />
                  <span className="text-xs font-bold">Padre: {selectedStudent?.parent}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar className="w-4 h-4 text-school-blue" />
                  <span className="text-xs font-bold">Edad: {selectedStudent?.age} años</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="w-4 h-4 text-school-blue" />
                  <span className="text-xs font-bold">Talara Alta, Piura</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* User Detail Modal */}
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="sm:max-w-[500px] rounded-sm p-0 overflow-hidden border-none shadow-2xl">
          <div className="bg-slate-900 p-8 text-white relative">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-school-blue rounded-sm flex items-center justify-center text-white shadow-lg shadow-school-blue/40">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-black">{selectedUser?.displayName}</h3>
                <Badge className="bg-school-blue/20 text-school-blue border-none uppercase text-[10px] font-black tracking-widest mt-1">
                  {selectedUser?.role === 'superadmin' || selectedUser?.role === 'admin' ? 'Administrador' : 
                   selectedUser?.role === 'teacher' ? 'Docente' : 
                   selectedUser?.role === 'parent' ? 'Padre de Familia' : 
                   selectedUser?.role === 'assistant' ? 'Asistente' : selectedUser?.role}
                </Badge>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Correo Electrónico</p>
                <p className="font-bold text-slate-700">{selectedUser?.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Teléfono</p>
                <p className="font-bold text-slate-700">{selectedUser?.phone}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Fecha de Ingreso</p>
                <p className="font-bold text-slate-700">{selectedUser?.joinDate}</p>
              </div>
              {selectedUser?.specialty && (
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Especialidad</p>
                  <p className="font-bold text-school-blue">{selectedUser?.specialty}</p>
                </div>
              )}
            </div>
            {selectedUser?.children && (
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Hijos Registrados</p>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.children.map((child: string) => (
                    <Badge key={child} className="bg-slate-100 text-slate-600 border-none font-bold">{child}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Course Detail Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-[450px] rounded-sm p-0 overflow-hidden border-none shadow-2xl">
          <div className="p-8 text-white relative" style={{ backgroundColor: selectedCourse?.color || '#003366' }}>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-sm flex items-center justify-center text-white backdrop-blur-md border border-white/30">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black">{selectedCourse?.name}</h3>
                <div className="flex items-center gap-2 mt-1 opacity-90">
                  <Clock className="w-3 h-3" />
                  <p className="text-[10px] font-black uppercase tracking-widest">{selectedCourse?.time} - 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-white space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center text-slate-500 shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Docente a Cargo</p>
                  <p className="font-bold text-slate-800 text-lg">{selectedCourse?.teacher}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Especialista en Educación Primaria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center text-slate-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Ubicación</p>
                  <p className="font-bold text-slate-800">{selectedCourse?.room}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Temas de la Semana</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse?.topics?.map((topic: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-600 border-none px-3 py-1 rounded-sm font-bold text-[10px]">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Button 
                onClick={() => {
                  toast.info(`Enviando mensaje al ${selectedCourse?.teacher}...`);
                  setSelectedCourse(null);
                }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 rounded-sm font-bold flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contactar Docente
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Register User Modal */}
      <Dialog open={isRegisterModalOpen} onOpenChange={setIsRegisterModalOpen}>
        <DialogContent className="sm:max-w-[450px] rounded-sm p-8 border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-school-blue">Nuevo Usuario</DialogTitle>
            <DialogDescription className="font-medium">Completa los datos para registrar un nuevo integrante del colegio.</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => {
            e.preventDefault();
            toast.success("Usuario registrado correctamente");
            setIsRegisterModalOpen(false);
          }} className="space-y-6 mt-4">
            <div className="space-y-2">
              <Label className="font-bold text-slate-700">Nombre Completo</Label>
              <Input placeholder="Ej. Carlos Mendoza" className="rounded-sm h-12" required />
            </div>
            <div className="space-y-2">
              <Label className="font-bold text-slate-700">Correo Electrónico</Label>
              <Input type="email" placeholder="carlos@ejemplo.com" className="rounded-sm h-12" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">Rol</Label>
                <select className="w-full h-12 rounded-sm border border-slate-200 px-4 font-medium bg-white focus:ring-2 focus:ring-school-blue outline-none">
                  <option value="parent">Padre</option>
                  <option value="teacher">Docente</option>
                  <option value="assistant">Asistente</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">Teléfono</Label>
                <Input placeholder="987654321" className="rounded-sm h-12" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-school-blue hover:bg-school-blue/90 h-14 rounded-sm text-lg font-bold shadow-lg shadow-school-blue/20">
              Crear Usuario
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* Register Student Modal */}
      <Dialog open={isStudentModalOpen} onOpenChange={setIsStudentModalOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-sm p-8 border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-school-blue">Matricular Alumno</DialogTitle>
            <DialogDescription className="font-medium">Ingresa los datos del nuevo estudiante para su registro oficial.</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => {
            e.preventDefault();
            toast.success("Alumno matriculado correctamente");
            setIsStudentModalOpen(false);
          }} className="space-y-6 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">Nombres</Label>
                <Input placeholder="Ej. Mateo" className="rounded-sm h-12" required />
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">Apellidos</Label>
                <Input placeholder="Ej. García" className="rounded-sm h-12" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">Grado</Label>
                <select className="w-full h-12 rounded-sm border border-slate-200 px-4 font-medium bg-white outline-none">
                  <option>1ro Primaria</option>
                  <option>2do Primaria</option>
                  <option>3ro Primaria</option>
                  <option>4to Primaria</option>
                  <option>5to Primaria</option>
                  <option>6to Primaria</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">Sección</Label>
                <select className="w-full h-12 rounded-sm border border-slate-200 px-4 font-medium bg-white outline-none">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="font-bold text-slate-700">Padre/Madre o Apoderado</Label>
              <Input placeholder="Nombre del apoderado" className="rounded-sm h-12" required />
            </div>
            <Button type="submit" className="w-full bg-school-blue hover:bg-school-blue/90 h-14 rounded-sm text-lg font-bold shadow-lg shadow-school-blue/20">
              Finalizar Matrícula
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
