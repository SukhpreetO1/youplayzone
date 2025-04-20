"use client";
import { useEffect, useState } from "react";
import { Navbar, POSTGRES_API_PROFILE, axiosInstance } from "@/app/routes/route";

export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get(POSTGRES_API_PROFILE);
        if (response.status === 200) {
          const userData = response.data;
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <html lang="en">
        <body>
            <Navbar isAuthenticated={isAuthenticated} user={user}/>
            {children}
        </body>
    </html>
  );
}
