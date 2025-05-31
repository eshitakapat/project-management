import { SidebarProvider } from "@/components/ui/sidebar";
import AdminNav from "@/components/Essentials/AdminNav";
import { AdminSidebar } from "@/components/Essentials/AdminSidebar";

export default function AdminLayout({children}:{children: React.ReactNode}){
  return(
    <SidebarProvider>
      <div className="flex h-screen">
        <div className="w-64">
        <AdminSidebar />
        </div>
      
      
      <div className="flex-1 flex flex-col">
      <AdminNav />
      
      <main className="flex-1 p-6 overflow-y-auto bg-white">
        
        {children}
      </main>
      </div>
      </div>
    </SidebarProvider>
  )
}