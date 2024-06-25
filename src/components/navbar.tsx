"use client"
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"
import { Folders, Heart, House, Layers, Lightbulb, Moon, MousePointer2, Sun, WalletCards } from "lucide-react"
import { useTheme } from "next-themes"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const bottom = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 0.25],
    // Into these values:
    [-46, 18],
    { ease: cubicBezier(0.32, 0, 0.67, 0) }
  )
  const opacity = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 0.25],
    // Into these values:
    [0, 1],
    { ease: cubicBezier(0.16, 1, 0.3, 1) }
  )

  return (
    <motion.div style={{ bottom, opacity }} className="fixed inset-x-0">
      <div className="flex items-center gap-1.5 sm:gap-3 scale-[85%] sm:scale-100 justify-center">
        <div
          className="rounded-lg blur-[.5px] backdrop-blur-xl bg-[#0A0A0A]/70 border border-gray-600 shadow-lg"
          onClick={() => {
            if (theme === "dark") setTheme("light")
            else setTheme("dark")
          }}
        >
          <div className="p-3 opacity-50 cursor-pointer">
            {theme !== "light" ? <Sun strokeWidth={2} size={20} /> : <Moon strokeWidth={2} size={20} />}
          </div>
        </div>
        <div className="flex rounded-lg blur-[.5px] backdrop-blur-xl bg-[#0A0A0A]/70 items-center border border-gray-600 shadow-lg">
          <div className="p-3 opacity-50 cursor-pointer">
            <House strokeWidth={2} size={20} />
          </div>
          <div className="p-3 opacity-50 cursor-pointer">
            <Lightbulb strokeWidth={2} size={20} />
          </div>
          <div className="p-3 opacity-50 cursor-pointer">
            <Folders strokeWidth={2} size={20} />
          </div>
          <div className="p-3 opacity-50 cursor-pointer">
            <WalletCards strokeWidth={2} size={20} />
          </div>
          <div className="p-3 opacity-50 cursor-pointer">
            <Heart strokeWidth={2} size={20} />
          </div>
          <div className="p-3 opacity-50 cursor-pointer">
            <Layers strokeWidth={2} size={20} />
          </div>
        </div>

        <div className="rounded-lg blur-[.5px] backdrop-blur-xl bg-[#0A0A0A]/70 border border-gray-600 shadow-lg">
          <div className="p-3 opacity-50 cursor-pointer">
            <MousePointer2 strokeWidth={2} size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
