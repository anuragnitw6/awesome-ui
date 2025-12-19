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

export default function HeroSection5() {
    return (
        <div className="flex min-h-screen flex-col absolute inset-0 bg-gradient-to-br from-white via-purple-500/20 to-white-500/20 font-sans">
            {/* Header */}
            <header className="m-6 bg-black rounded-full">
                <div className="max-w-7xl mx-auto flex items-center p-4 gap-4">
                    {/* Mobile Navigation - Menu Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-8 px-2">
                                <Link href="/docs" className="text-lg transition-colors pl-4 py-2 text-white hover:text-black">
                                    Home
                                </Link>
                                <Link href="/docs" className="text-lg transition-colors pl-4 py-2 text-white hover:text-black">
                                    About
                                </Link>
                                <Link href="/docs" className="text-lg transition-colors pl-4 py-2 text-white hover:text-black">
                                    Features
                                </Link>
                                <Link href="/docs" className="text-lg transition-colors pl-4 py-2 text-white hover:text-black">
                                    Pricing
                                </Link>
                                <div className="flex flex-col gap-2 mt-4">
                                    <Button size="lg" variant="outline" className="w-full bg-purple-500/10 text-purple-500 font-medium text-lg">
                                        Login
                                    </Button>
                                    <Button size="lg" variant="outline" className="w-full bg-white text-black font-medium text-lg">
                                        Signup
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList className="items-center">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/docs"
                                            className={`${navigationMenuTriggerStyle()} text-white hover:text-black focus:text-black data-[state=open]:text-black data-[active=true]:text-black`}
                                            style={{ fontSize: "1.2rem" , fontWeight: "600" , lineHeight: "1.5" , letterSpacing: "0.05em" , textTransform: "uppercase" , fontFamily: "sans-serif" }}
                                        >
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/docs"
                                            className={`${navigationMenuTriggerStyle()} text-white hover:text-black focus:text-black data-[state=open]:text-black data-[active=true]:text-black`}
                                            style={{ fontSize: "1.2rem" , fontWeight: "600" , lineHeight: "1.5" , letterSpacing: "0.05em" , textTransform: "uppercase" , fontFamily: "sans-serif" }}
                                        >
                                            About
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/docs"
                                            className={`${navigationMenuTriggerStyle()} text-white hover:text-black focus:text-black data-[state=open]:text-black data-[active=true]:text-black`}
                                            style={{ fontSize: "1.2rem" , fontWeight: "600" , lineHeight: "1.5" , letterSpacing: "0.05em" , textTransform: "uppercase" , fontFamily: "sans-serif" }}
                                        >
                                            Features
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/docs"
                                            className={`${navigationMenuTriggerStyle()} text-white hover:text-black focus:text-black data-[state=open]:text-black data-[active=true]:text-black`}
                                            style={{ fontSize: "1.2rem" , fontWeight: "600" , lineHeight: "1.5" , letterSpacing: "0.05em" , textTransform: "uppercase" , fontFamily: "sans-serif" }}
                                        >
                                            Pricing
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-2">
                        <Button size="lg" variant="outline" className="bg-white text-black rounded-full font-medium text-lg">
                            Login
                        </Button>
                        <Button size="lg" variant="outline" className="bg-white text-black rounded-full font-medium text-lg">
                            Signup
                        </Button>
                    </div>
                </div>
            </header>
            <div className="m-6 text-center">
                <div className="flex flex-col items-center justify-center">
                    <h6 className="text-xl mt-10 md:text-2xl text-black font-medium bg-purple-500/10 px-4 py-2 rounded-full">Connect with us</h6>
                </div>
                <h1 className="text-6xl md:text-7xl font-semibold mt-20 bg-gradient-to-r from-black to-purple-500 bg-clip-text text-transparent">Smarter money  <br />
                management for your business</h1>
                <p className="text-xl md:text-2xl text-black font-medium max-w-3xl mx-auto mt-10">
                    We are a team of developers <br /> who are passionate about creating beautiful and functional websites.
                </p>
                <Button size="lg" variant="outline" className="bg-black text-white rounded-full font-medium text-lg mt-10">
                    Start Free Trial
                </Button>

                <Button size="lg" variant="outline" className="bg-white ml-4 mt-10 text-black border-2 border-black rounded-full font-medium text-lg">
                    Get Started
                </Button>
            </div>
        </div>
    );
}
