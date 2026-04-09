import React from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ChevronRight 
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { toast } from "sonner";

export const Contact = () => {
  return (
    <div className="pt-12 pb-24">
      <section className="bg-school-red text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-doodle opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8">Contacto</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para escucharte. Ponte en contacto con nosotros para cualquier duda o consulta.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-sm shadow-2xl overflow-hidden border-4 border-muted/20">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-12 md:p-20 space-y-12">
              <div>
                <h2 className="font-heading text-5xl font-bold mb-4 text-school-blue">¡Escríbenos!</h2>
                <p className="text-muted-foreground text-lg">Completa el formulario y nos pondremos en contacto contigo.</p>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
              }} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-bold">Nombre</Label>
                    <Input placeholder="Tu nombre" required className="rounded-sm h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Apellido</Label>
                    <Input placeholder="Tu apellido" required className="rounded-sm h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold">Correo Electrónico</Label>
                  <Input type="email" placeholder="tu@correo.com" required className="rounded-sm h-12" />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold">Mensaje</Label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-school-blue hover:bg-school-blue/90 h-14 rounded-sm text-lg font-bold shadow-lg shadow-school-blue/20">
                  Enviar Mensaje <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
            
            <div className="flex-1 bg-slate-900 text-white p-12 md:p-20 space-y-12">
              <div>
                <h2 className="font-heading text-4xl font-bold mb-8">Información de Contacto</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="bg-white/10 p-5 rounded-sm group-hover:bg-school-blue transition-all">
                      <MapPin className="w-8 h-8 text-school-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Dirección</h4>
                      <p className="text-slate-400 text-lg">Talara Alta - Calle 8 S/N</p>
                      <p className="text-slate-400">Talara, Piura, Perú</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="bg-white/10 p-5 rounded-sm group-hover:bg-school-red transition-all">
                      <Phone className="w-8 h-8 text-school-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Teléfonos</h4>
                      <p className="text-slate-400 text-lg">+51 987 654 321</p>
                      <p className="text-slate-400">+51 073 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="bg-white/10 p-5 rounded-sm group-hover:bg-school-green transition-all">
                      <Clock className="w-8 h-8 text-school-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Horario de Atención</h4>
                      <p className="text-slate-400 text-lg">Lunes a Viernes</p>
                      <p className="text-slate-400">8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="font-bold text-lg mb-6">Síguenos en Redes:</p>
                <div className="flex gap-4">
                  {["f", "i", "w", "y"].map((social) => (
                    <motion.div 
                      key={social}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center font-black text-xl hover:bg-school-blue transition-all cursor-pointer"
                    >
                      {social}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-sm shadow-2xl border-4 border-white overflow-hidden h-[500px] relative">
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-school-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Mapa de Ubicación</h3>
                <Button 
                  className="bg-school-blue text-white rounded-sm px-8 py-6 font-bold"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  Ver en Google Maps <ChevronRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
