"use client";

import { api } from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const hyderateUser = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/auth/me");
      setUser(res?.data?.user ?? null);
    } catch (error) {
      setUser(null);
      console.log("error in hyderation", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    hyderateUser();
  }, []);

  return <Auth.Provider value={{ user, setUser, loading }}>{children}</Auth.Provider>;
};

export const useAuth = () => useContext(Auth);