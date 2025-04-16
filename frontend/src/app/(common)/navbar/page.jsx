"use client";

import { useState } from "react";
import { Menu, Sun, Moon, Button, Link, useTheme, NavigationMenu, NavigationMenuItem, NavigationMenuList, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, LOGIN_URL, SIGNUP_URL } from "@/app/routes/route";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 border-b shadow-md bg-background">
      <div className="text-xl font-bold hidden md:flex"><Link href="#">YouPlayZone</Link></div>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <Link href="#"><Button variant="ghost">Home</Button></Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#"><Button variant="ghost">About</Button></Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#"><Button variant="ghost">Contact</Button></Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-md flex flex-col items-center p-4 space-y-2 md:hidden">
          <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>Home</Button></Link>
          <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>About</Button></Link>
          <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>Contact</Button></Link>
          <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>Login</Button></Link>
          <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>Signup</Button></Link>
        </div>
      )}


      <div className="flex md:gap-4">
        {/* Dark Mode Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Login/ Signup page */}
        <Link href={LOGIN_URL}><Button variant="default" className="hidden md:flex">Login</Button></Link>
        <Link href={SIGNUP_URL}><Button variant="secondary" className="hidden md:flex">Sign Up</Button></Link>
      </div>
    </nav>
  );
}