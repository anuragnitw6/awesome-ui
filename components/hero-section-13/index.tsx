"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const text = "Build. Ship. Scale."

export function HeroSection13() {
    const [displayed, setDisplayed] = useState("")

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1))
            i++
            if (i === text.length) clearInterval(interval)
        }, 80)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="min-h-screen flex items-center justify-center text-center">
            <div>
                <h1 className="text-6xl font-bold">
                    {displayed}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-block ml-1"
                    >
                        |
                    </motion.span>
                </h1>

                <p className="mt-6 text-lg text-muted-foreground">
                    The fastest way to build modern applications.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <Button size="lg">Start now</Button>
                    <Button size="lg" variant="outline">
                        Docs
                    </Button>
                </div>
            </div>
        </section>
    )
}
