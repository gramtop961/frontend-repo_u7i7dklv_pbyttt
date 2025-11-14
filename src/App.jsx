import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Bot, Brain, BookOpenText, Newspaper, ClipboardCheck, LayoutDashboard, Users, Globe2, Building2, School, Radio, FlaskConical, Quote, Github, Twitter, Linkedin } from 'lucide-react'
import Navbar from './Navbar'
import Section from './components/Section'

const AccentBadge = ({ children }) => (
  <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-3 py-1 rounded-full shadow-sm">
    {children}
  </span>
)

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group relative rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200/60 p-6 shadow-sm hover:shadow-lg transition-all">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/10 group-hover:to-fuchsia-500/10 transition-colors" />
    <div className="relative">
      <div className="size-12 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white grid place-items-center shadow-md shadow-indigo-500/20">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  </div>
)

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Hero */}
      <Section id="home" className="pt-28 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <AccentBadge>Futuristic • Scientific • Credible</AccentBadge>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Sosio.AI — Platform Pembelajaran Sosiologi Berbasis Artificial Intelligence
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
              Meningkatkan Complex Problem Solving, Literasi Digital, dan Dialektika Kritis di Era Digital Society.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">
                Mulai Eksplorasi
                <ArrowRight className="size-4" />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 text-slate-800 px-5 py-3 text-sm font-medium hover:bg-slate-50">
                Demo Platform
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Integrasi AI + pendidikan + analisis isu sosial — dirancang untuk HOTS, anti-hoax, dan SDGs 4 & 17.
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-slate-50/60">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Tentang Sosio.AI</h2>
            <p className="mt-4 text-slate-600">
              Sosio.AI adalah platform pembelajaran sosiologi bertenaga AI yang menggabungkan analisis berita, pembelajaran berbasis kasus, chatbot dialektika, dan simulasi penelitian. Misinya: meningkatkan keterampilan berpikir tingkat tinggi (analisis–evaluasi–kreasi), melawan hoaks, dan mendukung SDGs 4 & 17.
            </p>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200/60 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Misi Utama</h3>
            <ul className="mt-3 space-y-2 text-slate-600 text-sm">
              <li>• Memperkuat HOTS (analisis, evaluasi, kreasi)</li>
              <li>• Melatih literasi digital dan anti hoaks</li>
              <li>• Mendukung kolaborasi SDGs 2030 (Tujuan 4 & 17)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Fitur Inti</h2>
          <AccentBadge>AI-first • Academic-yet-Youthful</AccentBadge>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={Bot} title="AI Chatbot Dialektika" desc="Debat, berargumen, dan latihan berpikir reflektif bersama ‘Provokator Dialektika’." />
          <Card icon={FlaskConical} title="Social Research Simulator" desc="Penelitian mini: rumusan masalah → kerangka teori → analisis data sosial." />
          <Card icon={Newspaper} title="Trend & News Analyzer" desc="Bantu membedakan fakta, opini, framing, dan bias media." />
          <Card icon={ClipboardCheck} title="Auto-Assessment System" desc="Evaluasi otomatis berbasis NLP untuk esai, argumen, dan laporan penelitian." />
          <Card icon={LayoutDashboard} title="Teacher Dashboard" desc="Learning analytics, rekomendasi pedagogis, dan monitoring HOTS siswa." />
          <Card icon={Brain} title="HOTS Booster" desc="Latihan analisis–evaluasi–kreasi dengan skenario nyata dan umpan balik AI." />
        </div>
      </Section>

      {/* Hexahelix */}
      <Section id="hexahelix" className="bg-gradient-to-b from-white to-slate-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Model Kolaborasi Hexahelix</h2>
        <p className="mt-4 text-slate-600 max-w-3xl">Sosio.AI berkolaborasi lintas pemangku kepentingan untuk mengakselerasi ekosistem literasi digital dan penelitian sosial terapan.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={Building2} title="Government" desc="Kebijakan literasi digital & penguatan kurikulum anti-hoaks." />
          <Card icon={School} title="Academia" desc="Pengembangan kurikulum, riset terapan, dan mentoring metodologi." />
          <Card icon={LayoutDashboard} title="Industry (Edutech)" desc="Skalabilitas teknologi, UI/UX pembelajaran, dan integrasi AI." />
          <Card icon={Users} title="Community & Schools" desc="Komunitas guru & siswa untuk proyek berbasis isu lokal." />
          <Card icon={Radio} title="Media" desc="Kampanye literasi kritis, klarifikasi hoaks, dan edukasi publik." />
          <Card icon={FlaskConical} title="Social Researchers" desc="Desain penelitian, validasi instrumen, dan publikasi temuan." />
        </div>
        <div className="mt-10 rounded-2xl border border-slate-200/60 p-6 bg-white/70 backdrop-blur-xl">
          <p className="text-sm text-slate-600">Diagram sederhana: enam node melingkar terhubung ke pusat “Sosio.AI”. (Placeholder visual)</p>
          <div className="mt-4 grid grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 border border-slate-200" />
            ))}
          </div>
        </div>
      </Section>

      {/* Why it matters */}
      <Section id="why" className="bg-slate-900 text-white">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Mengapa Penting?</h2>
          <AccentBadge>Data Highlights</AccentBadge>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
            <p className="text-4xl font-extrabold">30%</p>
            <p className="mt-2 text-sm text-white/80">Siswa Indonesia mencapai level membaca PISA ≥ 2.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
            <p className="text-4xl font-extrabold">69.9%</p>
            <p className="mt-2 text-sm text-white/80">Masih berada di level 1.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
            <p className="text-4xl font-extrabold">↑</p>
            <p className="mt-2 text-sm text-white/80">Peredaran hoaks meningkat setiap tahun.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
            <p className="text-4xl font-extrabold">SDGs</p>
            <p className="mt-2 text-sm text-white/80">AI literacy bagian dari agenda 2030.</p>
          </div>
        </div>
      </Section>

      {/* Demo */}
      <Section id="demo">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Coba Demo Interaktif</h2>
            <p className="mt-3 text-slate-600">Uji coba chatbot dialektika atau jelajahi contoh kasus isu sosial. (Tombol ini mengarah ke placeholder interaktif)</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-5 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all">
                Coba AI Chatbot
                <Bot className="size-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 text-slate-800 px-5 py-3 text-sm font-medium hover:bg-slate-50">
                Eksplor Kasus Sosial
                <BookOpenText className="size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200/60 p-6 shadow-sm">
            <p className="text-sm text-slate-600">Placeholder interaktif: area percakapan chatbot atau kartu studi kasus.</p>
            <div className="mt-4 h-56 rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10" />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="bg-slate-50/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Testimoni & Studi Kasus</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Dina, Guru Sosiologi',
              quote: 'Sosio.AI membantu siswa berargumen berdasarkan data dan teori, bukan sekadar opini.',
            },
            {
              name: 'Rafi, Siswa SMA',
              quote: 'Seru! Debat dengan AI bikin aku sadar pentingnya cek fakta sebelum berpendapat.',
            },
            {
              name: 'Tim Kurikulum',
              quote: 'Analitik pembelajaran memberi insight tentang HOTS siswa dan rekomendasi pengayaan.',
            },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200/60 p-6 shadow-sm">
              <Quote className="size-6 text-indigo-600" />
              <p className="mt-3 text-slate-700">{t.quote}</p>
              <p className="mt-2 text-sm text-slate-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-slate-900 font-semibold">Sosio.AI</p>
              <p className="text-sm text-slate-500">Powered by AI for Critical Digital Society.</p>
              <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                <a href="#home" className="hover:text-slate-900">Home</a>
                <a href="#features" className="hover:text-slate-900">Features</a>
                <a href="#hexahelix" className="hover:text-slate-900">Research</a>
                <a href="#demo" className="hover:text-slate-900">Educator Dashboard</a>
                <a href="#contact" className="hover:text-slate-900">Contact</a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="size-9 grid place-items-center rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600"><Twitter className="size-4" /></a>
              <a href="#" className="size-9 grid place-items-center rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600"><Linkedin className="size-4" /></a>
              <a href="#" className="size-9 grid place-items-center rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600"><Github className="size-4" /></a>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Sosio.AI — All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
