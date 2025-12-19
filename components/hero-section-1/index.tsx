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

export default function HeroSection1() {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
            <header className="flex items-center justify-between px-8 pt-6 pb-6">
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
                            <Link href="/docs" className="text-lg font-medium hover:text-blue-500 transition-colors pl-4 py-2">
                                Home
                            </Link>
                            <Link href="/docs" className="text-lg font-medium hover:text-blue-500 transition-colors pl-4 py-2">
                                About
                            </Link>
                            <Link href="/docs" className="text-lg font-medium hover:text-blue-500 transition-colors pl-4 py-2">
                                Features
                            </Link>
                            <Link href="/docs" className="text-lg font-medium hover:text-blue-500 transition-colors pl-4 py-2">
                                Pricing
                            </Link>
                            <Button size="lg" variant="outline" className="w-full bg-blue-500/10 text-blue-500 font-medium text-lg mt-6">
                                Login
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>


                <Button size="lg" variant="outline" className="hidden md:flex bg-blue-500/10 text-blue-500 font-medium text-lg">
                    Login
                </Button>
            </header>

            {/* Horizontal divider line */}
            <div className="w-full border-b border-gray-200 dark:border-gray-800"></div>

            <div className="w-full px-8 mt-12 text-center">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <h6 className="bg-slate-500/10 text-slate-500 border-slate-500 border px-4 py-1 rounded-full">Join Program</h6>
                    <h1 className="text-6xl md:text-7xl font-semibold leading-tight">
                        Build Amazing Products<br />
                        With Modern Technology
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                        Create stunning UI/UX designs using a known framework.
                    </p>
                </div>
            </div>
            <div className="w-full px-8 mt-12 text-center">
                <Button size="lg" variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500 font-medium text-lg">
                    Get Started
                </Button>
            </div>
            <div className="w-full max-w-3xl mx-auto px-8 mt-5 h-[400px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </div>
        </div>
    );
}
