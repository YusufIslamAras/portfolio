"use client";

import { motion } from "framer-motion";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, 
  FaRocket, FaDownload, FaGraduationCap, FaBriefcase, 
  FaMapMarkerAlt, FaBuilding, FaDatabase, FaShoppingCart, FaServer
} from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

// --- PROJE VERİLERİ ---
const projectsData = [
  {
    id: 1,
    title: "Söz Gemisi (sozgemisi.com)",
    desc: "Büyük ölçekli edebiyat ve etkileşim platformu. Divan, Kamara ve Dürbün modüllerinden oluşuyor. 'Miço'dan 'Sadrazam'a uzanan gelişmiş puan/rütbe sistemi ve 'Korsan Maskesi' algoritması ile anonimleşme özellikleri uçtan uca kodlandı.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
    img: "sozgemisi.png", 
    overlayColor: "bg-cyan-500/10",
    hoverBorder: "hover:border-cyan-500",
    shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    titleHover: "group-hover:text-cyan-400"
  },
  {
    id: 2,
    title: "Gelişmiş E-Ticaret Altyapıları",
    desc: "B2B/B2C iş modellerine uygun, yüksek trafik kaldırabilen e-ticaret platformları. Dinamik sepet algoritması, güvenli ödeme (Payment Gateway) entegrasyonu, SEO uyumlu mimari ve detaylı stok/sipariş takibi sunan kapsamlı admin paneli.",
    tech: ["ASP.NET Core", "React", "SQL Server", "REST API"],
    img: "eticaret.png",
    overlayColor: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-500",
    shadow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    titleHover: "group-hover:text-orange-400"
  },
  {
    id: 3,
    title: "Halı Saha Rezervasyon Sistemi",
    desc: "Kullanıcıların gerçek zamanlı online randevu oluşturabildiği, saha yöneticilerinin ise saatleri, ödemeleri ve müşteri kayıtlarını yönetebildiği bulut tabanlı dinamik SaaS çözümü.",
    tech: ["Next.js", "Supabase", "Prisma"],
    img: "halisaha.png",
    overlayColor: "bg-green-500/10",
    hoverBorder: "hover:border-green-500",
    shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    titleHover: "group-hover:text-green-400"
  },
  {
    id: 4,
    title: "Şahin Lojistik Bilişim Ağı",
    desc: "Kurumsal bir lojistik operasyonunun dijital kanadı. Filo yönetimi ve veri akışını optimize eden, modern arayüze sahip, güvenlik odaklı kurumsal web çözümü.",
    tech: ["ASP.NET Web API", "C#", "Bootstrap"],
    img: "sahin-ss.png",
    overlayColor: "bg-blue-500/10",
    hoverBorder: "hover:border-blue-500",
    shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    titleHover: "group-hover:text-blue-400"
  },
  {
    id: 5,
    title: "Yıldız Tekstil Kurumsal Portalı",
    desc: "Geniş çaplı üretim yapan tekstil firması için kurumsal kimlik inşası, web arayüzü geliştirmesi ve UI/UX optimizasyon süreçlerinin yürütülmesi.",
    tech: ["React", "Custom CSS", "SEO"],
    img: "yildiz.png", 
    overlayColor: "bg-rose-500/10",
    hoverBorder: "hover:border-rose-500",
    shadow: "hover:shadow-[0_0_30px_rgba(243,63,118,0.3)]",
    titleHover: "group-hover:text-rose-400"
  },
  {
    id: 6,
    title: "İnteraktif Konsept Tasarımlar",
    desc: "Özel günlere ve kişilere yönelik (örn: elif-dogumgunu-gazete), yüksek animasyonlu, akıcı UI/UX konsept çalışmaları ve niş web deneyimleri.",
    tech: ["React", "Framer Motion", "GitHub Pages"],
    img: "konsept.png", 
    overlayColor: "bg-purple-500/10",
    hoverBorder: "hover:border-purple-500",
    shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    titleHover: "group-hover:text-purple-400"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-white relative z-0">
      
      <ParticlesBackground />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tighter">
          YUSUF<span className="text-white">.DEV</span>
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
          className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_60px_rgba(6,182,212,0.6)] z-10"
        >
          <img src="/ben.jpg" alt="Yusuf İslam Aras" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 w-full max-w-4xl"
        >
          <span className="px-5 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 font-bold text-sm tracking-wider mb-6 inline-block shadow-sm shadow-cyan-500/30 uppercase">
             Full-Stack Developer & Software Craftsman
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent tracking-tight">
            Yusuf İslam Aras
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Sadece kod yazmıyorum; yüksek trafikli e-ticaret altyapılarından, kompleks SaaS platformlarına kadar <strong className="text-cyan-400 font-semibold">ölçeklenebilir mimariler</strong> inşa ediyorum.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap mb-16">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold transition shadow-lg shadow-cyan-500/40 transform hover:-translate-y-1 text-lg">
              Mimariyi İncele
            </a>
            <a 
              href="/cv.pdf" 
              download 
              className="px-8 py-4 bg-slate-900 border-2 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] rounded-xl font-bold transition transform hover:-translate-y-1 flex items-center gap-3 text-slate-300 text-lg"
            >
              <FaDownload /> CV İndir
            </a>
          </div>

          {/* --- HIZLI İSTATİSTİKLER --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8 max-w-3xl mx-auto">
             <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
                <p className="text-slate-400 text-sm mt-1">Canlı Proje</p>
             </div>
             <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-400">B2B/B2C</h4>
                <p className="text-slate-400 text-sm mt-1">E-Ticaret Deneyimi</p>
             </div>
             <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-400">%100</h4>
                <p className="text-slate-400 text-sm mt-1">Responsive UI/UX</p>
             </div>
             <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-400">Uçtan Uca</h4>
                <p className="text-slate-400 text-sm mt-1">Sunucu & Veritabanı</p>
             </div>
          </div>
        </motion.div>
      </section>

      {/* --- HAKKIMDA --- */}
      <section id="about" className="py-24 bg-slate-900/40 border-t border-white/5 relative">
        <div className="container mx-auto px-4 max-w-5xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-950/80 backdrop-blur-xl p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
                {/* Dekoratif Arka Plan Işığı */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                    <span className="text-cyan-400">Hakkımda</span> 
                </h2>
                <div className="text-slate-300 leading-relaxed space-y-6 text-lg md:text-xl font-light">
                    <p>
                        Merhaba, ben Yusuf. <strong className="text-white font-medium"> Bursa</strong> merkezli çalışan, dijital problemlere mühendislik vizyonuyla yaklaşan bir Full-Stack Geliştiriciyim. <strong className="text-white font-medium">Uludağ Üniversitesi Bilgisayar Programcılığı</strong> eğitimimin üzerine koyarak, sektörde sağlam ve sürdürülebilir kod mimarileri üretiyorum.
                    </p>
                    <p>
                        Kapsamlı <strong className="text-cyan-400 font-medium">E-Ticaret sistemlerinden</strong>, özel <strong className="text-cyan-400 font-medium">SaaS çözümlerine</strong> kadar geniş bir yelpazede görev aldım. Projelerde sadece arayüzü kodlamakla kalmıyor; <strong className="text-white">C#, ASP.NET Core, SQL</strong> üçgeninde veritabanı optimizasyonunu kurguluyor, <strong className="text-white">React ve Next.js</strong> ile kullanıcıya kusursuz bir deneyim sunuyorum. Sunucu yönetiminden canlıya almaya kadar sürecin her anında kontrol bende.
                    </p>
                    <div className="pt-6 flex items-center gap-3 text-base text-cyan-500 font-mono font-bold bg-cyan-950/30 w-max px-4 py-2 rounded-lg border border-cyan-500/20">
                        <FaMapMarkerAlt className="text-xl"/> Bursa, Türkiye | Remote & Hibrit
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- DENEYİM VE EĞİTİM --- */}
      <section className="py-24 container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-200">Kariyer & Eğitim Rotası</h2>
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-10 space-y-16">
            
            {/* ŞAHİN LOJİSTİK */}
            <div className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] md:-left-[51px] top-0 w-8 h-8 bg-cyan-500 rounded-full border-[6px] border-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center"></div>
                <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3"><FaBriefcase className="text-cyan-400"/> Şahin Lojistik</h3>
                        <span className="text-sm text-cyan-400 font-mono bg-cyan-900/30 border border-cyan-800/50 px-3 py-1 rounded mt-2 md:mt-0 h-max">2025 (Remote)</span>
                    </div>
                    <h4 className="text-xl text-cyan-100/70 mb-4 font-medium">Full-Stack Yazılım Geliştirici</h4>
                    <ul className="text-slate-400 list-none space-y-3 text-base md:text-lg">
                        <li className="flex gap-2"><span className="text-cyan-500">▹</span> Lojistik operasyonları için kritik veri akışlarını yöneten ASP.NET Web API backend mimarisinin inşası.</li>
                        <li className="flex gap-2"><span className="text-cyan-500">▹</span> Yüksek hacimli veriler için veritabanı şema tasarımı ve gelişmiş sorgu optimizasyonları.</li>
                        <li className="flex gap-2"><span className="text-cyan-500">▹</span> Tamamen uzaktan (Remote) çevik yönetim (Agile) ile modüllerin zamanında teslimi.</li>
                    </ul>
                </div>
            </div>

            {/* AIF BİLİŞİM */}
            <div className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] md:-left-[51px] top-0 w-8 h-8 bg-blue-500 rounded-full border-[6px] border-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3"><FaBuilding className="text-blue-400"/> AIF Bilişim ve Danışmanlık</h3>
                        <span className="text-sm text-blue-400 font-mono bg-blue-900/30 border border-blue-800/50 px-3 py-1 rounded mt-2 md:mt-0 h-max">2024 - 2025</span>
                    </div>
                    <h4 className="text-xl text-blue-100/70 mb-4 font-medium">Full-Stack Yazılım Geliştirici</h4>
                    <ul className="text-slate-400 list-none space-y-3 text-base md:text-lg">
                        <li className="flex gap-2"><span className="text-blue-500">▹</span> B2B odaklı kurumsal projelerde C# / ASP.NET mimarisi ile güvenli sunucu tarafı kodlaması.</li>
                        <li className="flex gap-2"><span className="text-blue-500">▹</span> React.js ile state yönetimi yapılarak asenkron çalışan dinamik müşteri arayüzlerinin oluşturulması.</li>
                        <li className="flex gap-2"><span className="text-blue-500">▹</span> E-Ticaret ödeme sistemleri ve harici RESTful API entegrasyonlarının başarılı şekilde gerçekleştirilmesi.</li>
                    </ul>
                </div>
            </div>

            {/* ULUDAĞ ÜNİVERSİTESİ */}
            <div className="relative pl-8 md:pl-0">
                 <div className="absolute -left-[9px] md:-left-[51px] top-0 w-8 h-8 bg-purple-500 rounded-full border-[6px] border-slate-950 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
                <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/5 hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3"><FaGraduationCap className="text-purple-400"/> Uludağ Üniversitesi</h3>
                        <span className="text-sm text-purple-400 font-mono bg-purple-900/30 border border-purple-800/50 px-3 py-1 rounded mt-2 md:mt-0 h-max">2023 - 2025</span>
                    </div>
                    <h4 className="text-xl text-purple-100/70 mb-4 font-medium">Bilgisayar Programcılığı</h4>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                        Nesne Yönelimli Programlama (OOP), Algoritma Analizi ve Veritabanı Yönetimi üzerine kapsamlı eğitim. Teorik bilginin kurumsal düzeydeki projelere (SQL, C#, Web Mimarileri) pratik olarak entegre edilmesi süreci.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- TEKNOLOJİLER --- */}
      <section className="py-28 bg-slate-950/90 border-y border-cyan-500/20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Teknoloji Cephaneliği</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            <motion.div whileHover={{scale: 1.15, color: "#22d3ee"}} className="flex flex-col items-center gap-5 text-slate-400 transition cursor-pointer p-6 bg-slate-900/50 rounded-2xl border border-white/5 w-40">
                <FaServer className="text-5xl md:text-6xl" /> <span className="text-lg font-bold">.NET / C#</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.15, color: "#22d3ee"}} className="flex flex-col items-center gap-5 text-slate-400 transition cursor-pointer p-6 bg-slate-900/50 rounded-2xl border border-white/5 w-40">
                <FaLaptopCode className="text-5xl md:text-6xl" /> <span className="text-lg font-bold">React / Next.js</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.15, color: "#22d3ee"}} className="flex flex-col items-center gap-5 text-slate-400 transition cursor-pointer p-6 bg-slate-900/50 rounded-2xl border border-white/5 w-40">
                <FaShoppingCart className="text-5xl md:text-6xl" /> <span className="text-lg font-bold">E-Commerce</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.15, color: "#22d3ee"}} className="flex flex-col items-center gap-5 text-slate-400 transition cursor-pointer p-6 bg-slate-900/50 rounded-2xl border border-white/5 w-40">
                <FaDatabase className="text-5xl md:text-6xl" /> <span className="text-lg font-bold">SQL / Supabase</span>
            </motion.div>
            <motion.div whileHover={{scale: 1.15, color: "#22d3ee"}} className="flex flex-col items-center gap-5 text-slate-400 transition cursor-pointer p-6 bg-slate-900/50 rounded-2xl border border-white/5 w-40">
                <FaRocket className="text-5xl md:text-6xl" /> <span className="text-lg font-bold">Tailwind CSS</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJELER --- */}
      <section id="projects" className="py-32 container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">Kritik Projeler</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Basit web sitelerinden ziyade; veri güvenliği, yüksek trafik yönetimi ve algoritmik iş akışları gerektiren uygulamalar.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -12, scale: 1.02 }} 
              className={`bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group ${project.hoverBorder} ${project.shadow} flex flex-col`}
            >
              <div className="h-60 w-full overflow-hidden relative">
                 <div className={`absolute inset-0 ${project.overlayColor} group-hover:bg-transparent transition-all duration-500 z-10`}></div>
                 <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-4 transition ${project.titleHover}`}>
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-base flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-bold mt-auto">
                  {project.tech.map((techItem, index) => (
                    <span key={index} className="px-3 py-1.5 bg-slate-950 border border-slate-700/50 rounded-md text-cyan-300 shadow-sm">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-20 border-t border-cyan-500/20 bg-slate-950 text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Dijitalde Bir İz Bırakalım.</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">Yeni bir projeye mi ihtiyacın var? Fikirlerini güçlü, güvenli ve modern bir koda dönüştürmek için bana ulaşabilirsin.</p>
        <div className="flex justify-center gap-10 text-4xl mb-12">
            <a href="https://github.com/YusufIslamAras" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 hover:scale-125 transition transform"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/yusuf-islam-aras/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 hover:scale-125 transition transform"><FaLinkedin /></a>
            <a href="mailto:yusufislamras08@gmail.com" className="text-slate-500 hover:text-cyan-400 hover:scale-125 transition transform"><FaEnvelope /></a>
        </div>
        <p className="text-slate-600 font-medium">© 2026 Yusuf İslam Aras. Kodlandı & <span className="text-cyan-500">Next.js</span> ile ayağa kaldırıldı.</p>
      </footer>
    </main>
  );
}