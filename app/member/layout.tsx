import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import MemberNav from "@/components/Essentials/MemberNav";
import { MemberSidebar } from "@/components/Essentials/MemberSidebar";

export default function MemberLayout({children}:{children: React.ReactNode}){
  return(
    <SidebarProvider>
      <div className=" flex h-screen">
      <MemberSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <MemberNav />
      <main className="flex-1 p-6 overflow-y-auto bg-white">
        <SidebarTrigger />
        {children}
      </main>
      </div>
      
    </SidebarProvider>
  )
}