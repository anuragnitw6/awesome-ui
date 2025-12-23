"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function HeroSection8() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const maxParticles = 80

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()

    window.addEventListener("resize", resize)

    const createParticles = () => {
      particles.length = 0
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: 1 + Math.random() * 2,
        })
      }
    }

    createParticles()

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // solid black background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // particles (e47200)
      ctx.fillStyle = "rgba(228, 114, 0, 0.8)"
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      // connecting lines with same hue
      ctx.strokeStyle = "rgba(228, 114, 0, 0.25)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const alpha = 1 - dist / 120
            ctx.strokeStyle = `rgba(228, 114, 0, ${alpha * 0.35})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(draw)
    }

    animationFrameId = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden font-sans">
      {/* particles background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      />

      {/* overlay tint behind particles so they stay visible */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-[#00000b] via-[#000000] to-[#000000]" />

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
              {["Features", "About", "Blog", "Help"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className={`${navigationMenuTriggerStyle()} bg-transparent px-3 py-1 text-sm font-medium text-amber-900 hover:bg-amber-900/10 hover:text-black`}
                    >
                      {item}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:items-start md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-900/80">
            Task planner • Focus mode • Progress streaks
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-amber-900 md:text-5xl lg:text-6xl">
            Make every
            <br />
            day a win
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-amber-900/80 md:text-lg">
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
      </main>
    </div>
  )
}


