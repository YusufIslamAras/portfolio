"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-white relative z-0">
      
      {/* --- CAFCAFLI ARKA PLAN EFEKTİ --- */}
      <ParticlesBackground />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          DEV.
        </h1>
        <div className="flex gap-6 font-medium">
          <a href="#projects" className="hover:text-cyan-400 transition">Projeler</a>
          <a href="#contact" className="hover:text-cyan-400 transition">İletişim</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20">
        
        {/* Arka plan ışıkları */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 -z-10"></div>

        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-10 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_60px_rgba(6,182,212,0.6)] z-10"
        >
          {/* public klasöründe ben.jpg olduğundan emin ol */}
          <img src="/ben.jpg" alt="Yusuf İslam Aras" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10"
        >
          <span className="px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 font-semibold text-sm mb-6 inline-block shadow-sm shadow-cyan-500/30">
            Full-Stack Developer
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Yusuf İslam Aras
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Modern web teknolojileri ile <span className="text-cyan-400 font-normal">kullanıcı dostu</span>, <span className="text-cyan-400 font-normal">hızlı</span> ve <span className="text-cyan-400 font-normal">ölçeklenebilir</span> dijital çözümler üretiyorum.
          </p>
          
          <div className="flex gap-6 justify-center">
            <a href="#projects" className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold transition shadow-lg shadow-cyan-500/30 transform hover:scale-105">
              Projelerimi Gör
            </a>
            <a href="#contact" className="px-10 py-4 border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-900/50 rounded-xl font-bold transition transform hover:scale-105 text-slate-300 hover:text-cyan-400">
              İletişime Geç
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- TEKNOLOJİLER --- */}
      <section className="py-24 bg-slate-950/80 border-y border-cyan-500/20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Uzmanlık Alanlarım</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <motion.div whileHover={{scale: 1.2, color: "#22d3ee"}} className="flex flex-col items-center gap-4 text-slate-400 transition cursor-pointer">
                <FaCode className="text-6xl" /> <span className="text-lg font-semibold">.NET Core</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.2, color: "#22d3ee"}} className="flex flex-col items-center gap-4 text-slate-400 transition cursor-pointer">
                <FaLaptopCode className="text-6xl" /> <span className="text-lg font-semibold">React / Next.js</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.2, color: "#22d3ee"}} className="flex flex-col items-center gap-4 text-slate-400 transition cursor-pointer">
                <FaRocket className="text-6xl" /> <span className="text-lg font-semibold">Tailwind CSS</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJELER --- */}
      <section id="projects" className="py-28 container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">Proje Vitrinim</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Proje 1: Şahin Lojistik */}
          <motion.div 
            whileHover={{ y: -15, scale: 1.02 }}
            className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group"
          >
            <div className="h-56 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
               {/* public/proje1.jpg dosyası buraya gelecek */}
               <img src="/proje1.jpg" alt="Şahin Lojistik" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Şahin Lojistik</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Kurumsal bir lojistik firması için geliştirilen, modern arayüze sahip, SEO uyumlu ve hızlı web çözümü.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">ASP.NET</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">Bootstrap</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">Responsive</span>
              </div>
            </div>
          </motion.div>

           {/* Proje 2: Mobil Uygulama */}
           <motion.div 
            whileHover={{ y: -15, scale: 1.02 }}
            className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group"
          >
            <div className="h-56 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
               {/* public/proje2.jpg dosyası buraya gelecek */}
               <img src="/proje2.jpg" alt="Mobil Uygulama" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Canım Ailem App</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                .NET MAUI ile geliştirilen, Android platformunda çalışan, veri tabanı bağlantılı mobil rehber uygulaması.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">.NET MAUI</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">C#</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">SQLite</span>
              </div>
            </div>
          </motion.div>

           {/* Proje 3: Oyun (Eğer resmin yoksa bunu silebilirsin veya görselini bulup koyabilirsin) */}
           <motion.div 
            whileHover={{ y: -15, scale: 1.02 }}
            className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group"
          >
            <div className="h-56 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
               {/* public/proje3.jpg dosyası buraya gelecek */}
               <img src="/proje3.jpg" alt="Halısaha Bul" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Halısaha Bul</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                C# ve oyun motoru mantığı kullanılarak geliştirilmiş, fizik tabanlı çarpışma testleri içeren mobil oyun.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">Game Dev</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">Algoritma</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-16 border-t border-cyan-500/20 bg-slate-950 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Birlikte Çalışalım</h2>
        <div className="flex justify-center gap-8 text-3xl mb-10">
            <a href="https://github.com/YusufIslamAras" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition transform"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/yusuf-islam-aras/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition transform"><FaLinkedin /></a>
            <a href="mailto:yusufislamras08@gmail.com" className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition transform"><FaEnvelope /></a>
        </div>
        <p className="text-slate-500">© 2026 Yusuf İslam Aras. <span className="text-cyan-500">Next.js</span> ile geliştirilmiştir.</p>
      </footer>
    </main>
  );
}