import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import AdminAuthWrapper from "@/components/AdminAuthWrapper";

export default function MasterAdminLayout({ children }) {
  return (
    <AdminAuthProvider>
      <AdminAuthWrapper>
        {children}
      </AdminAuthWrapper>
    </AdminAuthProvider>
  );
}

