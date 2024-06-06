// components/Header.tsx

import React, { FC, ReactNode } from "react";
import { NavigationMenuDemo } from "../navigation-menu";
import Breadcrumbs from "../breadcrumbs";
import { Card } from "@/components/ui/card";
interface HeaderProps {
  children: ReactNode; // Aceita elementos filhos
}
const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="mt-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
        
            <NavigationMenuDemo />
         
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Breadcrumbs />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 mt-10 w-100 flex-col">
            

            {children}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
