"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaRocket, FaDownload, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-white relative z-0">
      
      {/* --- ARKA PLAN --- */}
      <ParticlesBackground />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          DEV.
        </h1>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base font-medium">
          <a href="#about" className="hover:text-cyan-400 transition hidden md:block">Hakkımda</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projeler</a>
          <a href="#contact" className="hover:text-cyan-400 transition">İletişim</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20">
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 -z-10"></div>

        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-10 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_60px_rgba(6,182,212,0.6)] z-10"
        >
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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Yusuf İslam Aras
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Modern web teknolojileri ile kullanıcı dostu ve ölçeklenebilir dijital çözümler üreten, öğrenmeye tutkulu bir yazılımcıyım.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold transition shadow-lg shadow-cyan-500/30 transform hover:scale-105">
              Projelerimi Gör
            </a>
            <a 
              href="/cv.pdf" 
              download 
              className="px-8 py-3 bg-slate-800 border-2 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 rounded-xl font-bold transition transform hover:scale-105 flex items-center gap-2 text-slate-300"
            >
              <FaDownload /> CV İndir
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- HAKKIMDA --- */}
      <section id="about" className="py-20 bg-slate-900/30 border-t border-white/5 relative">
        <div className="container mx-auto px-4 max-w-4xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-950/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
            >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-cyan-400">Hakkımda</span> 
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-4 text-lg">
                    <p>
                        Merhaba! Ben Yusuf. <strong className="text-slate-200"> Bursa</strong>'da yaşayan ve <strong className="text-slate-200">Uludağ Üniversitesi Bilgisayar Programcılığı</strong> mezunu bir geliştiriciyim.
                    </p>
                    <p>
                        Şu ana kadar hem kurumsal hem de freelance projelerde <strong className="text-cyan-400">ASP.NET Web API</strong> ve <strong className="text-cyan-400">React</strong> teknolojilerini kullanarak gerçek dünya çözümleri ürettim. 
                        Kod yazmanın ötesinde, veritabanı optimizasyonundan sunucu yönetimine kadar projenin her aşamasında sorumluluk almayı seviyorum.
                    </p>
                    <div className="pt-4 flex items-center gap-2 text-sm text-cyan-500 font-mono">
                        <FaMapMarkerAlt /> Bursa, Türkiye
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- DENEYİM VE EĞİTİM --- */}
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">Deneyim & Eğitim</h2>
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-8 space-y-12">
            
            {/* ŞAHİN LOJİSTİK */}
            <div className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] md:-left-[41px] top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                
                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition group">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaBriefcase className="text-cyan-400"/> Şahin Lojistik</h3>
                        <span className="text-sm text-cyan-400 font-mono bg-cyan-900/20 px-2 py-1 rounded">2025 (Remote)</span>
                    </div>
                    <h4 className="text-lg text-slate-300 mb-3">Full-Stack Yazılım Geliştirici</h4>
                    <ul className="text-slate-400 list-disc list-inside space-y-2 text-sm md:text-base">
                        <li>Lojistik süreçlerini iyileştiren <strong className="text-slate-200">ASP.NET Web API</strong> tabanlı backend servisleri geliştirdim.</li>
                        <li>Veritabanı şema tasarımı ve sorgu optimizasyonları ile veri erişim hızını artırdım.</li>
                        <li>Farklı sistemler arası veri akışı için <strong className="text-slate-200">RESTful API</strong> entegrasyonlarını gerçekleştirdim.</li>
                        <li>Tamamen uzaktan (Remote) çalışma kültürü ile projeleri bağımsız yönetip zamanında teslim ettim.</li>
                    </ul>
                </div>
            </div>

            {/* AIF BİLİŞİM */}
            <div className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] md:-left-[41px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                
                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition group">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaBuilding className="text-blue-400"/> AIF Bilişim ve Danışmanlık</h3>
                        <span className="text-sm text-blue-400 font-mono bg-blue-900/20 px-2 py-1 rounded">2024 - 2025</span>
                    </div>
                    <h4 className="text-lg text-slate-300 mb-3">Full-Stack Yazılım Geliştirici</h4>
                    <ul className="text-slate-400 list-disc list-inside space-y-2 text-sm md:text-base">
                        <li>Kurumsal projelerde <strong className="text-slate-200">C# / ASP.NET Web API</strong> ile güvenli backend mimarileri kurdum.</li>
                        <li><strong className="text-slate-200">React.js</strong> kullanarak kullanıcı deneyimi yüksek, dinamik arayüzler tasarladım.</li>
                        <li>Gereksinim analizinden canlıya alma (deploy) sürecine kadar tüm döngüde aktif rol aldım.</li>
                        <li><strong className="text-slate-200">Git & GitHub</strong> ile versiyon kontrolü ve takım içi kod entegrasyonunu yönettim.</li>
                    </ul>
                </div>
            </div>

        {/* ULUDAĞ ÜNİVERSİTESİ */}
            <div className="relative pl-8 md:pl-0">
                 <div className="absolute -left-[9px] md:-left-[41px] top-0 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-950 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaGraduationCap className="text-purple-400"/> Uludağ Üniversitesi</h3>
                        <span className="text-sm text-purple-400 font-mono bg-purple-900/20 px-2 py-1 rounded">Mezuniyet</span>
                    </div>
                    <h4 className="text-lg text-slate-300 mb-2">Bilgisayar Programcılığı</h4>
                    
                    {/* YENİ DETAYLI EĞİTİM KISMI */}
                    <ul className="text-slate-400 list-disc list-inside space-y-2 text-sm md:text-base mt-3">
                        <li><strong className="text-slate-200">Nesne Tabanlı Programlama:</strong> C# dili ile algoritma mantığı, veri yapıları ve clean code prensipleri üzerine sağlam bir temel oluşturdum.</li>
                        <li><strong className="text-slate-200">Veritabanı Yönetimi:</strong> SQL, ilişkisel veritabanı tasarımı, normalizasyon ve veri güvenliği konularında yetkinlik kazandım.</li>
                        <li><strong className="text-slate-200">Web Teknolojileri:</strong> İstemci ve sunucu tabanlı programlama dersleri ile modern web mimarisinin çalışma mantığını kavradım.</li>
                        <li><strong className="text-slate-200">Proje Yönetimi:</strong> Eğitim sürecinde geliştirdiğim projelerle yazılım yaşam döngüsü ve takım çalışması deneyimi edindim.</li>
                    </ul>
                </div>
            </div>

        </div>
      </section>

      {/* --- TEKNOLOJİLER --- */}
      <section className="py-24 bg-slate-950/80 border-y border-cyan-500/20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Teknik Yetkinlikler</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <motion.div whileHover={{scale: 1.2, color: "#22d3ee"}} className="flex flex-col items-center gap-4 text-slate-400 transition cursor-pointer">
                <FaCode className="text-5xl md:text-6xl" /> <span className="text-lg font-semibold">.NET Core</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.2, color: "#22d3ee"}} className="flex flex-col items-center gap-4 text-slate-400 transition cursor-pointer">
                <FaLaptopCode className="text-5xl md:text-6xl" /> <span className="text-lg font-semibold">React / Next.js</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.2, color: "#22d3ee"}} className="flex flex-col items-center gap-4 text-slate-400 transition cursor-pointer">
                <FaRocket className="text-5xl md:text-6xl" /> <span className="text-lg font-semibold">Tailwind CSS</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJELER --- */}
      <section id="projects" className="py-28 container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Seçili Projeler</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Proje 1 */}
          <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group">
            <div className="h-56 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
               <img src="sahin-ss.png" alt="Şahin Lojistik" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Şahin Lojistik</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">Kurumsal bir lojistik firması için geliştirilen, modern arayüze sahip, SEO uyumlu web çözümü.</p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">ASP.NET</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">Bootstrap</span>
              </div>
            </div>
          </motion.div>

           {/* Proje 2 */}
           <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group">
            <div className="h-56 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
               <img src="canim.png" alt="Mobil Uygulama" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Canım Ailem App</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">.NET MAUI ile geliştirilen, Android platformunda çalışan, veri tabanı bağlantılı mobil rehber uygulaması.</p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">.NET MAUI</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">SQLite</span>
              </div>
            </div>
          </motion.div>

         {/* Proje 3: Halı Saha Rezervasyon */}
          <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group">
            <div className="h-56 w-full overflow-hidden relative">
               {/* Yeşil overlay (Halı saha çim rengi referansı) */}
               <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
               {/* Resim dosyasının adını değiştirmene gerek yok, proje3.jpg'yi yenile yeter */}
               <img src="halisaha.png" alt="Halı Saha Sistemi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Halı Saha Rezervasyon</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Kullanıcıların online randevu oluşturabildiği, saha yöneticilerinin rezervasyonları ve saatleri yönetebildiği dinamik web uygulaması.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">ASP.NET Core</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">Entity Framework</span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-300">SQL</span>
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