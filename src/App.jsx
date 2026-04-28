import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Download, ChevronRight, Apple, Play, Focus, Lock, PieChart, Smartphone, AlertTriangle, MousePointerClick, CheckCircle2, Zap, Mail, MessageSquare, Send } from 'lucide-react';
import PhoneFrame from './components/PhoneFrame';
import MobileApp from './components/MobileApp';
import './index.css';

function App() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[50%] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 h-20 border-b border-white/5 bg-[#030305]/80 backdrop-blur-md z-50 transition-all">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="w-7 h-7 text-indigo-500" />
            <span className="font-bold text-xl tracking-tight text-white">BrainGuard</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Home</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#protection" className="hover:text-white transition-colors">Protection Levels</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors hidden md:block">
            Download APK
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            ✨ BrainGuard is now in Public Beta <ChevronRight className="w-4 h-4 text-gray-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tighter leading-[1.1] mb-6 max-w-4xl"
          >
            Reclaim your focus. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
              Master your time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            BrainGuard isn't just a timer. It's a system-level shield that blocks distractions,
            forces deep work, and rebuilds your attention span from the ground up.
          </motion.p>

          {/* Interactive Phone Demo */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.2 }}
            className="w-full flex flex-col items-center relative mb-24 mt-10"
          >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-indigo-500/20 blur-[100px] rounded-full -z-10" />

            <div className="relative group perspective-1000 mb-8">
              <div className="absolute -right-12 top-1/4 translate-x-full hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50">
                <div className="bg-white text-black text-xs font-bold px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 whitespace-nowrap animate-bounce">
                  ← Interact with the demo!
                </div>
              </div>
              <div className="transform-gpu transition-transform duration-700 hover:scale-[1.02]">
                <PhoneFrame>
                  <MobileApp />
                </PhoneFrame>
              </div>
            </div>

            {/* Helper Text / Description directly below the demo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-lg w-full bg-white/[0.03] border border-white/10 p-5 rounded-3xl backdrop-blur-md flex items-start gap-4 shadow-2xl"
            >
              <div className="p-2 bg-indigo-500/20 rounded-full shrink-0">
                <MousePointerClick className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold mb-1">Coba Demo Interaktif di Atas!</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Layar *smartphone* di atas bukanlah gambar mati. Anda dapat berinteraksi langsung dengannya:
                </p>
                <ul className="text-sm text-gray-400 mt-2 space-y-1 ml-4 list-disc marker:text-indigo-500">
                  <li>Klik menu navigasi di bawah (Tasks, Shield, Stats).</li>
                  <li>Pilih <strong>Protection Level</strong> pada tab Shield.</li>
                  <li>Mulai <strong>Focus Timer</strong> dan lihat animasi perubahannya.</li>
                </ul>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </main>

      {/* Feature Details Section with scroll animations */}
      <section id="features" className="relative z-10 py-24 bg-black border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for Unbreakable Focus</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Kami menyatukan desain antarmuka premium dengan sistem pemblokiran level OS untuk memastikan Anda mencapai kondisi <i>deep work</i> tanpa hambatan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                <Focus className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Forced Focus Session</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Timer Pomodoro kami bukan sekadar penghitung waktu mundur. Saat sesi dimulai, BrainGuard mengaktifkan <strong>Strict Mode</strong>. Layar beralih menggunakan efek <i>glow</i> zamrud untuk mensimulasikan zona fokus. Notifikasi akan dibungkam dan sistem siap mendeteksi jika Anda membuka aplikasi daftar hitam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                <PieChart className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Deep Habit Analytics</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Visualisasikan konsistensi Anda. Grafik mingguan mengkalkulasi waktu total masuk ke dalam zona fokus, melacak penyelesaian To-Do list, dan menghitung berapa banyak percobaan membuka aplikasi media sosial yang berhasil dicegah (<i>Distractions Blocked</i>).
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 p-10 rounded-[2.5rem] hover:bg-white/[0.04] transition-colors relative overflow-hidden group flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Task Management</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Kelola tugas dengan kategori dan prioritas. Cukup usap (<i>swipe</i>) untuk menandai selesai. Tugas Anda akan otomatis terhubung ke sesi fokus untuk melacak apa yang sedang Anda kerjakan secara langsung.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 p-10 rounded-[2.5rem] hover:bg-white/[0.04] transition-colors relative overflow-hidden group flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <Smartphone className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Thumb-Zone Ergonomics</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Didesain agar nyaman dioperasikan dengan satu tangan. Semua elemen krusial dan navigasi utama diletakkan di bagian bawah layar (*bottom nav*) agar selalu terjangkau oleh ibu jari Anda.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              id="protection"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group col-span-1 md:col-span-2 shadow-2xl scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                    <AlertTriangle className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Dynamic Protection Levels</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    BrainGuard memahami bahwa setiap orang memiliki tingkat kecanduan digital yang berbeda. Oleh karena itu, kami menyediakan tiga tingkatan proteksi yang mengunci aplikasi media sosial dan game Anda (dapat diuji coba pada tab <strong>Shield</strong> di mockup):
                  </p>
                </div>

                <div className="flex-1 w-full space-y-4">
                  <div className="bg-[#0a0a0a]/80 p-5 rounded-2xl border border-white/5 backdrop-blur-md transition-transform hover:scale-[1.02]">
                    <h4 className="text-white font-semibold flex items-center gap-2 mb-2"><span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span> Light (Ringan)</h4>
                    <p className="text-sm text-gray-400">Aplikasi yang diblokir tetap bisa dibuka setelah melewati layar peringatan khusus, notifikasi sekadar dibisukan sementara.</p>
                  </div>
                  <div className="bg-[#0a0a0a]/80 p-5 rounded-2xl border border-white/5 backdrop-blur-md transition-transform hover:scale-[1.02]">
                    <h4 className="text-white font-semibold flex items-center gap-2 mb-2"><span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></span> Normal (Standar)</h4>
                    <p className="text-sm text-gray-400">Aplikasi diblokir secara sistem. Jika mendesak, pengguna masih bisa menekan tombol "Forfeit Session" untuk menyerah dan membatalkan pemblokiran.</p>
                  </div>
                  <div className="bg-red-500/10 p-5 rounded-2xl border border-red-500/20 backdrop-blur-md transition-transform hover:scale-[1.02]">
                    <h4 className="text-red-400 font-semibold flex items-center gap-2 mb-2"><span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></span> Hardcore (Ekstrem)</h4>
                    <p className="text-sm text-red-200/80">Jalan buntu bagi prokrastinasi. Tombol batal dihilangkan. Satu-satunya cara untuk membuka aplikasi yang diblokir saat sesi berjalan adalah dengan melakukan <i>Restart</i> (Reboot) HP secara penuh.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#030305] relative z-10 border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row gap-16 items-center"
          >
            {/* Background glowing orb */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex-1 z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Mari Terhubung</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Punya pertanyaan teknis seputar sistem pemblokiran BrainGuard, tertarik melakukan kerjasama, atau sekadar ingin memberi masukan? Silakan sapa kami!
              </p>

              <div className="space-y-6">
                <a href="mailto:faizal.smk.tjkt@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Hubungi Developer</h4>
                    <p className="text-sm text-gray-500">faizal.smk.tjkt@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Komunitas Discord</h4>
                    <p className="text-sm text-gray-500">Bergabung dengan 1.200+ pengguna lainnya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full z-10">
              <form className="space-y-4 bg-black/40 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nama Anda</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Alamat Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                  <textarea
                    rows="4"
                    placeholder="Apa yang ingin Anda sampaikan?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button type="button" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2">
                  Kirim Pesan <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 bg-gradient-to-b from-black to-[#050508] border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap mengambil alih waktu Anda?</h2>
          <p className="text-gray-400 text-lg mb-10">BrainGuard dirancang eksklusif bagi mereka yang serius ingin menghilangkan gangguan dan fokus pada hal yang bermakna.</p>
          <button className="bg-emerald-500 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-400 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            Download for Android
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-600" />
            <span className="font-semibold tracking-tight">BrainGuard 2026</span>
          </div>
          <p>Designed for pure focus. Built with React + Tailwind.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
