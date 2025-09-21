import Header from "@/components/shared/organisms/header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </div>
  );
}
