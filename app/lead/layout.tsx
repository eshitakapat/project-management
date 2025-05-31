import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import LeadNav from "@/components/Essentials/LeadNav";
import { LeadSidebar } from "@/components/Essentials/LeadSidebar";

export default function LeadLayout({children}:{children: React.ReactNode}){
  return(
    <SidebarProvider>
      <div className="flex h-screen">
      <LeadSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <LeadNav />
      <main className="flex-1 p-6 overflow-y-auto bg-white">
        <SidebarTrigger />
        {children}
      </main>
      </div>
      
    </SidebarProvider>
  )
}