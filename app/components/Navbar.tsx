"use client"

import React from "react"
import { useEffect, useState } from "react"
import Image from 'next/image'
import SummitLogoImage from '@/public/summit_logo.svg'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import ThemeController from "./ThemeController"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ChevronDown, House, Goal, SquareChartGantt, Users } from "lucide-react"

const getCurrentPage = () => {
  // if (typeof window !== "undefined") {
  const url = new URL(window?.location?.href ?? '');
  const page = url.pathname.split('/').pop();
  return page ? page : 'home';
  // }
  // return 'home';
}

const getCurrentPageLabel = () => {
  const currentPage = getCurrentPage();

  if (currentPage === 'home')
    return 'Home';
  else if (currentPage === 'whyUs')
    return 'Why Us?';
  else if (currentPage === 'team')
    return 'The Team';
  else if (currentPage === 'majorProjects')
    return 'Major Projects';

  return 'Home';
}

export default function Navbar() {
  useEffect(() => {
    getCurrentPage();
  }, []);

  return (
    <div className="sticky top-0 bg-inherit z-10 flex items-center grid grid-cols-7 gap-4 px-8 py-4 border-b-4">
      <div className="col-span-2 flex items-center">
        <div className="flex items-center">
          <Image className="h-max-40 h-min-40" src={SummitLogoImage} alt='Summit Logo' width={64} height={40} />
        </div>
        <div className="hidden lg:inline text-base pl-5">
          Summit Engineering & Technology
        </div>
        <div className="hidden md:inline lg:hidden text-base pl-5">
          Summit Engg & Tech
        </div>
      </div>
      <div className="col-span-3 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <SummitDropdownMenu />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="col-span-2 flex justify-end">
        <ThemeController />
      </div>
    </div>
  )
}

function SummitDropdownMenu() {
  const [currentPage, setCurrentPage] = useState(getCurrentPageLabel());

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {currentPage}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Page</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setCurrentPage('Home')} asChild>
            <Link href="/" passHref>
              <div className='flex items-center'>
                <div className="pt-0.5">
                  <House />
                </div>
                <span className="pl-2">Home</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCurrentPage('Why us?')} asChild>
            <Link href="/whyUs" passHref>
              <div className='flex items-center'>
                <div className="pt-0.5">
                  <Goal />
                </div>
                <span className="pl-2">Why us?</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCurrentPage('The Team')} asChild>
            <Link href="/team" passHref>
              <div className='flex items-center'>
                <div className="pt-0.5">
                  <Users />
                </div>
                <span className="pl-2">The Team</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCurrentPage('Major Projects')} asChild>
            <Link href="/majorProjects" passHref>
              <div className='flex items-center'>
                <div className="pt-0.5">
                  <SquareChartGantt />
                </div>
                <span className="pl-2">Major Projects</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu >
  );
}
