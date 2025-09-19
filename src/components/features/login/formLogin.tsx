"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

import { PasswordInput } from "@/components/shared/atoms/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TypeLoginInput, loginSchema } from "@/lib/validation/login-schema";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<TypeLoginInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    mode: "onTouched",
  });

  async function handleSubmit(values: TypeLoginInput) {
    setIsLoading(true);
    
    const loginPromise = () => 
      new Promise<{ name: string; email: string }>((resolve, reject) => 
        setTimeout(() => {
          if (values.email && values.password) {
            resolve({ 
              name: values.email.split('@')[0],
              email: values.email 
            });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 2000)
      );

    try {
      await toast.promise(loginPromise, {
        loading: 'Signing in...',
        success: (data: { name: string; email: string }) => {
          console.log("login values", values);
          setIsLoading(false);
          return `Welcome back, ${data.name}!`;
        },
        error: 'Login failed. Please check your credentials.',
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6"
        noValidate
      >
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium text-foreground">
                Email address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={isLoading}
                  className="h-11 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-destructive" />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium text-foreground">
                Password
              </FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="••••••••"
                  autoComplete="current-password"
                  disabled={isLoading}
                  className="h-11 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-destructive" />
            </FormItem>
          )}
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-2">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                    aria-label="Remember me"
                    className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary disabled:opacity-50"
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal text-foreground cursor-pointer">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />
          <a
            href="/forgot-password"
            className={`text-sm text-primary hover:text-primary/80 transition-colors font-medium ${
              isLoading ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            Forgot password?
          </a>
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex gap-2 items-center">
              <Loader2 className="h-4 w-4 animate-spin" /> 
              Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </Form>
  );
}
