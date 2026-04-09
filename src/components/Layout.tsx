import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  SeparatorHorizontal 
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { LoginModal } from "./LoginModal";
import { useAuth } from "../AuthContext";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMatriculaOpen, setIsMatriculaOpen] = React.useState(false);
  const [isTermsOpen, setIsTermsOpen] = React.useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);
  const [isReclamacionesOpen, setIsReclamacionesOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Niveles", path: "/niveles" },
    { name: "Talleres", path: "/talleres" },
    { name: "Equipo", path: "/equipo" },
    { name: "Contacto", path: "/contacto" },
  ];

  if (user) return <>{children}</>;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-school-blue/30 overflow-x-hidden">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.webp" alt="Logo" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-school-blue">
                I.E.P. Las Joyas
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                de Jesucristo
              </span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`text-sm font-bold transition-colors relative group ${location.pathname === item.path ? 'text-school-blue' : 'hover:text-school-blue'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-1 bg-school-yellow transition-all rounded-full ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
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
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className={`font-bold py-2 ${location.pathname === item.path ? 'text-school-blue' : 'text-slate-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                  <LoginModal>
                    <Button variant="outline" className="w-full rounded-xl font-bold border-school-blue text-school-blue">
                      Entrar
                    </Button>
                  </LoginModal>
                  <Button 
                    className="w-full bg-school-red text-white rounded-xl font-bold"
                    onClick={() => {
                      setIsMatriculaOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Matrícula 2026
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      <footer className="bg-slate-950 text-slate-500 py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-school-blue via-school-yellow to-school-red" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <img src="/logo.webp" alt="Logo" className="h-12 w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer" />
                <span className="text-white font-heading font-bold text-2xl tracking-tight">I.E.P. Las Joyas de Jesucristo</span>
              </div>
              <p className="text-lg max-w-md">
                Comprometidos con la formación de ciudadanos íntegros, competentes y con temor de Dios desde hace 34 años.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Enlaces Rápidos</h4>
              <ul className="space-y-4 font-medium">
                <li><button onClick={() => setIsMatriculaOpen(true)} className="hover:text-white transition-colors text-left">Admisión 2026</button></li>
                <li><Link to="/niveles" className="hover:text-white transition-colors">Niveles Educativos</Link></li>
                <li><Link to="/talleres" className="hover:text-white transition-colors">Talleres</Link></li>
                <li><button onClick={() => toast.success("El calendario escolar 2026 ha sido enviado a su correo.")} className="hover:text-white transition-colors text-left">Calendario Escolar</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 font-medium">
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors text-left">Términos y Condiciones</button></li>
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors text-left">Política de Privacidad</button></li>
                <li><button onClick={() => setIsReclamacionesOpen(true)} className="hover:text-white transition-colors text-left">Libro de Reclamaciones</button></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-900 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p>© {new Date().getFullYear()} I.E.P. Las Joyas de Jesucristo. RD 00305. Calle 8 S/N, Talara Alta, Piura.</p>
            <p>Diseñado con ❤️ para nuestra comunidad escolar.</p>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-sm max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-school-blue">Términos y Condiciones</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p className="font-bold">1. Aceptación de los Términos</p>
            <p>Al acceder y utilizar este sitio web de la I.E.P. Las Joyas de Jesucristo, usted acepta estar sujeto a estos términos y condiciones de uso, todas las leyes y reglamentos aplicables.</p>
            <p className="font-bold">2. Uso de la Licencia</p>
            <p>Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web para visualización transitoria personal y no comercial solamente.</p>
            <p className="font-bold">3. Responsabilidad</p>
            <p>Los materiales en el sitio web se proporcionan "tal cual". El colegio no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las otras garantías.</p>
            <p className="font-bold">4. Limitaciones</p>
            <p>En ningún caso el colegio o sus proveedores serán responsables de cualquier daño surgido del uso o la imposibilidad de utilizar los materiales en el sitio.</p>
          </div>
          <Button onClick={() => setIsTermsOpen(false)} className="bg-school-blue w-full mt-4">Cerrar</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-school-blue">Política de Privacidad</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>Su privacidad es muy importante para nosotros. En consecuencia, hemos desarrollado esta Política para que usted comprenda cómo recopilamos, usamos, comunicamos y divulgamos la información personal.</p>
            <p>Recopilamos información personal por medios legítimos y justos y, cuando corresponda, con el conocimiento o consentimiento de la persona interesada.</p>
            <p>Protegeremos la información personal mediante garantías de seguridad razonables contra pérdida o robo, así como acceso, divulgación, copia, uso o modificación no autorizados.</p>
          </div>
          <Button onClick={() => setIsPrivacyOpen(false)} className="bg-school-blue w-full mt-4">Cerrar</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isReclamacionesOpen} onOpenChange={setIsReclamacionesOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-school-blue">Libro de Reclamaciones</DialogTitle>
            <DialogDescription>Conforme a lo establecido en el Código de Protección y Defensa del Consumidor.</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => {
            e.preventDefault();
            toast.success("Su reclamo ha sido registrado. Nos pondremos en contacto con usted en un plazo máximo de 15 días hábiles.");
            setIsReclamacionesOpen(false);
          }} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nombres</Label>
                <Input placeholder="Nombre" required />
              </div>
              <div className="space-y-2">
                <Label>Apellidos</Label>
                <Input placeholder="Apellidos" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label>DNI / CE</Label>
              <Input placeholder="Documento de identidad" required />
            </div>
            <div className="space-y-2">
              <Label>Detalle del Reclamo o Queja</Label>
              <textarea 
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Escriba aquí los detalles..."
                required
              />
            </div>
            <Button type="submit" className="w-full bg-school-blue">Enviar Reclamo</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
