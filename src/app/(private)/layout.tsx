import { AppSidebar } from "@/components/shared/organisms/sidebar/sidebar-app";
import Header from "@/components/shared/organisms/header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <div className="w-full z-10 sticky top-0 ">
            <Header />
          </div>
          <div className="relative p-[30px] 2xl:max-w-[1536px] mx-auto">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
