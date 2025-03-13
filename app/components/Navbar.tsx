'use client'

import React from "react"
import Image from 'next/image'
import SummitLogoImage from '@/public/summit_logo.svg'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import ThemeController from "./ThemeController"
import SummitDropdownMenu from "./SummitDropdownMenu"

export default function Navbar() {

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
