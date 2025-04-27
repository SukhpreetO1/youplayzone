"use client";

import { useEffect, useState } from "react";
import { Menu, Button, Link, NavigationMenu, NavigationMenuItem, NavigationMenuList, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, LOGIN_URL, SIGNUP_URL, Avatar, AvatarImage, AvatarFallback, PROFILE, axiosInstance, toast, useRouter, HOME_URL, POSTGRES_API_LOGOUT } from "@/app/routes/route";

export default function Navbar({ isAuthenticated, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [socialPlatform, setSocicalPlatform] = useState([]);
  const router = useRouter();
  
  const handleLogout = async () => {
    const response = await axiosInstance.post(POSTGRES_API_LOGOUT);
    toast.success(response.data.message);
    router.push(HOME_URL);
  };

  useEffect(() => {
    if (user && user.user && user.user.social_media) {
      setSocicalPlatform(user.user.social_media);
    }
  }, [user])  

  return (
    <nav className="flex items-center justify-between p-4 border-b shadow-md bg-white">
      <div className="text-xl font-bold hidden md:flex"><Link href={HOME_URL}>YouPlayZone</Link></div>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex space-x-4">
          {socialPlatform.length > 0 && socialPlatform.map((platform, index) => (
            <NavigationMenuItem key={index}>
              <Link href={`/${platform.social_media.name.toLowerCase()}`} passHref>
                <Button variant="ghost" className="capitalize">
                  {platform.social_media.name}
                </Button>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full shadow-md flex flex-col items-center p-4 space-y-2 md:hidden">
          {/* <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>Home</Button></Link>
          <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>About</Button></Link>
          <Link href="#"><Button variant="ghost" onClick={() => setIsOpen(false)}>Contact</Button></Link> */}
          {socialPlatform.length > 0 && socialPlatform.map((platform, index) => (
            <Link href={`/${platform.social_media.name.toLowerCase()}`} passHref key={index}>
              {platform.social_media.name}
            </Link>
          ))}
          {!isAuthenticated ? (
            <>
              <Link href={LOGIN_URL}><Button variant="ghost" onClick={() => setIsOpen(false)}>Login</Button></Link>
              <Link href={SIGNUP_URL}><Button variant="ghost" onClick={() => setIsOpen(false)}>Signup</Button></Link>
            </>
          ) : ""
          }
        </div>
      )}


      <div className="flex md:gap-4">
        {/* Login/ Signup page */}
        {isAuthenticated ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>{user.user.name}</DropdownMenuItem>
                <Link href={PROFILE}>
                  <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={() => alert("Settings")}>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className = "cursor-pointer">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link href={LOGIN_URL}><Button variant="secondary" className="hidden md:flex transition duration-300 hover:bg-gray-200 hover:text-blue-700 px-4 py-2">Login</Button></Link>
            <Link href={SIGNUP_URL}><Button variant="destructive" className="hidden md:flex transition duration-300 hover:brightness-110 hover:scale-[1.02] px-4 py-2">Sign Up</Button></Link>
          </>
        )}
      </div>
    </nav>
  );
}