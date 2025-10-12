import LoginForm from "@/components/features/login/formLogin";
import SettingsThemes from "@/components/shared/molecules/settings-themes";

export default function LoginPage() {
  return (
    <div className="min-h-[100svh] relative bg-background overflow-hidden">
      {/* Mesh Gradient Background - Ultra Subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-accent/0 to-secondary/0.5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/0 via-transparent to-primary/2" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex justify-center items-center px-4">
        <SettingsThemes icons="setting" />
        
        <div className="w-full max-w-md space-y-10 select-none">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold text-primary">
              Sign in
            </h1>
            <p className="text-lg font-medium text-muted-foreground">
              to continue to Dashboard
            </p>
          </div>
          
          <div className="relative">
            {/* Main Card */}
            <div className="relative rounded-lg border bg-card/95 backdrop-blur-sm text-card-foreground p-8 shadow-xl">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient - Ultra Subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/2 to-transparent pointer-events-none" />
    </div>
  );
}
