"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface NavChildItem {
  name: string
  url: string
}

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  children?: NavChildItem[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "")
  const [isMobile, setIsMobile] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const activeItemName = useMemo(() => {
    const matchedItem = items.find((item) => {
      if (item.url !== "#" && item.url === pathname) {
        return true
      }

      return item.children?.some((child) => child.url === pathname)
    })

    return matchedItem?.name ?? items[0]?.name ?? ""
  }, [items, pathname])

  useEffect(() => {
    setActiveTab(activeItemName)
  }, [activeItemName])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 sm:top-0 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 rounded-full border border-[rgba(229,231,235,0.9)] bg-white/95 px-1 py-1 shadow-lg backdrop-blur-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const hasChildren = Boolean(item.children?.length)

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => hasChildren && setOpenDropdown(item.name)}
              onMouseLeave={() => hasChildren && setOpenDropdown(null)}
            >
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(item.name)
                    setOpenDropdown((current) =>
                      current === item.name ? null : item.name,
                    )
                  }}
                  className={cn(
                    "relative flex cursor-pointer items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                    "text-[var(--primary)]/85 hover:text-[var(--secondary)]",
                    isActive && "text-[var(--secondary)]",
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "hidden md:block transition-transform duration-200",
                      openDropdown === item.name && "rotate-180",
                    )}
                  />
                  {isActive && (
                    <TubelightIndicator />
                  )}
                </button>
              ) : (
                <Link
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name)
                    setOpenDropdown(null)
                  }}
                  className={cn(
                    "relative flex cursor-pointer items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                    "text-[var(--primary)]/85 hover:text-[var(--secondary)]",
                    isActive && "text-[var(--secondary)]",
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <TubelightIndicator />
                  )}
                </Link>
              )}

              {hasChildren && openDropdown === item.name && (
                <div
                  className={cn(
                    "absolute left-0 top-full min-w-52 pt-2",
                    isMobile && "left-1/2 -translate-x-1/2",
                  )}
                >
                  <div className="overflow-hidden rounded-2xl border border-[rgba(229,231,235,0.9)] bg-white shadow-xl">
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        href={child.url}
                        onClick={() => {
                          setActiveTab(item.name)
                          setOpenDropdown(null)
                        }}
                        className="block px-5 py-3 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-[var(--secondary)] hover:text-white"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TubelightIndicator() {
  return (
    <motion.div
      layoutId="lamp"
      className="absolute inset-0 -z-10 w-full rounded-full bg-[var(--secondary)]/8"
      initial={false}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <div className="absolute -bottom-[1px] left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[var(--secondary)] md:-bottom-1 md:top-auto">
        <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-[var(--secondary)]/25 blur-md" />
        <div className="absolute -top-1 left-1/2 h-5 w-8 -translate-x-1/2 rounded-full bg-[var(--secondary)]/20 blur-md" />
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--secondary)]/20 blur-sm" />
      </div>
    </motion.div>
  )
}
