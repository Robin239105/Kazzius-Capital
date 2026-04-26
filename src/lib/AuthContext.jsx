import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authChecked, setAuthChecked] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [user, setUser] = useState(null);

  const checkUserAuth = useCallback(async () => {
    setIsLoadingAuth(true);
    try {
      // TODO: Implement actual auth check
      setIsAuthenticated(true);
      setAuthChecked(true);
    } catch (error) {
      setAuthError({ type: 'auth_required', message: error.message });
    } finally {
      setIsLoadingAuth(false);
    }
  }, []);

  const navigateToLogin = useCallback(() => {
    // TODO: Implement login navigation
    console.log('Navigate to login');
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    setAuthChecked(false);
  }, []);

  const value = {
    isAuthenticated,
    isLoadingAuth,
    isLoadingPublicSettings,
    authChecked,
    authError,
    user,
    checkUserAuth,
    navigateToLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
