"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function IndexPage() {
    const [mounted, setMounted] = useState(false)

    // Trigger animation AFTER mount
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="relative min-h-screen font-sans">
            {/* HEADER */}
            <header className="m-6">
                <div className="max-w-7xl mx-auto flex items-center p-4 gap-4">
                    {/* MOBILE MENU */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-6">
                                {["Home", "About", "Features", "Pricing"].map((item) => (
                                    <Link key={item} href="/" className="text-lg">
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList>
                                {["Home", "About", "Features", "Pricing"].map((item) => (
                                    <NavigationMenuItem key={item}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="/"
                                                className={`${navigationMenuTriggerStyle()} text-black font-semibold`}
                                            >
                                                {item}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* BUTTONS */}
                    <div className="hidden md:flex gap-2">
                        <Button variant="outline">Login</Button>
                        <Button variant="outline">Signup</Button>
                    </div>
                </div>
            </header>

            {/* FULL WIDTH LINE */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />

            {/* HERO */}
            <section className="text-center px-4 mt-20">
                <h6
                    className={`text-lg md:text-xl font-medium bg-purple-500/10 px-4 py-2 rounded-full inline-block
          transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    Connect with us
                </h6>

                <h1
                    className={`mt-10 text-5xl md:text-7xl font-semibold
          bg-gradient-to-r from-black to-purple-500 bg-clip-text text-transparent
          transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Smarter money <br />
                    management for your business
                </h1>

                <p
                    className={`mt-8 max-w-3xl mx-auto text-lg md:text-xl font-medium
          transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"
                        }`}
                >
                    We are a team of developers who are passionate about creating
                    beautiful and functional websites.
                </p>

                <div
                    className={`mt-10 flex justify-center gap-4
          transition-all duration-500 delay-500 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
                        }`}
                >
                    <Button size="lg" className="rounded-full">
                        Start Free Trial
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </div>
            </section>
        </div>
    )
}
