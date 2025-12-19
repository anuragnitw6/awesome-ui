"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { ArrowUpRightIcon, Menu } from "lucide-react";
import { IconFolderCode } from "@tabler/icons-react"
import Image from "next/image";
import Link from "next/link";
import { Bar, BarChart } from "recharts"

import {
    ChartContainer,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export default function HeroSection3() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 font-sans">
            {/* Header */}
            <header className="w-full">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-8 pt-6">
                    <Image src="/next.svg" alt="Logo" width={100} height={100} />

                    {/* Desktop Navigation */}
                    <NavigationMenu viewport={false} className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/docs" className={navigationMenuTriggerStyle()}>
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/docs" className={navigationMenuTriggerStyle()}>
                                        About
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/docs" className={navigationMenuTriggerStyle()}>
                                        Features
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/docs" className={navigationMenuTriggerStyle()}>
                                        Pricing
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-8 px-2">
                                <Link href="/docs" className="text-lg font-medium hover:text-purple-500 transition-colors pl-4 py-2">
                                    Home
                                </Link>
                                <Link href="/docs" className="text-lg font-medium hover:text-purple-500 transition-colors pl-4 py-2">
                                    About
                                </Link>
                                <Link href="/docs" className="text-lg font-medium hover:text-purple-500 transition-colors pl-4 py-2">
                                    Features
                                </Link>
                                <Link href="/docs" className="text-lg font-medium hover:text-purple-500 transition-colors pl-4 py-2">
                                    Pricing
                                </Link>
                                <Button size="lg" variant="outline" className="w-full bg-purple-500/10 text-purple-500 font-medium text-lg mt-6">
                                    Login
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <Button size="lg" variant="outline" className="hidden md:flex bg-purple-500/10 text-purple-500 font-medium text-lg">
                        Login
                    </Button>
                </div>
            </header>

            {/* Hero Content */}
            <div className="flex-1 flex items-center relative">
                {/* Full-width gradient background */}
                <div className="absolute inset-0">
                    {/* Main gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 opacity-10"></div>

                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-transparent to-blue-600/30"></div>

                    {/* Decorative animated elements */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

                    {/* Geometric patterns */}
                    <div className="absolute top-20 left-20 w-20 h-20 border-2 border-purple-300/30 rounded-lg rotate-12"></div>
                    <div className="absolute bottom-32 right-24 w-16 h-16 border-2 border-blue-300/30 rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-indigo-300/20 rounded-lg -rotate-12"></div>
                </div>

                {/* Centered content */}
                <div className="max-w-5xl mx-auto px-8 py-12 w-full relative z-10">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="inline-flex">
                            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                                ✨ New Feature
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                            Transform Your Digital Experience
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                            Discover powerful tools and features designed to elevate your workflow.
                            Build faster, scale smarter, and deliver exceptional results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                                Get Started
                            </Button>
                            <Button size="lg" variant="outline" className="border-purple-300 dark:border-purple-700">
                                Learn More
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-8 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-purple-600">10K+</p>
                                <p className="text-sm text-muted-foreground">Active Users</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-600">99%</p>
                                <p className="text-sm text-muted-foreground">Satisfaction</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-purple-600">24/7</p>
                                <p className="text-sm text-muted-foreground">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
