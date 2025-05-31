import { Code2 ,  Paperclip } from "lucide-react"
import{
  Sidebar,
  SidebarContent,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenu,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarGroupLabel,
}from "@/components/ui/sidebar"

const elements = [

  
  {
    title: "Projects",
    url: "#",
    icon: Paperclip,
  },
  

]

const items = [
  {
    title: "Web development",
    url: "#",
    icon: Code2,
  },
 
]

export function MemberSidebar() {
  return (
    <Sidebar className="pt-10">
      <SidebarContent>

      <SidebarGroup>
          
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
             {elements.map((ele)=>(
              <SidebarMenuItem key={ele.title}>
                <SidebarMenuButton asChild>
                <a href={ele.url}>
                <ele.icon/>
                <span>{ele.title}</span>
                </a>
                </SidebarMenuButton>

              </SidebarMenuItem>
             ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          
          <SidebarGroupLabel>Domains</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
             {items.map((item)=>(
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                <a href={item.url}>
                <item.icon/>
                <span>{item.title}</span>
                </a>
                </SidebarMenuButton>

              </SidebarMenuItem>
             ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

