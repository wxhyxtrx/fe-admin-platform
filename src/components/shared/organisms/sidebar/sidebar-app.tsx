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
  PiShoppingBagBold,
  PiUserListBold,
  PiUsersBold,
  PiWalletBold,
} from "react-icons/pi";
import Text from "../../atoms/text";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: PiChartDonutBold,
  },
  {
    title: "Pesanan",
    url: "/pesanan",
    icon: PiShoppingBagBold,
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
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
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
              className={cn(!open && "ms-3")}
            />
          ) : (
            <Image
              src="/images/Icondark.png"
              alt="logo"
              width={35}
              height={35}
              className={cn(!open && "ms-3")}
            />
          )}
          {open && (
            <div id="platform" className={cn("flex flex-col gap-0 line-clamp-2", {
              "hidden": !open,
            })}>
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
          )}
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
                    className={cn(" data-[active=true]:text-white hover:bg-primary")}
                  >
                    <Link href={item.url}>
                      <item.icon className={cn("!size-[22px]", !open && "!size-[24px] -ms-1")} />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
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
