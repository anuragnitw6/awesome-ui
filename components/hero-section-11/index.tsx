"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
}

export function HeroSection11() {
    return (
        <section className="min-h-screen flex items-center justify-center text-center px-6">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-4xl"
            >
                <motion.span
                    variants={item}
                    className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 font-medium"
                >
                    Smart finance platform
                </motion.span>

                <motion.h1
                    variants={item}
                    className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-black to-purple-500 bg-clip-text text-transparent"
                >
                    Smarter money <br /> for modern businesses
                </motion.h1>

                <motion.p
                    variants={item}
                    className="mt-6 text-lg text-muted-foreground"
                >
                    Track revenue, control spending, and grow faster with real-time
                    insights.
                </motion.p>

                <motion.div
                    variants={item}
                    className="mt-10 flex justify-center gap-4"
                >
                    <Button size="lg" className="rounded-full">
                        Start free trial
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full">
                        View demo
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    )
}
