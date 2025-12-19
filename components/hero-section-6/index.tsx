"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection6() {
  return (
    <div className="flex min-h-screen flex-col bg-[#ffd633] font-sans">
      {/* Header */}
      <header className="w-full px-10 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 shadow-sm">
              <span className="text-xl font-semibold text-amber-900">✦</span>
            </div>
            <span className="text-lg font-semibold text-amber-900">To‑Do</span>
          </div>

          {/* Center Navigation */}
          <NavigationMenu viewport={false} className="hidden md:flex">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#features"
                    className={`${navigationMenuTriggerStyle()} bg-transparent px-3 py-1 text-sm font-medium text-amber-900 hover:bg-amber-900/10 hover:text-black`}
                  >
                    Features
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#about"
                    className={`${navigationMenuTriggerStyle()} bg-transparent px-3 py-1 text-sm font-medium text-amber-900 hover:bg-amber-900/10 hover:text-black`}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#blog"
                    className={`${navigationMenuTriggerStyle()} bg-transparent px-3 py-1 text-sm font-medium text-amber-900 hover:bg-amber-900/10 hover:text-black`}
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#help"
                    className={`${navigationMenuTriggerStyle()} bg-transparent px-3 py-1 text-sm font-medium text-amber-900 hover:bg-amber-900/10 hover:text-black`}
                  >
                    Help
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Sign up button */}
          <Button className="rounded-full bg-amber-900 px-6 py-2 text-sm font-semibold text-amber-50 hover:bg-amber-950">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero content */}
      <main className="flex flex-1 items-center justify-center px-6 pb-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Illustration */}
          <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-amber-200 shadow-2xl">
            <Image
              src="/horse-hero.png"
              alt="Product screenshot"
              fill
              className="object-contain opacity-90"
              priority
            />
          </div>

          {/* Copy */}
          <div className="space-y-6 text-left md:text-left">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-amber-900 md:text-5xl lg:text-6xl">
              Make every
              <br />
              day a win
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-amber-900/80 md:text-lg">
              Stay on top of your tasks with a playful, visual planner. Effortless to use, easy
              to love—organize, track, and celebrate your progress every step of the way.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button className="rounded-full bg-amber-900 px-6 py-2 text-sm font-semibold text-amber-50 hover:bg-amber-950">
                Start now
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-amber-900 bg-transparent px-6 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-900/10 hover:text-amber-950"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


