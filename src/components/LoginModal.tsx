import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '../AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  displayName: z.string().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { login } = useAuth();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      login(data.email, 'parent');
      toast.success(isRegister ? "Cuenta creada correctamente" : "¡Bienvenido de nuevo!");
      setOpen(false);
      setLoading(false);
    }, 1000);
  };

  const simulateRole = (role: string) => {
    setLoading(true);
    const emails: Record<string, string> = {
      superadmin: 'admin@joyas.edu.pe',
      teacher: 'profesor@joyas.edu.pe',
      parent: 'padre@joyas.edu.pe',
      assistant: 'asistente@joyas.edu.pe'
    };
    
    setTimeout(() => {
      login(emails[role] || 'usuario@joyas.edu.pe', role);
      const roleName = role === 'superadmin' ? 'Administrador' : 
                       role === 'teacher' ? 'Docente' : 
                       role === 'student' ? 'Alumno' : 
                       role === 'parent' ? 'Padre' : 'Asistente';
      toast.success(`Sesión iniciada como ${roleName}`);
      setOpen(false);
      setLoading(false);
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { setOpen(val); if(!val) { setIsRegister(false); reset(); } }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-sm">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-school-blue">
            {isRegister ? "Crear Cuenta" : "Iniciar Sesión"}
          </DialogTitle>
          <DialogDescription>
            {isRegister 
              ? "Regístrate para acceder al sistema del colegio." 
              : "Ingresa a tu cuenta para gestionar el colegio o ver las notas de tus hijos."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-3 gap-2 mb-2">
            <Button variant="outline" size="sm" onClick={() => simulateRole('superadmin')} className="text-[10px] h-8 rounded-sm border-school-red text-school-red hover:bg-school-red/5">Admin</Button>
            <Button variant="outline" size="sm" onClick={() => simulateRole('teacher')} className="text-[10px] h-8 rounded-sm border-school-blue text-school-blue hover:bg-school-blue/5">Docente</Button>
            <Button variant="outline" size="sm" onClick={() => simulateRole('student')} className="text-[10px] h-8 rounded-sm border-school-green text-school-green hover:bg-school-green/5">Alumno</Button>
            <Button variant="outline" size="sm" onClick={() => simulateRole('parent')} className="text-[10px] h-8 rounded-sm border-slate-400 text-slate-400 hover:bg-slate-50">Padre</Button>
            <Button variant="outline" size="sm" onClick={() => simulateRole('assistant')} className="text-[10px] h-8 rounded-sm border-school-yellow text-school-yellow hover:bg-school-yellow/5">Asistente</Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">O usa tus credenciales</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {isRegister && (
              <div className="space-y-2">
                <Label htmlFor="displayName">Nombre Completo</Label>
                <Input id="displayName" placeholder="Juan Pérez" {...register('displayName')} className="rounded-sm" />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="ejemplo@correo.com" {...register('email')} className="rounded-sm" />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" {...register('password')} className="rounded-sm" />
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-school-blue hover:bg-school-blue/90 rounded-sm" disabled={loading}>
              {loading ? "Cargando..." : (isRegister ? "Registrarse" : "Entrar")}
            </Button>
          </form>
          
          <div className="text-center">
            <button 
              type="button" 
              onClick={() => setIsRegister(!isRegister)}
              className="text-sm text-school-blue hover:underline font-bold"
            >
              {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate aquí"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
