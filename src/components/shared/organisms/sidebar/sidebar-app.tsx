"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useThemeStore } from "@/store/zustand/theme-store";
import { Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgLogOff } from "react-icons/cg";
import {
  PiChartDonutBold,
  PiInvoiceBold,
  PiPackageBold,
  PiUserListBold,
  PiUsersBold,
  PiWalletBold,
} from "react-icons/pi";
import Text from "../../atoms/text";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: PiChartDonutBold,
  },
  {
    title: "Tagihan",
    url: "#",
    icon: PiInvoiceBold,
  },
  {
    title: "Pelanggan",
    url: "#",
    icon: PiUserListBold,
  },
  {
    title: "Petugas",
    url: "#",
    icon: PiUsersBold,
  },
  {
    title: "Keuangan",
    url: "#",
    icon: PiWalletBold,
  },
  {
    title: "Stok Barang",
    url: "#",
    icon: PiPackageBold,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();
  const { theme } = useThemeStore();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-3">
        <div className="flex items-center gap-2">
          {theme === "dark" ? (
            <Image
              src="/images/Iconlight.png"
              alt="logo"
              width={35}
              height={35}
            />
          ) : (
            <Image
              src="/images/Icondark.png"
              alt="logo"
              width={35}
              height={35}
            />
          )}
          <div id="platform" className="flex flex-col gap-0">
            <Text
              variant="h5"
              className="p-0 text-stone-900 dark:text-white leading-5"
            >
              3Light Store
            </Text>
            <Text variant="span" className="text-stone-500 dark:text-white">
              Admin Panel Reference
            </Text>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.url === pathname}
                    size={"lg"}
                    asChild
                    className=" data-[active=true]:text-white hover:bg-primary"
                  >
                    <a href={item.url}>
                      <item.icon className="!size-[22px]" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-3.5">
        <Button
          variant={theme === "dark" ? "destructive" : "outline"}
          size="lg"
          className="hover:bg-red-700 hover:text-white "
        >
          <CgLogOff size={20} />
          {open && <span>Sign Out</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
