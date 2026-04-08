import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: any | null;
  userData: any | null;
  loading: boolean;
  isAuthReady: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  isAuthReady: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    // Check local storage for simulated session
    const savedUser = localStorage.getItem('demo_user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setUserData(parsedUser);
    }
    setIsAuthReady(true);
    setLoading(false);
  }, []);

  const login = (email: string, role: string = 'parent') => {
    const mockUser = {
      uid: `demo-${role}-${Date.now()}`,
      email: email,
      displayName: email.split('@')[0],
      role: role,
      schoolId: 'school-1'
    };
    setUser(mockUser);
    setUserData(mockUser);
    localStorage.setItem('demo_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setUserData(null);
    localStorage.removeItem('demo_user');
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, isAuthReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
