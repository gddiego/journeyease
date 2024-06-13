
'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavigationMenuDemo() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        onClick={toggleDrawer}
      >
        {/* Ícone de Menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <span className="sr-only">Toggle menu</span>
      </Button>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          {/* <Package2 className="h-6 w-6" /> */}
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="/dashboard-journey"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="/hosting"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Hospedagens
        </Link>
        <Link
          href="/places"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Lugares
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Transporte
        </Link>
        <Link
          href="/analytics"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Analytics
        </Link>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
            {/* <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            /> */}
            <span>Perfil</span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              {/* <CircleUser className="h-5 w-5" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z"
                />
              </svg>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Configuração</DropdownMenuItem>
            <DropdownMenuItem>Suporte</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleDrawer}></div>
          <div className="relative z-50 w-64 bg-white p-4">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4"
              onClick={toggleDrawer}
            >
              {/* Ícone de Fechar */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </Button>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#" className="text-lg font-semibold">
                Acme Inc
              </Link>
              <Link
                href="/dashboard-journey"
                className="text-foreground transition-colors hover:text-foreground"
                onClick={toggleDrawer}
              >
                Dashboard
              </Link>
              <Link
                href="/hosting"
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={toggleDrawer}
              >
                Hospedagens
              </Link>
              <Link
                href="/places"
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={toggleDrawer}
              >
                Lugares
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={toggleDrawer}
              >
                Transporte
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={toggleDrawer}
              >
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
