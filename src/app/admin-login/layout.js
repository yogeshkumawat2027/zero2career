"use client";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";

export default function AdminLoginLayout({ children }) {
  return (
    <AdminAuthProvider>
      {children}
    </AdminAuthProvider>
  );
}
