"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection12() {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
            {/* Animated background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-3xl"
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-3xl px-6"
            >
                <h1 className="text-6xl font-bold">
                    AI-powered <span className="text-purple-500">business</span>
                    <br /> decisions
                </h1>

                <p className="mt-6 text-lg text-muted-foreground">
                    Automate insights, predict growth, and make smarter decisions with AI.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <Button size="lg">Get started</Button>
                    <Button size="lg" variant="outline">
                        Learn more
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
