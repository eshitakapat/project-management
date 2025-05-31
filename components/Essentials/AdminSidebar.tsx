import { Code2, Brain, Smartphone , BarChart , Paperclip , User } from "lucide-react"
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
    title: "Statistics",
    url: "#",
    icon: BarChart,
  },
  {
    title: "Projects",
    url: "#",
    icon: Paperclip,
  },
  {
    title: "Members",
    url: "#",
    icon: User,
  },

]

const items = [
  {
    title: "Web development",
    url: "#",
    icon: Code2,
  },
  {
    title: "AI/ML",
    url: "#",
    icon: Brain,
  },
  {
    title: "App Development",
    url: "#",
    icon: Smartphone,
  },
]

export function AdminSidebar() {
  return (
    <Sidebar className="pt-10 bg-gray-800">
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

