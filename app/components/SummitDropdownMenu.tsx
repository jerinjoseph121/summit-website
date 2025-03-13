"use client"

import React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Goal, House, Images, SquareChartGantt, Users } from "lucide-react"

const getCurrentPage = () => {
  if (typeof window !== "undefined") {
    const url = new URL(window?.location?.href ?? '');
    const page = url.pathname.split('/').pop();
    return page ? page : 'home';
  }
  return '';
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
  else if (currentPage === 'photoGallery')
    return 'Photo Gallery';

  return 'Not Found';
}

export default function SummitDropdownMenu() {
  const [currentPage, setCurrentPage] = useState(() => getCurrentPageLabel());
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <Button variant="outline">
        <span className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
        <ChevronDown />
      </Button>
    )

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
          <DropdownMenuItem onClick={() => setCurrentPage('Photo Gallery')} asChild>
            <Link href="/photoGallery" passHref>
              <div className='flex items-center'>
                <div className="pt-0.5">
                  <Images />
                </div>
                <span className="pl-2">Photo Gallery</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu >
  );
}