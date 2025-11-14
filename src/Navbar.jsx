import { useState } from 'react'
import { Menu, X, GraduationCap, Bot } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#hexahelix', label: 'Hexahelix' },
    { href: '#demo', label: 'Demo' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 grid place-items-center text-white shadow-md shadow-indigo-500/25">
              <Bot className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight text-slate-800">Sosio.AI</p>
              <p className="text-[11px] text-slate-500">AI x Sociology</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#demo" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors">
              <GraduationCap className="size-4" />
              Coba Sekarang
            </a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg text-slate-700 hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg bg-slate-900 text-white">
              Coba Platform
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
