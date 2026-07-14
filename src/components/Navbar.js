"use client";

import Link from "next/link";
import { ModeToggle } from "./toggleTheme";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background text-foreground shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-primary">
          E-Comm
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/home"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Products
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          <Button>
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;